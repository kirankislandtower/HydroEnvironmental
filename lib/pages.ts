// Detail pages behind each nav dropdown item.
// Copy: "PRE-QUALIFICATION & CAPABILITY PROFILE" (core divisions pp.5–7, capabilities pp.8–10, SEO keywords p.12),
// rewritten for the web. Group fleet from Island Tower Electromechanical's flushing PQ (labelled as group).
import { productRanges, statementImage, heroImage, ctaImage } from "./content";

// Division hero panels are ~520 CSS px wide, so 1200 covers 2x screens; Unsplash serves AVIF/WebP via auto=format
const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${Math.min(w, 1920)}&q=70`;

export type Block = { title: string; text: string; items?: string[] };

export type DetailPage = {
  slug: string;
  nav: string; // short name used in breadcrumbs and "other pages" links
  eyebrow: string;
  title: string; // H1
  lead: string;
  image: string;
  imageAlt: string; // descriptive alt text for the hero photo (indexed by Google Images)
  metaTitle: string;
  metaDescription: string;
  introTitle: string; // H2
  intro: string;
  blocks: Block[];
  showChemicals?: boolean; // supplied chemical codes
  showFunctions?: boolean; // chemical function table
  showFleet?: boolean; // group flushing fleet table
  refsMatch?: RegExp; // pulls matching rows from Hydro's own reference list
  faqs?: { q: string; a: string }[]; // visible FAQ + FAQPage schema — answers must match the profile
  faqIntro?: string;
};

// Local hero photos in public/images/divisions are from Pexels (free licence)
export const solutionPages: DetailPage[] = [
  {
    slug: "process-pipeline-engineering",
    nav: "Process & Pipeline",
    eyebrow: "Division 01 · Process & pipeline engineering",
    title: "Pipeline pre-commissioning & process piping.",
    lead: "Cleaning, flushing, hydrotesting, chemical cleaning, filtration and disinfection — so a pipeline is ready before it is placed into service.",
    image: u("1607472586893-edb57bdc0e39"),
    imageAlt: "Steel process pipework with valves and gauges on a wall — pipeline pre-commissioning and hydrotesting in the UAE",
    metaTitle: "Pipeline Pre-Commissioning & Hydrotesting Dubai, UAE",
    metaDescription:
      "Pipeline pre-commissioning in the UAE: flushing, hydrotesting, chemical cleaning and disinfection — documented and ready for service.",
    introTitle: "Systems that work correctly from day one.",
    intro:
      "Pre-commissioning covers every activity required before a pipeline or piping system goes into service. Hydro plans and executes cleaning, flushing, filling, hydrotesting, dewatering support, filtration, disinfection and chemical cleaning to the system type and project specification — and documents every result.",
    blocks: [
      { title: "Cleaning & flushing", text: "Removal of construction debris, loose scale, sediment, welding residue, oil and grease traces and particulate contamination.", items: ["System flushing & pipeline cleaning", "Chilled water pipeline flushing", "Temporary bypass & circulation arrangements"] },
      { title: "Hydrotesting & pressure testing", text: "Pressure testing of pipelines and systems to confirm integrity before operation, with chart-recorded results." },
      { title: "Chemical cleaning", text: "Removal of deposits, oils, oxides, scale and process contaminants using selected chemistry, followed by neutralization." },
      { title: "Process piping works", text: "Process plant piping, steel and alloy piping and HDPE works, with hot and cold insulation support.", items: ["Process plant piping", "Steel & alloy piping", "HDPE works", "Hot & cold insulation"] },
      { title: "Filtration, disinfection & records", text: "Staged filtration to remove suspended solids, chemical disinfection of utility systems, and reports, checklists, pressure records and handover documents." },
    ],
    refsMatch: /flushing|disinfection/i,
    faqs: [
      { q: "What does pipeline pre-commissioning include?", a: "Everything required before a pipeline or piping system goes into service: cleaning and flushing, filling, hydrotesting, dewatering support, staged filtration, disinfection and chemical cleaning. Each activity is planned to the system type and project specification and documented for handover." },
      { q: "How is a pipeline hydrotest carried out and recorded?", a: "The system is filled and pressurized under control with hydrotest pumps, calibrated pressure gauges and chart recorders, with barricading and hose restraint in place. Pressure is held for the specified period and the result is chart-recorded for the client and consultant." },
      { q: "What do you hand over at the end of pre-commissioning?", a: "Flushing logs, pressure test charts, checklists, water quality reports where applicable, and handover documents — so the system can be accepted and placed into service." },
      { q: "Do you carry out pre-commissioning in Dubai and Abu Dhabi?", a: "Yes. HEES is based in Al Sajaa Industrial Area, Sharjah, and supports pipeline pre-commissioning and hydrotesting projects across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain." },
    ],
  },
  {
    slug: "district-cooling",
    nav: "District Cooling",
    eyebrow: "Division 02 · District cooling & thermal utility",
    title: "Chilled water flushing for district cooling.",
    lead: "Engineered flushing, side-stream filtration, chemical treatment and hydrotesting for district cooling networks, ETS connections and DCP internal systems.",
    image: u("1620203853151-496c7228306c"),
    imageAlt: "Dense chilled water and process piping in a plant room — district cooling flushing and CHW treatment in the UAE",
    metaTitle: "Chilled Water Flushing & District Cooling Dubai, UAE",
    metaDescription:
      "Chilled water flushing for district cooling networks, ETS and DCP systems in the UAE — side-stream filtration, chemical treatment and hydrotesting.",
    introTitle: "Clean networks. Stable delta-T. On-time commissioning.",
    intro:
      "District cooling and chilled water systems need a high level of cleanliness, hydraulic readiness and chemical control. Poor flushing leads to clogged strainers, fouled heat exchangers, poor delta-T, pump damage, corrosion and commissioning delays. Hydro develops the flushing strategy from pipe size, system volume, access points and bypass requirements, then executes and reports it.",
    blocks: [
      { title: "Network flushing & cleaning", text: "Pre-flush, dynamic flush, filtration, chemical cleaning support, disinfection and final flushing for primary and secondary CHW pipelines.", items: ["Flushing velocity planning", "Temporary pump & filtration deployment", "Circulation arrangements"] },
      { title: "ETS & DCP works", text: "ETS mechanical works and commissioning support, DCP internal piping support and DCP filter cleaning." },
      { title: "Side-stream filtration", text: "Side-stream and staged filtration to progressively improve system cleanliness and protect plate heat exchangers." },
      { title: "Testing", text: "Valve chamber and pipeline testing support, hydrotesting of chilled water pipelines and mechanical systems." },
      { title: "CHW chemical treatment", text: "Chemical disinfection and treatment support, with chemistry compatible with pipe materials, gaskets and seals." },
      { title: "Tie-ins & readiness", text: "Tie-in and shutdown support coordinated with operators, consultants and commissioning teams, with system readiness reporting." },
    ],
    refsMatch: /District Cooling|CHW|Chilled/i,
    faqs: [
      { q: "Why does a chilled water system need flushing before commissioning?", a: "Construction debris, scale, welding residue and sediment left in CHW pipework clog strainers, foul plate heat exchangers, reduce delta-T, damage pumps and accelerate corrosion. Flushing removes this contamination so the network can be commissioned on time." },
      { q: "How do you plan chilled water flushing for a district cooling network?", a: "The flushing strategy is developed from pipe size, system volume, access points and bypass requirements. We plan flushing velocity and circulation, deploy temporary pumps and filtration, then carry out pre-flush, dynamic flush, chemical cleaning support, disinfection and final flushing." },
      { q: "What is side-stream filtration in a chilled water system?", a: "A portion of the circulating water is passed continuously through filters, progressively improving system cleanliness and protecting plate heat exchangers — without taking the whole system out of circulation." },
      { q: "Do you work on ETS and DCP systems?", a: "Yes. We support ETS mechanical works and commissioning, DCP internal piping and DCP filter cleaning, valve chamber and pipeline testing, and tie-in and shutdown support coordinated with operators, consultants and commissioning teams." },
    ],
  },
  {
    slug: "industrial-process-utilities",
    nav: "Industrial Utilities",
    eyebrow: "Division 03 · Industrial process & factory utilities",
    title: "Factory utilities & industrial process engineering.",
    lead: "Process piping and compressed air, water, steam, gas and chemical utilities for manufacturing facilities — built and commissioned.",
    image: u("1538474705339-e87de81450e8"),
    imageAlt: "Overhead steel utility pipework in a factory — process piping and factory utilities in the UAE",
    metaTitle: "Factory Utilities & Process Piping Contractor UAE",
    metaDescription:
      "Process piping and compressed air, steam, gas and water utilities, plus boiler and heavy fuel line cleaning across the UAE.",
    introTitle: "Utilities that keep a factory running.",
    intro:
      "Hydro delivers the utility networks, process piping and mechanical connections that manufacturing and process facilities depend on — and supports relocation, recommissioning and shutdown work on existing plants.",
    blocks: [
      { title: "Factory utilities", text: "Construction and commissioning of utility systems.", items: ["Compressed air", "Process & cooling water", "Steam", "Gas & chemical utilities"] },
      { title: "Process piping & tanks", text: "Process piping, mechanical utility connections, storage tanks and process tanks." },
      { title: "Boiler & fuel systems", text: "Industrial boiler cleaning and heavy fuel line flushing for plant utility systems." },
      { title: "Relocation & recommissioning", text: "Factory demolition, relocation and recommissioning, plus conveyor belt integration systems." },
    ],
    refsMatch: /Paper|Wastewater/i,
    faqs: [
      { q: "Which factory utilities does HEES install and commission?", a: "Compressed air, process and cooling water, steam, and gas and chemical utility systems — together with process piping, mechanical utility connections, storage tanks and process tanks." },
      { q: "Do you clean industrial boilers and heavy fuel lines?", a: "Yes. We carry out industrial boiler cleaning and heavy fuel line flushing for plant utility systems." },
      { q: "Can you support a factory relocation?", a: "Yes. We support factory demolition, relocation and recommissioning, as well as conveyor belt integration systems." },
    ],
  },
  {
    slug: "water-wastewater",
    nav: "Water & Wastewater",
    eyebrow: "Division 04 · Water, wastewater & environmental",
    title: "Water, wastewater & environmental process solutions.",
    lead: "RO and STP installation and commissioning support, contaminated water treatment, desalination support and modular treatment packages.",
    image: statementImage,
    imageAlt: "Aerial view of a wastewater treatment plant with clarifier tanks — STP and RO commissioning in the UAE",
    metaTitle: "STP & RO Plant Commissioning UAE | Wastewater",
    metaDescription:
      "Sewage treatment plants (MBR, SBR, MBBR), RO systems, grey water recycling and wastewater AMC in the UAE — supplied, commissioned and maintained.",
    introTitle: "Treatment systems, installed and commissioned properly.",
    intro:
      "Hydro supports water and wastewater systems from installation through commissioning — and treats contaminated and process water on site with temporary filtration, phase separation and dosing packages when a permanent plant is not yet in place.",
    blocks: [
      { title: "RO & desalination", text: "RO plant installation and commissioning support and desalination plant support works." },
      { title: "Sewage treatment plants", text: "STP installation and commissioning support, with operation and maintenance experience on HEES-maintained plants." },
      { title: "Contaminated water", text: "Industrial contaminated water treatment, phase separation systems and suspended solids treatment." },
      { title: "Filtration & temporary treatment", text: "Filtration systems, temporary treatment packages, temporary storage and transfer systems." },
      { title: "Chemical dosing", text: "Chemical dosing arrangements — both manual and automatic — for treatment and process water." },
      { title: "Modular plants", text: "Modular and containerized plant supply, installation and commissioning support." },
    ],
    refsMatch: /STP|Greywater|Wastewater|dosing/i,
    faqs: [
      { q: "Do you install and commission sewage treatment plants (STP)?", a: "Yes. We provide STP installation and commissioning support, with operation and maintenance experience on plants maintained by HEES." },
      { q: "Do you support RO and desalination plants?", a: "Yes — RO plant installation and commissioning support, and desalination plant support works." },
      { q: "Can contaminated water be treated on site before a permanent plant is ready?", a: "Yes. We deploy temporary filtration, phase separation, suspended solids treatment and chemical dosing packages, with temporary storage and transfer systems where needed." },
      { q: "Do you supply modular or containerized treatment plants?", a: "Yes. We support modular and containerized plant supply, installation and commissioning." },
    ],
  },
  {
    slug: "process-plant-infrastructure",
    nav: "Process Plant",
    eyebrow: "Division 05 · Process plant & infrastructure",
    title: "Process plant & industrial infrastructure.",
    lead: "Storage tanks, process piping, structural supports, testing and commissioning for process plants and utility infrastructure.",
    image: "/images/stages/03-equipment-sizing.webp",
    imageAlt: "Large process pipes on steel pipe supports at an industrial plant — process plant piping and infrastructure in the UAE",
    metaTitle: "Process Plant & Storage Tank Contractor UAE",
    metaDescription:
      "Process plants in the UAE: storage tanks, piping, structural steel, E&I coordination and plant retrofits delivered by one accountable team.",
    introTitle: "One partner from foundations to commissioning.",
    intro:
      "For process plants and industrial utility infrastructure, Hydro brings installation and construction together with the testing and commissioning discipline of our pre-commissioning teams.",
    blocks: [
      { title: "Storage tanks", text: "Design and installation of storage and process tanks." },
      { title: "Piping & utility connections", text: "Process piping, utility connections and mechanical installation and alignment support." },
      { title: "Civil & structural", text: "Civil foundations and equipment supports, structural steel platforms, pipe supports and access structures." },
      { title: "E&I and automation", text: "Electrical, instrumentation and automation coordination." },
      { title: "Hygienic process factories", text: "Hygienic process piping and factory installations for food and hygienic process facilities." },
      { title: "Testing, commissioning & retrofit", text: "Testing and commissioning, plus plant modification and retrofit works." },
    ],
    faqs: [
      { q: "What does HEES deliver on a process plant project?", a: "Storage and process tanks, process piping and utility connections, civil foundations and equipment supports, structural steel platforms and pipe supports, E&I and automation coordination, and testing and commissioning — by one accountable team." },
      { q: "Do you design storage tanks?", a: "Yes. We design and install storage tanks and process tanks." },
      { q: "Do you modify or retrofit existing plants?", a: "Yes. We carry out plant modification and retrofit works, including hygienic process piping for food and hygienic process facilities." },
    ],
  },
  {
    slug: "industrial-cleaning",
    nav: "Industrial Cleaning",
    eyebrow: "Division 06 · Industrial cleaning & coating",
    title: "Industrial cleaning & surface protection.",
    lead: "Heat exchanger and condenser tube cleaning, surface preparation and protective coating for industrial assets.",
    image: "/images/divisions/industrial-cleaning.webp",
    imageAlt: "Technician in safety harness cleaning an industrial surface with a high-pressure spray lance",
    metaTitle: "Heat Exchanger Cleaning & Industrial Coating UAE",
    metaDescription:
      "Heat exchanger and condenser tube cleaning, surface preparation and protective coating for industrial assets across the UAE. Request a method today.",
    introTitle: "Restore performance. Protect surfaces.",
    intro:
      "Using specialized cleaning tools and methods, Hydro supports shutdowns, maintenance, retrofit works, mechanical cleaning, surface preparation and industrial asset restoration.",
    blocks: [
      { title: "Heat exchanger cleaning", text: "Heat exchanger and condenser tube bundle cleaning to improve thermal performance and reduce fouling." },
      { title: "Surface preparation", text: "Surface preparation of steel and concrete assets before coating." },
      { title: "Coating & painting", text: "Protective coating and painting support for steel and concrete assets." },
    ],
    faqs: [
      { q: "Why should heat exchangers and condenser tubes be cleaned?", a: "Fouling on tube bundles reduces heat transfer. Cleaning heat exchanger and condenser tube bundles restores thermal performance and reduces fouling." },
      { q: "Do you prepare surfaces before protective coating?", a: "Yes. We carry out surface preparation of steel and concrete assets before coating, and provide protective coating and painting support." },
      { q: "Can industrial cleaning be done during a shutdown?", a: "Yes. Our teams support shutdowns, maintenance and retrofit works, mechanical cleaning and industrial asset restoration." },
    ],
  },
  {
    slug: "chemical-treatment",
    nav: "Chemical Treatment",
    eyebrow: "Division 07 · Chemical engineering & treatment",
    title: "Chemical cleaning, passivation & water chemistry.",
    lead: "Chemical cleaning, disinfection, passivation, corrosion mitigation, contamination control and water chemistry management.",
    image: productRanges[1].image,
    imageAlt: "Rows of sealed chemical drums — chemical cleaning, passivation and water treatment chemicals in the UAE",
    metaTitle: "Chemical Cleaning, Passivation & CHW Treatment UAE",
    metaDescription:
      "Chemical cleaning, passivation, biocide and corrosion control for chilled water, cooling tower and boiler systems in the UAE. Talk to our engineers.",
    introTitle: "The chemistry is chosen for the system — not the other way round.",
    intro:
      "Every chemical strategy is selected on system material, contamination type, process risk, operating requirement, client specification and disposal constraints — and compatibility with pipe materials, gaskets, seals and coatings is checked before anything is dosed.",
    blocks: [
      { title: "Chemical cleaning", text: "Chemical cleaning of pipelines and systems, scale and deposit removal, and flushing chemical selection." },
      { title: "Disinfection", text: "Chemical disinfection of water systems and biocide treatment." },
      { title: "CHW chemical treatment", text: "Chilled water chemical treatment support and chemical dosing system support." },
      { title: "Passivation & preservation", text: "Passivation support after cleaning, and preservation of idle systems." },
      { title: "Corrosion control & pH", text: "Corrosion control support, pH correction and neutralization of cleaning fluids and system water." },
      { title: "Treatment & supply", text: "Industrial wastewater, RO and process water treatment support, water quality testing coordination and chemical supply and handling." },
    ],
    showFunctions: true,
    refsMatch: /chemical|dosing/i,
    faqs: [
      { q: "How do you choose the chemicals for a cleaning job?", a: "Chemistry is selected on system material, contamination type, process risk, operating requirement, client specification and disposal constraints — and compatibility with pipe materials, gaskets, seals and coatings is checked before anything is dosed." },
      { q: "What is passivation and when is it done?", a: "Passivation follows chemical cleaning: it helps form a protective layer on cleaned metal surfaces to reduce corrosion before the system goes into service. HEES provides passivation support after cleaning and preservation of idle systems." },
      { q: "Do you provide chilled water chemical treatment?", a: "Yes — chilled water chemical treatment support, chemical dosing system support, biocide treatment and corrosion control." },
      { q: "What happens to the cleaning fluids afterwards?", a: "Cleaning fluids and system water are pH-corrected and neutralized, then disposed of responsibly in line with statutory and project requirements." },
    ],
  },
  {
    slug: "equipment-engineering",
    nav: "Equipment Engineering",
    eyebrow: "Division 08 · Equipment engineering, assembly, sales & rental",
    title: "Engineered equipment — assembled, sold and rented.",
    lead: "Pump packages, flushing and filtration skids, hydrotest pumps, generators, compressors and tanks — selected, integrated and supported to the hydraulic requirement.",
    image: "/images/divisions/equipment-rental.webp",
    imageAlt: "Diesel pump set with suction and discharge hoses — engineered pump packages and flushing skids in the UAE",
    metaTitle: "Pump Packages & Flushing Skid Fabrication UAE",
    metaDescription:
      "Engineered pump packages, flushing and filtration skids, hydrotest pumps and generators — assembled, sold and rented in the UAE with technicians.",
    introTitle: "Not simply rented — engineered for the job.",
    intro:
      "Unlike conventional rental providers, Hydro supports clients with equipment selection, integration, assembly, operator support, maintenance and performance-oriented deployment, backed by in-house skid fabrication and pump workshop capability.",
    blocks: [
      { title: "Pump skid assembly", text: "Pump, base frame, suction and discharge headers, valves, gauges, hoses and control elements integrated as one package." },
      { title: "Flushing skids", text: "Pumps, filter vessels, strainers, valves, manifolds, hose connections and temporary circulation arrangements." },
      { title: "Filtration packages", text: "Filter housings, cartridge and bag filters, bypass arrangements and differential pressure monitoring." },
      { title: "Temporary utilities", text: "Generator, pump, air compressor, tank, hose and control packages for temporary site operations." },
      { title: "Mechanical modifications", text: "Pipe spool fabrication, support frames, tank modifications and mechanical integration." },
    ],
    faqs: [
      { q: "What is included in a HEES flushing skid?", a: "Pumps, filter vessels, strainers, valves, manifolds, hose connections and temporary circulation arrangements — assembled as one package for the job." },
      { q: "Do you fabricate custom pump skids?", a: "Yes. In-house skid fabrication and pump workshop capability lets us integrate the pump, base frame, suction and discharge headers, valves, gauges, hoses and control elements to the hydraulic requirement." },
      { q: "Can I buy or rent the equipment?", a: "Both. Pump packages, flushing and filtration skids, hydrotest pumps, generators, compressors and tanks are available for sale or rental, with operator support if needed." },
    ],
  },
];

export const productPages: DetailPage[] = [
  {
    slug: "equipment",
    nav: "Sales & Rental Fleet",
    eyebrow: "Equipment · Sales & rental",
    title: "Equipment sales & rental fleet.",
    lead: "Project-ready pumps, skids, generators, compressors and tanks for flushing, testing, filtration, dewatering, air and power — with technicians and operators.",
    image: "/images/divisions/equipment-fleet.webp",
    imageAlt: "Aerial view of a yard of yellow construction equipment and machinery — equipment rental fleet",
    metaTitle: "Flushing & Hydrotest Pump Rental Dubai, Sharjah & UAE",
    metaDescription:
      "Rent diesel and electric pumps, flushing and filtration skids, generators, compressors and tanks in the UAE — mobilized with trained operators.",
    introTitle: "Equipment categories.",
    intro:
      "Every package is checked in our warehouse before mobilization and can be supplied with operators, technicians and maintenance support for the duration of the job.",
    blocks: [
      { title: "Fluid handling systems", text: "Diesel pump assemblies, electric, centrifugal, multistage, split-case, booster, flushing, dewatering and submersible pumps." },
      { title: "Flushing & filtration systems", text: "Flushing skids, filtration skids, filter vessels, side-stream and temporary bypass filtration, hoses, manifolds and valves." },
      { title: "Pressure testing systems", text: "Hydrotesting pumps, pressure gauges, chart recorders, manifolds, hoses and test accessories." },
      { title: "Power & utility systems", text: "Generators, temporary power systems, air compressors, air dryers and utility support packages." },
      { title: "High-pressure systems", text: "High-pressure pumps and water jetting equipment." },
      { title: "Storage & process systems", text: "Stainless and mild steel tanks, chemical storage tanks, process tanks and temporary circulation tanks." },
    ],
    showFleet: true,
    faqs: [
      { q: "Can I rent a hydrotest pump in the UAE?", a: "Yes. We rent hydrotesting pumps with pressure gauges, chart recorders, manifolds, hoses and test accessories, and can supply a technician to run the test." },
      { q: "Which pumps are available for rent?", a: "Diesel pump assemblies and electric, centrifugal, multistage, split-case, booster, flushing, dewatering and submersible pumps, plus high-pressure pumps and water jetting equipment." },
      { q: "Does rental equipment come with an operator?", a: "It can. Every package is checked in our warehouse before mobilization and can be supplied with operators, technicians and maintenance support for the duration of the job." },
      { q: "Do you also rent generators, compressors and tanks?", a: "Yes — generators and temporary power, air compressors and dryers, stainless and mild steel tanks, chemical storage tanks and temporary circulation tanks." },
    ],
  },
  {
    slug: "chemicals",
    nav: "Chemicals & Supply",
    eyebrow: "Equipment · Chemicals",
    title: "Cleaning & treatment chemicals.",
    lead: "Flushing, cleaning, passivation, biocide and corrosion-control chemistry — supplied, dosed and handled safely.",
    image: "/images/divisions/chemicals-supply.webp",
    imageAlt: "Technician in protective suit and respirator handling chemical containers in a warehouse",
    metaTitle: "Water Treatment Chemicals Supplier UAE",
    metaDescription:
      "Flushing, chilled water, boiler, cooling tower and RO chemicals plus Pulsafeeder dosing systems, supplied and dosed safely across the UAE.",
    introTitle: "Chemistry with handling discipline.",
    intro:
      "Chemicals are stored and traded subject to statutory and project requirements, handled with PPE and SDS controls, and neutralized and disposed of responsibly after use.",
    blocks: [],
    showFunctions: true,
    showChemicals: true,
    refsMatch: /chemical/i,
    faqs: [
      { q: "Which treatment chemicals do you supply in the UAE?", a: "Flushing, chilled water, boiler, cooling tower and RO chemicals, together with dosing systems — supplied, dosed and handled by our team." },
      { q: "How are chemicals stored and handled?", a: "Chemicals are stored and traded subject to statutory and project requirements, handled with PPE and SDS controls, and neutralized and disposed of responsibly after use." },
    ],
  },
];

export const resourcesPage = { image: heroImage, cta: ctaImage };
