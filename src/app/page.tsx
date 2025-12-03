import React from "react";
import Hero from "@/app/components/Home/Hero";
import LMSShowcase from "@/app/components/Home/LMSShowcase";
import CourseQuality from "@/app/components/Home/CourseQuality";
import HowItWorks from "@/app/components/Home/HowItWorks";
import Companies from "@/app/components/Home/Companies";
import NamesList from "@/app/components/Home/Courses";
import Mentor from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonial";
import Newsletter from "@/app/components/Home/Newsletter";
import { Metadata } from "next";
import ContactForm from "./components/Contact/Form";
import PartnerCompanies from "./components/Home/Partners";
import Highlights from "./components/Home/Highlights";

export const metadata: Metadata = {
  title: "Roboautomators - Global Online Robotics Education Platform",
  description: "Master robotics from anywhere in the world. LEGO-based kits shipped globally with live 1-on-1 sessions and gamified learning for grades 3-12.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LMSShowcase />
      <CourseQuality />
      <NamesList />
      <HowItWorks />
      <Highlights />
      <PartnerCompanies />
      <Mentor />
      <Companies />
      <Testimonial />
      <ContactForm />
      {/* <Newsletter /> */}
    </main>
  );
}
