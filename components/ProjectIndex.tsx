"use client";

import { useMemo, useState } from "react";
import { clients, type ReferenceItem, references } from "@/lib/content";

// Projects page: filterable index of Hydro's references (priority landmark + active jobs + historic).
// Highlights priority landmark projects prominently at the top and via dedicated filter.
const filters: Array<{
  k: string;
  label: string;
  test: (s: string, r: ReferenceItem) => boolean;
}> = [
  { k: "all", label: "All work", test: () => true },
  { k: "priority", label: "★ Priority & Landmark", test: (_s, r) => Boolean(r.priority) },
  { k: "chw", label: "Chilled water flushing", test: (s) => /flush/i.test(s) },
  { k: "dcp", label: "District cooling & networks", test: (s, r) => /dcp|district|network|chw network/i.test(`${s} ${r.name}`) },
  { k: "chem", label: "Chemical treatment & dosing", test: (s) => /chemical|dosing|passivation/i.test(s) },
  { k: "rental", label: "Equipment rental & fleet", test: (s, r) => /rental|pump|package|skid|chemicals supply/i.test(`${s} ${r.name}`) },
  { k: "stp", label: "STP & wastewater", test: (s) => /STP|greywater|wastewater/i.test(s) },
  { k: "dis", label: "Disinfection", test: (s) => /disinfection/i.test(s) },
];

export default function ProjectIndex() {
  const [active, setActive] = useState("all");
  const counts = useMemo(
    () => Object.fromEntries(filters.map((f) => [f.k, references.filter((r) => f.test(r.scope, r)).length])),
    []
  );
  const f = filters.find((x) => x.k === active) ?? filters[0];
  const rows = references.filter((r) => f.test(r.scope, r));

  return (
    <section className="pi" id="projects">
      <div className="wrap">
        <div className="pi-bar">
          <div>
            <h2 className="serif">Project index</h2>
            <p className="pi-sub">
              Delivered and active engineering references across the UAE — including priority district cooling and landmark utility networks.
            </p>
          </div>
          <div className="pi-filters" role="group" aria-label="Filter projects by scope">
            {filters.map((x) => (
              <button
                key={x.k}
                type="button"
                aria-pressed={active === x.k}
                className={`${active === x.k ? "on" : ""}${x.k === "priority" ? " is-priority" : ""}`}
                onClick={() => setActive(x.k)}
              >
                {x.label}<sup>{counts[x.k]}</sup>
              </button>
            ))}
          </div>
        </div>

        <ol className="pi-list" aria-live="polite">
          {rows.map((r, i) => (
            <li
              className={`pi-row${r.priority ? " priority" : ""}`}
              key={`${r.name}-${r.rel}-${r.srl ?? i}`}
              style={{ animationDelay: `${Math.min(i, 12) * 35}ms` }}
            >
              <span className="pi-n">
                {String(i + 1).padStart(2, "0")}
                {r.date && <small className="pi-date">{r.date}</small>}
              </span>
              <h3 className="serif">
                {r.name}
                {r.priority && <em className="priority-tag">★ Priority</em>}
                {r.historic && <em>Historic</em>}
              </h3>
              <p className="pi-scope">{r.scope}</p>
              <p className="pi-rel">
                <small>{r.relLabel}</small>
                {r.rel}
              </p>
            </li>
          ))}
        </ol>

        <div className="pi-foot">
          <p><small>Worked with</small>{clients.join(" · ")}</p>
          <span>Projects are shown with HEES&apos;s specific scope only.</span>
        </div>
      </div>
    </section>
  );
}
