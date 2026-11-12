"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";

type Faq = { q: string; a: string };

// Native <details> (answers stay in the HTML for SEO / FAQPage schema) with a smooth
// height + fade animation on open and close. Opening one question closes the others.
export default function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  const list = useRef<HTMLDivElement>(null);
  const reduce = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animate = (d: HTMLDetailsElement, open: boolean) => {
    const body = d.querySelector<HTMLElement>(".faq-a");
    if (!body || reduce()) { d.open = open; return; }
    body.getAnimations().forEach((a) => a.cancel());
    if (open) d.open = true;
    const h = body.scrollHeight;
    d.classList.toggle("is-open", open);
    const anim = body.animate(
      open
        ? [{ height: "0px", opacity: 0, transform: "translateY(-8px)" }, { height: `${h}px`, opacity: 1, transform: "none" }]
        : [{ height: `${h}px`, opacity: 1, transform: "none" }, { height: "0px", opacity: 0, transform: "translateY(-8px)" }],
      { duration: open ? 480 : 360, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
    anim.onfinish = () => { if (!open) d.open = false; };
  };

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const d = e.currentTarget.parentElement as HTMLDetailsElement;
    const opening = !d.classList.contains("is-open");
    if (opening) list.current?.querySelectorAll<HTMLDetailsElement>("details.is-open").forEach((o) => o !== d && animate(o, false));
    animate(d, opening);
  };

  return (
    <div className="faq-list" ref={list}>
      {faqs.map((f, i) => (
        <details className={`faq-item rv${i === 0 ? " is-open" : ""}`} key={f.q} open={i === 0}>
          <summary onClick={onClick}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{f.q}</h3>
            <span className="plus" aria-hidden="true" />
          </summary>
          <div className="faq-a"><p>{f.a}</p></div>
        </details>
      ))}
    </div>
  );
}
