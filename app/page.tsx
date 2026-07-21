import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import ImageBreak from "../components/sections/ImageBreak";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import FAQ from "../components/sections/FAQ";
import ContactForm from "../components/sections/ContactForm";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Services />
      <ImageBreak />
      <Process />
      <WhyUs />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  );
}