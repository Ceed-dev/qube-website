import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContributorForm from "@/components/ContributorForm";

export const metadata: Metadata = {
  title: "Become a Contributor",
  description:
    "We pay contributors to record daily tasks and activities using a head-mounted camera. Flexible hours, work from your environment.",
};

export default function ContributePage() {
  return (
    <>
      <PageHeader
        label="Become a Contributor"
        title="Contribute to the network"
        description="We pay contributors to record daily tasks and activities using a head-mounted camera. Flexible hours, work from your environment."
      />
      <ContributorForm />
    </>
  );
}
