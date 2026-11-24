// Insights — technical articles that answer the "how / what / why" searches buyers make before they hire.
// Rules: general industry practice only; anything said about HEES must match the capability profile
// (see lib/pages.ts). No numbers that a project specification should set (velocities, hold times).
// Inline links use [text](/path) and are rendered as internal <Link>s.

export type Section = { h: string; p: string[]; list?: string[]; after?: string[] };

export type Article = {
  slug: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  published: string; // ISO date
  updated?: string;
  image: string;
  imageAlt: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  services: { label: string; href: string }[]; // related service pages (internal links)
};

export const articles: Article[] = [
  {
    slug: "chilled-water-flushing-procedure",
    title: "Chilled water flushing procedure: a step-by-step guide.",
    metaTitle: "Chilled Water Flushing Procedure — Step-by-Step Guide",
    metaDescription:
      "How chilled water (CHW) systems are flushed before commissioning in the UAE: planning, static and dynamic flushing, chemical cleaning, filtration, sampling and handover.",
    excerpt:
      "From the flushing plan to the final water sample — the stages that take a new chilled water network from construction debris to commissioning-ready.",
    category: "District cooling",
    published: "2026-11-23",
    image: "/images/sectors/district-cooling.webp",
    imageAlt: "Chilled water pumps and insulated CHW pipework in a district cooling plant room",
    sections: [
      {
        h: "Why chilled water systems must be flushed",
        p: [
          "A newly installed chilled water (CHW) network is never clean. Pipes arrive with mill scale and protective oils, and installation leaves behind welding slag, cutting debris, sand and sediment. If that contamination is circulated through the live system it blocks strainers, fouls plate heat exchangers, sticks control valves, damages pumps and accelerates corrosion.",
          "In district cooling the cost shows up as poor delta-T and delayed connection to the network. That is why consultants and district cooling operators in the UAE require documented flushing and cleaning before a building or energy transfer station (ETS) is accepted. Many specifications reference BSRIA BG29 (pre-commission cleaning of pipework systems) — the project specification always sets the acceptance criteria.",
        ],
      },
      {
        h: "Step 1 — Survey the system and write the flushing plan",
        p: ["Flushing is engineered before it is executed. The plan is built from the drawings and a site walk-down:"],
        list: [
          "Pipe sizes, routing and total system volume",
          "Fill points, high-point vents, low-point drains and flushing connections",
          "Equipment that must be isolated or bypassed — plate heat exchangers, control valves, energy meters, coils",
          "Temporary bypass loops, spools and circulation arrangements",
          "Water source, discharge route and disposal approvals",
          "Temporary pump and filtration sizing for the required flow",
        ],
        after: ["Sensitive components are kept out of the flushing circuit — flushing debris through a plate heat exchanger is the most common and most expensive mistake."],
      },
      {
        h: "Step 2 — Fill, vent and pre-flush",
        p: [
          "The system is filled with clean water and vented at high points. A static or low-velocity pre-flush removes the loose, heavy debris through drains and strainers before any high-velocity circulation starts, so that large debris is not driven into branches and equipment.",
        ],
      },
      {
        h: "Step 3 — Dynamic flushing",
        p: [
          "Dynamic flushing circulates water at a velocity high enough to pick up and carry debris — typically above the system's normal operating velocity, at the value set by the specification. Temporary flushing pumps provide the flow, and the network is flushed section by section, mains first and then branches, so every pipe sees the required velocity.",
          "Strainers and temporary filters are inspected and cleaned throughout, and velocities, flow rates and observations are recorded in the flushing log.",
        ],
      },
      {
        h: "Step 4 — Chemical cleaning",
        p: [
          "Water alone does not remove oils, grease and mill scale. A chemical cleaning stage circulates a cleaning solution selected for the pipe materials and the type of contamination, followed by draining, rinsing and neutralization. Chemistry and compatibility with gaskets, seals and other materials are checked before anything is dosed — see our guide to [chemical cleaning and passivation](/insights/chemical-cleaning-and-passivation).",
        ],
      },
      {
        h: "Step 5 — Filtration to the required cleanliness",
        p: [
          "Fine suspended solids remain after flushing. [Side-stream filtration](/insights/side-stream-filtration-chilled-water) passes part of the circulating water through filters continuously, stepping down to finer filter elements as cleanliness improves, until water quality meets the specification.",
        ],
      },
      {
        h: "Step 6 — Treatment and protection",
        p: [
          "A clean system is also a vulnerable one. Corrosion inhibitor and biocide are dosed so the network is protected from the moment flushing ends. The gap between cleaning and treatment should be as short as possible — systems left drained or untreated corrode and foul again.",
        ],
      },
      {
        h: "Step 7 — Sampling, records and handover",
        p: ["Acceptance is based on evidence. Water samples are taken and analysed for the parameters in the specification, and the handover file typically includes:"],
        list: [
          "The approved flushing method statement and plan",
          "Flushing logs with flows, velocities and strainer inspections",
          "Chemical cleaning and dosing records",
          "Water quality and laboratory reports",
          "Sign-off by the contractor, consultant and operator",
        ],
      },
      {
        h: "Common mistakes that delay commissioning",
        p: [],
        list: [
          "Flushing through plate heat exchangers, control valves or meters instead of bypassing them",
          "Circulating at too low a velocity to move debris",
          "No plan for water supply and discharge",
          "Leaving the system drained or untreated after cleaning",
          "Missing records — work that is not documented will be questioned at handover",
        ],
      },
    ],
    faqs: [
      { q: "How long does chilled water flushing take?", a: "It depends on system volume, pipe sizes, the level of contamination, access for temporary equipment and the acceptance criteria. A realistic programme is set in the flushing plan after the system survey." },
      { q: "Who carries out chilled water flushing in the UAE?", a: "Flushing is usually carried out by a specialist contractor working for the MEP contractor or the district cooling operator. HEES plans and executes CHW flushing for district cooling networks, ETS, DCP internal piping and building systems across the UAE." },
      { q: "What is the difference between flushing and chemical cleaning?", a: "Flushing uses water velocity to physically remove loose debris. Chemical cleaning uses a selected chemistry to remove oils, grease and scale that water alone cannot. Most new CHW systems need both." },
    ],
    services: [
      { label: "District cooling & CHW flushing", href: "/solutions/district-cooling" },
      { label: "Flushing pump & skid rental", href: "/products/equipment" },
      { label: "Chemical cleaning & treatment", href: "/solutions/chemical-treatment" },
    ],
  },
  {
    slug: "hydrostatic-testing-procedure",
    title: "Hydrostatic testing of pipelines: procedure and records.",
    metaTitle: "Hydrostatic Testing Procedure for Pipelines — Hydrotest Guide",
    metaDescription:
      "What a pipeline hydrotest is, how test pressure is set, how the test is prepared, run and recorded, and the safety controls that apply — a practical hydrotesting guide.",
    excerpt:
      "How a hydrotest proves a pipeline's strength and tightness — from test packs and calibrated gauges to the chart that gets signed off.",
    category: "Pre-commissioning",
    published: "2026-11-23",
    image: "/images/stages/06-monitoring-validation.webp",
    imageAlt: "Pressure gauges and a regulator on a test manifold with a green hose connected",
    sections: [
      {
        h: "What is a hydrotest?",
        p: [
          "A hydrostatic test (hydrotest) fills a pipeline or piping system with water and raises the pressure above the design pressure for a set period. It proves two things before the system goes into service: that it is strong enough, and that it does not leak.",
          "Water is used because it is almost incompressible — if a joint fails, very little stored energy is released compared with a gas test at the same pressure.",
        ],
      },
      {
        h: "How test pressure is set",
        p: [
          "Test pressure comes from the design code and the project specification, not from rule of thumb. For example, process piping designed to ASME B31.3 is normally hydrotested at 1.5 times the design pressure, with a correction for temperature. Building services and utility systems follow the consultant's specification.",
          "The test pressure must never exceed the rating of any component in the test section. Valves, instruments, expansion joints and equipment that cannot take the pressure are isolated or removed and replaced with spools or blinds.",
        ],
      },
      {
        h: "Preparation",
        p: ["A good test is prepared on paper first. Typical preparation includes:"],
        list: [
          "A test pack with marked-up drawings showing the test limits, test pressure and hold period",
          "Test blinds and isolation at every boundary",
          "Vents at high points and drains at low points",
          "Calibrated pressure gauges with valid certificates, and a chart recorder",
          "A relief valve to protect the system against over-pressure",
          "Clean test water of the quality the specification requires (low-chloride water for stainless steel)",
        ],
      },
      {
        h: "Running the test",
        p: [
          "The system is filled from the low point and vented until all air is removed — trapped air makes the test unsafe and the readings unreliable. After temperature has stabilized, pressure is raised in stages with a hydrotest pump, holding at each stage to check for leaks.",
          "At test pressure the system is isolated from the pump and held for the specified period while joints are inspected and the chart records pressure and time. The system is then depressurized slowly and drained.",
        ],
      },
      {
        h: "Safety controls",
        p: [],
        list: [
          "Barricade and sign the test area; only authorized people inside",
          "Restrain hoses and temporary connections",
          "Never tighten or repair a joint while it is under pressure",
          "Pressurize and depressurize in a controlled way",
          "Use calibrated gauges and a set relief valve",
        ],
      },
      {
        h: "After the test",
        p: [
          "Water left in a pipeline causes corrosion. After draining, the system is dried or preserved where required, temporary blinds are removed, and components are reinstated. If the system will stand idle, preservation is planned with the cleaning and flushing stages — see [what pipeline pre-commissioning covers](/insights/what-is-pipeline-pre-commissioning).",
        ],
      },
      {
        h: "Records the client will expect",
        p: [],
        list: [
          "Approved test pack and procedure",
          "Gauge and recorder calibration certificates",
          "Signed pressure chart",
          "Test certificate signed by the contractor, consultant and, where required, third-party inspector",
        ],
      },
    ],
    faqs: [
      { q: "What pressure is used for a hydrotest?", a: "The design code and project specification set it. For ASME B31.3 process piping it is normally 1.5 times the design pressure with a temperature correction; other systems follow their own code or the consultant's specification." },
      { q: "Why use water instead of air for pressure testing?", a: "Water is almost incompressible, so far less energy is stored in the system. If a joint fails during a hydrotest the release is much less dangerous than with a gas test." },
      { q: "Can I rent a hydrotest pump in the UAE?", a: "Yes. HEES rents hydrotesting pumps with pressure gauges, chart recorders, manifolds, hoses and test accessories, and can supply a technician to run the test." },
    ],
    services: [
      { label: "Pipeline pre-commissioning & hydrotesting", href: "/solutions/process-pipeline-engineering" },
      { label: "Hydrotest pump rental", href: "/products/equipment" },
    ],
  },
  {
    slug: "what-is-pipeline-pre-commissioning",
    title: "What is pipeline pre-commissioning?",
    metaTitle: "What Is Pipeline Pre-Commissioning? Scope, Steps & Handover",
    metaDescription:
      "Pipeline pre-commissioning explained: where it sits between construction and commissioning, the activities it covers, how it is planned and what is handed over.",
    excerpt:
      "The work between mechanical completion and start-up — what pre-commissioning covers, who is involved and why it decides whether commissioning runs on time.",
    category: "Pre-commissioning",
    published: "2026-11-23",
    image: "/images/stages/05-controlled-execution.webp",
    imageAlt: "Worker in gloves handling a pipeline section in an excavated trench",
    sections: [
      {
        h: "Where pre-commissioning fits",
        p: [
          "A piping system passes through four stages before it is in service: construction to mechanical completion, pre-commissioning, commissioning and start-up. Pre-commissioning is everything done to a mechanically complete system to make it clean, tested and ready — before process fluid is introduced.",
          "Commissioning then brings the system into operation with its real fluid, controls and equipment. If pre-commissioning is incomplete, commissioning stalls.",
        ],
      },
      {
        h: "What pre-commissioning covers",
        p: ["The scope depends on the system type and the specification. It typically includes:"],
        list: [
          "Cleaning and flushing to remove construction debris",
          "Filling and venting",
          "[Hydrostatic testing](/insights/hydrostatic-testing-procedure) to prove strength and tightness",
          "Dewatering support after testing",
          "Filtration to the required water quality",
          "Disinfection of potable and utility water systems",
          "[Chemical cleaning](/insights/chemical-cleaning-and-passivation) to remove oils and scale",
          "Commissioning assistance and handover documentation",
        ],
      },
      {
        h: "Who is involved",
        p: [
          "Pre-commissioning sits between several parties: the main or MEP contractor who built the system, the consultant who approves the method and witnesses tests, the commissioning manager who needs the system ready, and the operator who will run it. A specialist pre-commissioning contractor plans and executes the work and produces the records each party needs.",
        ],
      },
      {
        h: "How it is planned",
        p: ["Pre-commissioning is planned early, alongside construction. The method statement defines:"],
        list: [
          "System boundaries and the sequence of test and flush sections",
          "Water source, quality, discharge route and disposal approvals",
          "Temporary pumps, filtration, hoses, tanks and power",
          "Isolation of equipment that must not be flushed or pressurized",
          "Acceptance criteria and the records required for each activity",
        ],
      },
      {
        h: "Why pre-commissioning fails",
        p: [],
        list: [
          "Planning starts too late, after the system is complete",
          "No agreed water supply or discharge route",
          "Temporary equipment undersized for the required flow or pressure",
          "Systems re-contaminated or left untreated between activities",
          "Records incomplete, so tests have to be repeated",
        ],
      },
      {
        h: "What is handed over",
        p: [
          "The output of pre-commissioning is a system the client can accept — and the evidence for it: flushing logs, pressure test charts and certificates, chemical cleaning and dosing records, water quality reports and signed checklists.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between pre-commissioning and commissioning?", a: "Pre-commissioning makes a mechanically complete system clean, tested and ready without its process fluid. Commissioning then brings it into operation with its real fluid, equipment and controls." },
      { q: "Is hydrotesting part of pre-commissioning?", a: "Yes. Hydrostatic testing is one of the core pre-commissioning activities, alongside cleaning, flushing, filling, dewatering, filtration, disinfection and chemical cleaning." },
      { q: "Do you carry out pipeline pre-commissioning in the UAE?", a: "Yes. HEES plans and executes pre-commissioning — flushing, hydrotesting, chemical cleaning, filtration and disinfection — for projects across Dubai, Abu Dhabi, Sharjah and the Northern Emirates." },
    ],
    services: [
      { label: "Process & pipeline pre-commissioning", href: "/solutions/process-pipeline-engineering" },
      { label: "District cooling flushing", href: "/solutions/district-cooling" },
      { label: "Equipment rental", href: "/products/equipment" },
    ],
  },
  {
    slug: "side-stream-filtration-chilled-water",
    title: "Side-stream filtration for chilled water systems.",
    metaTitle: "Side-Stream Filtration for Chilled Water Systems Explained",
    metaDescription:
      "What side-stream filtration is, why chilled water and district cooling systems need it, the filter types used, and how staged filtration reaches the required cleanliness.",
    excerpt:
      "Why a fraction of the flow, filtered continuously, keeps a chilled water network clean — and protects the heat exchangers that matter most.",
    category: "District cooling",
    published: "2026-11-23",
    image: "/images/stages/04-site-mobilization.webp",
    imageAlt: "Blue filter vessels and temporary pipework of a filtration package on site",
    sections: [
      {
        h: "What side-stream filtration is",
        p: [
          "Side-stream filtration takes a portion of the water circulating in a system, passes it through a filter and returns it — continuously, while the system keeps running. Over time the whole system volume passes through the filter many times, and suspended solids are progressively removed.",
          "Because only a fraction of the flow is filtered, the main system flow and pressure are not restricted the way a full-flow filter would restrict them.",
        ],
      },
      {
        h: "Why chilled water systems need it",
        p: ["Even after flushing, fine particles, corrosion products and biological matter stay in suspension. Left in the system they:"],
        list: [
          "Foul plate heat exchangers and reduce heat transfer",
          "Stick control valves and affect energy meters",
          "Settle in low-velocity areas and promote under-deposit corrosion",
          "Reduce the effectiveness of water treatment chemicals",
        ],
        after: ["In district cooling, where a single plate heat exchanger at an ETS serves an entire building, protecting heat transfer surfaces is what keeps delta-T on target."],
      },
      {
        h: "Types of filters used",
        p: [],
        list: [
          "Bag and cartridge filters — simple, with elements rated by micron size",
          "Media filters — sand or multimedia beds for larger volumes",
          "Separators — cyclonic separators for heavier particles",
        ],
        after: ["Filter housings are fitted with differential pressure monitoring, so elements are changed when they load up rather than on a fixed schedule."],
      },
      {
        h: "Staged filtration during commissioning",
        p: [
          "During pre-commissioning a temporary filtration skid is connected to the system. Filtration starts with coarser elements to remove the bulk of the debris, then steps down to finer elements as cleanliness improves — loading fine elements too early only means changing them constantly.",
          "Water samples are taken at each stage and filtration continues until the specified water quality is reached. It follows [dynamic flushing](/insights/chilled-water-flushing-procedure), it does not replace it.",
        ],
      },
      {
        h: "Temporary and permanent filtration",
        p: [
          "Temporary skids are used during flushing and commissioning. Many systems also have a permanent side-stream filter for operation — the commissioning phase is the time to make sure it is clean, working and correctly sized.",
        ],
      },
    ],
    faqs: [
      { q: "Does side-stream filtration replace flushing?", a: "No. Flushing removes the bulk of construction debris with velocity. Side-stream filtration then removes the fine suspended solids that remain and keeps the system clean." },
      { q: "How fine should the filtration be?", a: "It depends on the system and the acceptance criteria in the specification. Filtration usually starts coarse and steps down to finer elements as the water gets cleaner." },
      { q: "Can I rent a filtration skid in the UAE?", a: "Yes. HEES supplies flushing and filtration skids, filter vessels and temporary bypass filtration for sale or rental, with operators if needed." },
    ],
    services: [
      { label: "District cooling & side-stream filtration", href: "/solutions/district-cooling" },
      { label: "Filtration skid rental", href: "/products/equipment" },
      { label: "Flushing & filtration skids", href: "/solutions/equipment-engineering" },
    ],
  },
  {
    slug: "chemical-cleaning-and-passivation",
    title: "Chemical cleaning and passivation of pipework.",
    metaTitle: "Chemical Cleaning & Passivation of Pipework — When & Why",
    metaDescription:
      "When pipework needs chemical cleaning, how degreasing, descaling, neutralization and passivation work, and the material, safety and disposal controls that apply.",
    excerpt:
      "Water removes debris; chemistry removes oil, grease and scale. How chemical cleaning and passivation are sequenced — and kept safe.",
    category: "Chemical treatment",
    published: "2026-11-23",
    image: "/images/products/chemicals-supply.webp",
    imageAlt: "Rows of sealed blue and white chemical drums with orange lids",
    sections: [
      {
        h: "When chemical cleaning is needed",
        p: [
          "Flushing removes loose debris, but it cannot remove contamination that is stuck to the pipe wall. Chemical cleaning is used when a system contains:",
        ],
        list: [
          "Oils, grease and protective coatings from manufacturing and fabrication",
          "Mill scale and rust on new carbon steel pipework",
          "Scale and deposits in existing systems",
          "Process contaminants that affect water quality or the process",
        ],
      },
      {
        h: "The typical sequence",
        p: ["The exact steps depend on the material and contamination, but a full chemical clean usually follows this order:"],
        list: [
          "Degreasing — an alkaline cleaner removes oils and grease",
          "Rinse",
          "Descaling — an inhibited acid removes mill scale, rust and deposits, where required",
          "Rinse",
          "Neutralization — pH is corrected before draining",
          "Passivation — the cleaned surface is protected",
          "Final rinse, then inhibitor dosing or preservation",
        ],
      },
      {
        h: "What passivation does",
        p: [
          "After acid cleaning, bare steel is highly reactive and will flash-rust quickly. Passivation forms a protective film on the cleaned surface so the system does not start corroding the moment it is drained.",
          "For stainless steel, passivation removes free iron from the surface and restores the chromium oxide layer that makes it corrosion-resistant; ASTM A380 and A967 are the standards commonly referenced.",
        ],
      },
      {
        h: "Choosing the chemistry",
        p: [
          "There is no universal cleaning chemical. Chemistry is selected on the system material, the contamination type, process risk, client specification and disposal constraints — and compatibility with gaskets, seals, coatings and any copper, aluminium or galvanized components is checked before anything is dosed. Concentration, temperature and contact time are controlled and monitored during circulation.",
        ],
      },
      {
        h: "Safety and disposal",
        p: [
          "Cleaning chemicals are handled with PPE and safety data sheet (SDS) controls, with spill prevention in place. Spent solutions are neutralized and disposed of in line with statutory and project requirements — disposal is planned before cleaning starts, not after.",
        ],
      },
      {
        h: "Where it fits in pre-commissioning",
        p: [
          "In a new chilled water or process system, chemical cleaning normally follows the initial flush and comes before final filtration and treatment — see the full [chilled water flushing procedure](/insights/chilled-water-flushing-procedure).",
        ],
      },
    ],
    faqs: [
      { q: "Is passivation always needed after chemical cleaning?", a: "When acid descaling has exposed bare metal, passivation (or immediate inhibitor treatment) is needed to stop flash rusting. The specification and the system material decide the exact requirement." },
      { q: "Will chemical cleaning damage gaskets or seals?", a: "Not if the chemistry is selected correctly. Compatibility with gaskets, seals, coatings and every metal in the system is checked before dosing." },
      { q: "Do you provide chemical cleaning in the UAE?", a: "Yes. HEES provides chemical cleaning of pipelines and systems, passivation support after cleaning, chilled water chemical treatment, biocide and corrosion control, and neutralization of cleaning fluids." },
    ],
    services: [
      { label: "Chemical cleaning & passivation", href: "/solutions/chemical-treatment" },
      { label: "Cleaning & treatment chemicals", href: "/products/chemicals" },
    ],
  },
  {
    slug: "bsria-bg29-pre-commission-cleaning",
    title: "BSRIA BG29 explained: pre-commission cleaning of pipework.",
    metaTitle: "BSRIA BG29 Flushing: Pre-Commission Cleaning Guide",
    metaDescription:
      "BSRIA BG29 flushing explained for UAE projects: what the guide covers, how cleaning is sequenced, what records to keep and what to ask your contractor.",
    excerpt:
      "BG29 is the guidance most UAE specifications cite for pre-commission cleaning of pipework. Here is what it means in practice, and how to plan, check and document the work.",
    category: "Pre-commissioning",
    published: "2026-12-01",
    image: "/images/stages/07-documentation-handover.webp",
    imageAlt: "Two site engineers in hard hats and hi-vis vests reviewing work on a tablet at a construction site, representing cleaning records and handover documentation",
    sections: [
      {
        h: "What is BSRIA BG29 and what does it cover?",
        p: [
          "BSRIA BG29 is the BSRIA application guide for the pre-commission cleaning of pipework systems. It describes how new closed-circuit building services pipework — chilled water, heating and similar systems — should be flushed, cleaned and verified before it is commissioned, so that debris and construction residue do not damage equipment or upset system performance.",
          "It is guidance, not legislation. It becomes binding on a project only when the specification, contract or consultant calls it up, and the project specification always sets the acceptance criteria. Always read the clause in your own specification rather than relying on a summary — including this one.",
        ],
      },
      {
        h: "Why UAE specifications ask for it",
        p: [
          "New pipework is dirty. Mill scale, protective oil, welding slag, cutting swarf, sand and dust are left inside during fabrication and installation, and the UAE climate adds fine dust and heavy heat that accelerates corrosion in systems left open or wet-stored.",
          "That contamination blocks strainers, fouls plate heat exchangers and control valves, scores pump seals and shows up later as poor delta-T. For district cooling and large building systems, consultants and operators want documented proof that the network is clean before it is connected or handed over, and BG29 is the common reference for how that proof is produced.",
        ],
      },
      {
        h: "The cleaning sequence BG29 is built around",
        p: [
          "The guide treats cleaning as a planned sequence rather than a single flush. The exact stages and values come from the specification, but the logic is consistent across projects:",
        ],
        list: [
          "Plan: survey the system, agree isolation of sensitive equipment, circulation routes, water source, discharge and disposal.",
          "Fill and vent: fill with clean water, vent high points, and check for leaks and open valves before any pumping.",
          "Pre-flush: remove loose, heavy debris through drains and strainers at low velocity.",
          "Dynamic flushing: circulate at the velocity the specification requires, section by section, until the water leaving the system is visibly clean.",
          "Chemical cleaning: where the specification or condition of the system calls for it, remove oils, grease and mill scale with a selected cleaning chemical, then drain and rinse.",
          "Final rinse and filtration: bring the water to the required cleanliness, often with temporary or side-stream filtration.",
          "Treatment and verification: dose inhibitor and biocide as specified, sample, and record the results.",
        ],
        after: [
          "The sequence is the same as in our [chilled water flushing procedure](/insights/chilled-water-flushing-procedure); BG29 is the framework, and the method statement turns it into a site plan.",
        ],
      },
      {
        h: "Flushing velocity and how to prove it was achieved",
        p: [
          "Flushing works because moving water carries debris to a point where it can be captured. For that to happen the flow must be high enough in every pipe, not just in the main header. The guide ties flushing to a velocity target; take the number from the guide and your specification, not from a rule of thumb.",
          "Because velocity depends on flow and pipe bore, branches of different sizes cannot all be flushed at once on a single pump. Sections are sized and sequenced so each one sees the required velocity, which is why [flushing pump selection](/products/equipment) is part of the plan, not an afterthought. Record the measured flow, the calculated velocity and the section flushed, with the date and who witnessed it.",
        ],
      },
      {
        h: "When flushing alone is not enough",
        p: [
          "Water velocity moves loose debris but does not dissolve oils, grease or tightly bonded scale. Where the system contains those, a chemical cleaning stage is added, using chemistry compatible with every metal, gasket and seal in the circuit. The decision depends on the system and the specification — see [flushing versus chemical cleaning](/insights/chemical-cleaning-and-passivation) for how the two fit together.",
          "Cleaning chemicals must be neutralized and disposed of in line with statutory and project requirements, so disposal is planned before the work starts.",
        ],
      },
      {
        h: "What a BG29-style method statement should contain",
        p: [
          "The method statement is the document the consultant approves before any water moves, so it is worth getting right. A clear one lets the reviewer check the logic without a site visit:",
        ],
        list: [
          "System description: pipe materials, sizes, total volume and the sections the system is divided into for flushing",
          "Marked-up schematics showing fill points, drains, strainers, temporary pumps, filters and every bypass spool",
          "A list of equipment excluded from the circuit — heat exchangers, control valves, meters, coils — and how each is isolated and later reinstated",
          "Flushing sequence and the target velocity for each section, with the calculation behind the pump selection",
          "Chemical cleaning scope, product data and safety data sheets, material compatibility check, and the neutralization and disposal route",
          "Sampling points, parameters, acceptance values taken from the specification, and who witnesses them",
          "Safety arrangements: temporary pipework supports, pressure limits on temporary hoses, hot-weather working and spill control",
        ],
        after: [
          "Reinstatement is the step most often forgotten. Spools, blanks and temporary strainers must be removed and recorded as removed, or the clean system is handed over with a blank still inside it.",
        ],
      },
      {
        h: "Who does what: contractor, consultant and operator",
        p: [
          "Responsibilities vary by contract, but the pattern is usually the same. The MEP contractor owns the cleaning work and the method statement, often through a specialist subcontractor. The consultant approves the method and the acceptance criteria, and witnesses key steps such as sampling. The operator — in district cooling, the utility that will connect the building — reviews the records before it accepts the connection.",
          "Agree early who witnesses what and with how much notice. A flush that is finished on a Thursday but cannot be witnessed until the following week costs more in programme time than the flush itself, especially when temporary equipment is on hire.",
        ],
      },
      {
        h: "Records to keep for handover",
        p: ["Work that is not documented will be questioned at handover. A typical BG29-style cleaning file includes:"],
        list: [
          "The approved cleaning method statement and flushing plan with drawings marked up for isolation and bypasses",
          "Flushing logs: section, flow, velocity, duration, strainer and filter inspections",
          "Chemical cleaning records: product, concentration, temperature, contact time, neutralization and disposal",
          "Water sampling and laboratory results against the acceptance values in the specification",
          "Dosing records for inhibitor and biocide after cleaning",
          "Witness and sign-off sheets from the contractor, consultant and operator",
        ],
      },
      {
        h: "Common mistakes and what to ask your contractor",
        p: ["The same problems recur on site:"],
        list: [
          "Flushing through plate heat exchangers, control valves or energy meters instead of bypassing them",
          "Using one pump for branches that need very different flows",
          "No agreed discharge route or water source, so work stops on the day",
          "Leaving the system drained or untreated after cleaning",
          "Accepting a clean look instead of a sampled result",
        ],
        after: [
          "Before awarding the work, ask the contractor: How will you prove velocity in each section? Which equipment is isolated and how? What are the acceptance criteria and who signs them off? What happens to the cleaning fluid? What is delivered in the handover file?",
        ],
      },
      {
        h: "Where HEES fits",
        p: [
          "HEES plans and carries out flushing, chemical cleaning support, filtration and sampling coordination for chilled water and district cooling systems across the UAE, including temporary flushing pumps and filtration. Our [district cooling and CHW flushing](/solutions/district-cooling) team works to the cleaning criteria in your specification and provides the records for handover.",
        ],
      },
    ],
    faqs: [
      { q: "Is BSRIA BG29 mandatory in the UAE?", a: "BG29 is guidance, not UAE law. It applies to a project when the specification, consultant or operator requires it, so check the cleaning clause in your project documents." },
      { q: "What does BSRIA BG29 cover?", a: "It covers the pre-commission cleaning of closed pipework systems such as chilled water and heating: planning, flushing, chemical cleaning where needed, and verifying cleanliness before commissioning." },
      { q: "What velocity should a system be flushed at?", a: "The flushing velocity is set by the specification and the guidance it cites, not by a general rule. It is normally higher than the normal operating velocity so that debris is carried out of every section." },
      { q: "What records does a flushing job need for handover?", a: "Typically the approved method statement, flushing logs, chemical cleaning and disposal records, laboratory sample results, dosing records and signed witness sheets. The specification lists exactly what is required." },
    ],
    services: [
      { label: "District cooling & CHW flushing", href: "/solutions/district-cooling" },
      { label: "Chemical cleaning & treatment", href: "/solutions/chemical-treatment" },
      { label: "Flushing pump & skid rental", href: "/products/equipment" },
    ],
  },
];

/** Rough reading time at ~220 words per minute. */
export function readingMinutes(a: Article) {
  const words = a.sections.flatMap((s) => [s.h, ...s.p, ...(s.list ?? []), ...(s.after ?? [])]).join(" ").split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
