import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}