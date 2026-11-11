import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { GroupFleet, PageHero, Products } from "@/components/sections/Sections";
import { productRanges } from "@/lib/content";

export const metadata: Metadata = {
  title: "Equipment Rental & Chemicals Supply UAE",
  description:
    "Pump packages, flushing and filtration skids, generators and compressors for rent or sale, plus water treatment chemicals and dosing in the UAE.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="Equipment"
        eyebrow="Equipment"
        title="Project-ready equipment, engineered for the job."
        lead="Pumps, skids, generators, compressors, tanks and chemistry — selected, assembled and supported by Hydro technicians, for sale or rental."
        image={productRanges[0].image}
      />
      <Products />
      <GroupFleet />
    </InnerPage>
  );
}
