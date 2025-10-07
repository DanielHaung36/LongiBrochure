"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="inline-block">
          <img src="/logo.svg" alt="LONGi Magnet Australia" className="h-16 md:h-32 mx-auto" />
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Your Trusted Partner in Equipment Solutions
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            With 20 years of experience in Australia, we provide cutting-edge equipment solutions and expert advisory services to the mining industry.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="text-base px-8" onClick={scrollToCatalog}>
            View Product Catalog
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Services */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 transition-all duration-300 hover:scale-105 border border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
            </div>
            <span className="text-xs md:text-sm text-center font-semibold text-foreground">Equipment Solutions</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
            </div>
            <span className="text-xs md:text-sm text-center font-semibold text-foreground">Process Consultation</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500/20 hover:to-green-600/10 transition-all duration-300 hover:scale-105 border border-green-500/20">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <span className="text-xs md:text-sm text-center font-semibold text-foreground">Client Representation</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 hover:from-orange-500/20 hover:to-orange-600/10 transition-all duration-300 hover:scale-105 border border-orange-500/20">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-orange-500" />
            </div>
            <span className="text-xs md:text-sm text-center font-semibold text-foreground">Maintenance Services</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 hover:from-pink-500/20 hover:to-pink-600/10 transition-all duration-300 hover:scale-105 border border-pink-500/20 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-pink-500" />
            </div>
            <span className="text-xs md:text-sm text-center font-semibold text-foreground">Testwork Proposal</span>
          </div>
        </div>
      </div>
    </section>
  )
}
