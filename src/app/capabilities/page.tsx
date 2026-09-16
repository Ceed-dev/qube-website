import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Capabilities from "@/components/Capabilities";
import DataNetwork from "@/components/DataNetwork";
import Regions from "@/components/Regions";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "13 languages, 1-2 week starts, 10,000+ hours monthly scale. India active, more regions on the roadmap.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        label="Capabilities"
        title="Built to scale from pilot to production"
        description="Fast starts, real volume, and coverage across every major Indian language — with more regions coming online."
      />
      <Capabilities />
      <DataNetwork />
      <Regions />
    </>
  );
}
