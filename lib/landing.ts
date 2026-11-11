// Homepage copy, laid out to the reference structure (hydropsindia.com):
// hero → arc statement → "Every system" → journey (horizontal) → feature → band → stacked steps → where we work → reach us.
// Images: Unsplash (free licence), illustrative only — swap for HEES site photos when available.

const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${Math.min(w, 1920)}&q=70`;

export const everySystem = {
  title: "Every process",
  groups: [
    { lines: ["Begins"], accent: "with engineering." },
    { lines: ["Cleaned.", "Tested.", "Validated."], small: true },
    { lines: ["Ready for operation."] },
  ],
};

export const feature = {
  label: "Chem-mechanical process engineering",
  title: ["Engineering,", "equipment and", "chemistry — as one."],
  text: "Hydro combines chemical engineering, mechanical execution, fluid dynamics and project-ready equipment to solve problems of flow, pressure, contamination, corrosion and system integrity — across eight specialist divisions.",
  image: "/images/home/feature-water.webp",
  chips: ["Flush · Test · Commission", "8 divisions · Since 2008"],
};

export const band = {
  label: "Our philosophy · Trial and no error",
  lines: ["No trial.", "No error."],
  accent: "Only certainty.",
  text: "Disciplined planning, controlled execution, safety-first operations and documented validation — confidence before a system becomes operational.",
};

export const steps = [
  {
    n: "01", chip: "Process & pipeline", title: "Pipelines ready before service.",
    text: "Pre-commissioning, system flushing, hydrotesting, leak testing, chemical cleaning and pickling, process, steel, alloy and HDPE piping.",
    href: "/solutions/process-pipeline-engineering", image: u("1607472586893-edb57bdc0e39"),
  },
  {
    n: "02", chip: "District cooling", title: "Chilled water networks, flushed clean.",
    text: "Flushing velocity planning, temporary pumps, side-stream filtration, ETS works, DCP piping and filter cleaning, CHW chemical treatment.",
    href: "/solutions/district-cooling", image: u("1620203853151-496c7228306c"),
  },
  {
    n: "03", chip: "Industrial & EPC", title: "Factories and plants, built to run.",
    text: "Factory utilities and conversions, boiler cleaning, heavy fuel line flushing, process plant EPC, RO and STP commissioning, UHP cleaning.",
    href: "/solutions/industrial-process-utilities", image: u("1538474705339-e87de81450e8"),
  },
  {
    n: "04", chip: "Equipment & rental", title: "Engineered equipment, on call.",
    text: "Pump packages, diesel and electric pumps, flushing and filtration skids, hydrotest pumps, generators, compressors and tanks — with operators.",
    href: "/products/equipment", image: "/images/divisions/equipment-rental.webp",
  },
];

// Captions are real Hydro jobs from the PQ 2025 reference list
export const places = [
  {
    kicker: "District cooling", title: "Networks that hold their delta-T.",
    text: "Chilled water flushing, ETS works, DCP piping support, side-stream filtration and hydrotesting.",
    chip: "JLT DCP 1, 3 & 4 · CHW flushing", image: "/images/sectors/district-cooling.webp",
  },
  {
    kicker: "Commercial & buildings", title: "Towers commissioned on time.",
    text: "Building CHW flushing, chemical treatment, automatic dosing and pump systems.",
    chip: "Hessa Tower · CHW flushing", image: "/images/sectors/commercial-buildings.webp",
  },
  {
    kicker: "Industry & manufacturing", title: "Process utilities, under control.",
    text: "Factory utilities, process piping, boiler cleaning, wastewater and industrial cleaning.",
    chip: "Union Paper Mills · Wastewater", image: "/images/sectors/industry-manufacturing.webp",
  },
  {
    kicker: "Water & wastewater", title: "Treatment plants, commissioned right.",
    text: "RO and STP installation and commissioning support, contaminated water and dosing.",
    chip: "Al Rakha · 300 m³/day STP", image: "/images/sectors/water-wastewater.webp",
  },
  {
    kicker: "Infrastructure", title: "Built for the scale of the UAE.",
    text: "Rail, metro, utility corridors and landmark developments — flushed, tested and documented.",
    chip: "Etihad Rail · Flushing & treatment", image: "/images/sectors/infrastructure.webp",
  },
];

export const reach = {
  label: "HEES · Chem-mechanical process engineering · UAE",
  title: "Ready to make your system",
  accent: "commissioning-ready?",
  text: "Talk to our engineers about flushing, pre-commissioning, hydrotesting, chemical cleaning, industrial utilities or an equipment package — for projects across all seven emirates.",
  mapQuery: "Al Sajaa Industrial Area, Sharjah, UAE",
};
