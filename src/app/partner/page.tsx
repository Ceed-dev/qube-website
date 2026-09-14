import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "If you need India-sourced physical AI training data — as a direct buyer or as an agency partner — get in touch.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        label="Partner With Us"
        title="Work with us"
        description="If you need India-sourced physical AI training data — as a direct buyer or as an agency partner — fill in the form below or book a call."
      />
      <PartnerForm />
    </>
  );
}
