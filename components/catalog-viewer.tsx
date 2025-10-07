"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Maximize2, X } from "lucide-react"

export function CatalogViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // In production, replace this with your actual PDF URL
  const pdfUrl = "/LONGi CRITICAL MINERALS PRODUCT BROCHURE ( 3rd Edition) 0825-Latest_compressed.pdf"

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "LONGi-Critical-Minerals-Product-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="catalog" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <FileText className="h-4 w-4" />
            Product Catalog
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Explore Our Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our comprehensive catalog featuring detailed specifications and applications
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <div className="bg-card border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Critical Minerals Product Brochure</h3>
                <p className="text-sm text-muted-foreground">3rd Edition</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)} className="gap-2">
                {isFullscreen ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
              </Button>
            </div>
          </div>

          <div className={`relative bg-muted ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
            {isFullscreen && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 gap-2"
              >
                <X className="h-4 w-4" />
                Close
              </Button>
            )}

            <div className={`${isFullscreen ? "h-screen" : "h-[600px] md:h-[800px]"} w-full`}>
              {/* PDF Viewer - Using iframe for PDF display */}
              <iframe src={pdfUrl} className="w-full h-full border-0" title="Product Catalog" />

              {/* Fallback message if PDF doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted -z-10">
                <div className="text-center space-y-4 p-8">
                  <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Product Catalog</h3>
                    <p className="text-muted-foreground mb-4">
                      {"Upload your PDF to /public/catalog.pdf to display it here"}
                    </p>
                    <Button onClick={handleDownload} variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Catalog
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-2 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-950/20 dark:to-background">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Detailed Specs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Complete technical specifications for all products</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-2 bg-gradient-to-br from-orange-50/50 to-white dark:from-orange-950/20 dark:to-background">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Easy Download</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Save the catalog for offline reference</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-2 bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-background">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Maximize2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Fullscreen View</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Immersive reading experience on any device</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
