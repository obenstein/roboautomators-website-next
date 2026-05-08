import React from "react";
import Hero from "@/app/components/Home/Hero";
import Introduction from "@/app/components/Home/Introduction";
import ImpactStats from "@/app/components/Home/ImpactStats";
import Services from "@/app/components/Home/Services";
import Courses from "@/app/components/Home/Courses";
import Companies from "@/app/components/Home/Companies";
import Mentor from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonial";
import Newsletter from "@/app/components/Home/Newsletter";
import { Metadata } from "next";
import ContactForm from "./components/Contact/Form";
import PartnerCompanies from "./components/Home/Partners";
import Highlights from "./components/Home/Highlights";

export const metadata: Metadata = {
  title: "Roboautomators - Empowering Future Builders",
  description: "Hands-on robotics, AI, and coding education for students through engaging projects and real-world applications.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ImpactStats />
      <Services />
      <Courses />
      <Highlights />
      <PartnerCompanies />
      {/* <Mentor /> */}
      <Companies />
      <Testimonial />
      <ContactForm />
      <Newsletter />
    </main>
  );
}
