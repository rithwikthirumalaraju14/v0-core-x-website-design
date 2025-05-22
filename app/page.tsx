import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ShopSection from "@/components/shop-section"
import AboutSection from "@/components/about-section"
import AthletesSection from "@/components/athletes-section"
import JoinSection from "@/components/join-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ShopSection />
      <AboutSection />
      <AthletesSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
