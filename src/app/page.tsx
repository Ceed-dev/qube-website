import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatAreWe from "@/components/WhatAreWe";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeDoIt from "@/components/HowWeDoIt";
import Annotations from "@/components/Annotations";
import Capabilities from "@/components/Capabilities";
import Regions from "@/components/Regions";
import PartnerForm from "@/components/PartnerForm";
import ContributorForm from "@/components/ContributorForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatAreWe />
        <WhatWeDo />
        <HowWeDoIt />
        <Annotations />
        <Capabilities />
        <Regions />
        <PartnerForm />
        <ContributorForm />
      </main>
      <Footer />
    </>
  );
}
