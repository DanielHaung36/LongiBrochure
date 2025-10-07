import { Hero } from "@/components/hero"
import { CatalogViewer } from "@/components/catalog-viewer"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CatalogViewer />
      <ContactSection />
      <Footer />
    </main>
  )
}
