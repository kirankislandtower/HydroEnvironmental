"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./QuickContact";
import { usePathname } from "next/navigation";
import { company, homeSectionFor, navLinks } from "@/lib/content";

function Chevron() {
  return (
    <svg className="chev" width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const pathname = usePathname();
  // Expanding a group scrolls the menu so the group's row sits at the top and its pages are visible
  const toggleSub = (label: string, btn: HTMLElement) => {
    const next = sub === label ? null : label;
    setSub(next);
    if (!next) return;
    const body = btn.closest<HTMLElement>(".mnav-body"), row = btn.closest("li");
    if (body && row) setTimeout(() => body.scrollTo({ top: row.offsetTop - 8, behavior: "smooth" }), 60);
  };
  const routeIndex = navLinks.findIndex((l) => l.href !== "/" && pathname.startsWith(l.href));
  const [homeActive, setHomeActive] = useState(0);
  const active = pathname === "/" ? homeActive : routeIndex;

  useEffect(() => {
    // visible at the very top; hides while scrolling down, reappears on scroll up
    // Runs at most once per frame (Lenis fires scroll every frame); the hit-test for the
    // light/dark tone is the expensive part, so it is skipped unless the page actually moved.
    let lastY = window.scrollY, toneY = -Infinity, frame = 0;
    const header = document.querySelector<HTMLElement>(".site-header");
    let hovered = false;
    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    header?.addEventListener("pointerenter", onEnter);
    header?.addEventListener("pointerleave", onLeave);
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 120) setHidden(false);
      else if (y > lastY + 6 && !hovered) setHidden(true);
      else if (y < lastY - 6) setHidden(false);
      lastY = y;
      // light navbar over light sections (reference behaviour): sections opt in with data-tone="light"
      if (Math.abs(y - toneY) > 8) {
        toneY = y;
        const hit = document.elementsFromPoint(window.innerWidth / 2, 50).find((el) => !el.closest(".site-header, .lp-progress"));
        setLight(hit?.closest("[data-tone]")?.getAttribute("data-tone") === "light");
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      header?.removeEventListener("pointerenter", onEnter);
      header?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // on the homepage the active link follows the section in view
  useEffect(() => {
    if (pathname !== "/") return;
    const els = navLinks
      .map((l, i) => ({ i, el: homeSectionFor[l.href] ? document.querySelector(homeSectionFor[l.href]) : null }))
      .filter((x): x is { i: number; el: Element } => !!x.el);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const hit = els.find((x) => x.el === e.target);
        if (hit) setHomeActive(hit.i);
      }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((x) => io.observe(x.el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}${light ? " light" : ""}${hidden && !open ? " hidden" : ""}`}>
        <div className="wrap bar">
          <Logo href="/" />

          <nav aria-label="Main">
            <ul className="nav">
              {navLinks.map((item, i) => {
                const cls = i === active ? "on" : undefined;
                return "children" in item ? (
                  <li className="has-dd" key={item.label}>
                    <a className={cls} href={item.href} aria-haspopup="true">
                      {item.label} <Chevron />
                    </a>
                    <div className={`dd${item.children.length > 4 ? " wide" : ""}`}>
                      {item.children.map((c) => (
                        <a href={c.href} key={c.title}>
                          <b>{c.title}</b>
                          <span>{c.desc}</span>
                        </a>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a className={cls} href={item.href}>{item.label}</a>
                  </li>
                );
              })}
              <li>
                <a className={`nav-contact${pathname === "/contact" ? " on" : ""}`} href="/contact#contact" data-magnetic>Contact</a>
              </li>
            </ul>
          </nav>

          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <span>Menu</span>
            <i />
          </button>
        </div>
      </header>

      <div className={`mnav${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mnav-top">
          <Logo size={40} href="/" />
          <button className="burger close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <span>Close</span>
            <i />
          </button>
        </div>
        <div className="mnav-body" data-lenis-prevent>
          <span className="mnav-label">Menu</span>
          <ol>
            {[...navLinks, { label: "Contact", href: "/contact#contact" }].map((item, i) => {
              const kids = "children" in item ? item.children : null;
              const isOn = item.href === "/contact#contact" ? pathname === "/contact" : i === active;
              const isSub = sub === item.label;
              return (
                <li key={item.label} className={`${isOn ? "on" : ""}${isSub ? " sub" : ""}`} style={{ transitionDelay: open ? `${0.06 + i * 0.04}s` : "0s" }}>
                  <div className="mnav-row">
                    <a href={item.href} onClick={() => setOpen(false)}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      <span>{item.label}</span>
                    </a>
                    {kids && (
                      <button type="button" className="mnav-tog" aria-expanded={isSub} aria-label={`${isSub ? "Hide" : "Show"} ${item.label} pages`} onClick={(e) => toggleSub(item.label, e.currentTarget)}>
                        <Chevron />
                      </button>
                    )}
                  </div>
                  {kids && (
                    <div className="mnav-kids" aria-hidden={!isSub}>
                      <div>
                        {kids.map((c) => (
                          <a key={c.title} href={c.href} tabIndex={isSub ? 0 : -1} onClick={() => setOpen(false)}>{c.title}</a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mnav-foot">
          <a className="mnav-ico call" href={company.phoneHref} aria-label={`Call ${company.phone}`}><PhoneIcon size={17} /></a>
          <a className="mnav-ico wa" href={company.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp: ${company.phone}`}><WhatsAppIcon size={20} /></a>
        </div>
      </div>
    </>
  );
}
