import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Annotations from "@/components/Annotations";

export const metadata: Metadata = {
  title: "Annotations",
  description:
    "Five annotation tiers, from raw narrated video to gaze data — narration, action segments, HOI, keypoints, and more.",
};

export default function AnnotationsPage() {
  return (
    <>
      <PageHeader
        label="Annotations"
        title="Structured, layered annotation"
        description="Raw footage is just the starting point. Every project can be layered with narration, action labels, object state, hand-object interaction, and more — as deep as the use case demands."
      />
      <Annotations />
    </>
  );
}
