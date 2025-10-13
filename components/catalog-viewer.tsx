"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Maximize2, X } from "lucide-react"

// PDF catalog options
const PDF_CATALOGS = [
  {
    id: "critical-minerals",
    title: "Critical Minerals",
    fullTitle: "Critical Minerals Product",
    edition: "3rd Edition",
    url: "/LONGi CRITICAL MINERALS PRODUCT BROCHURE ( 3rd Edition) 0825-Latest_compressed.pdf",
    downloadName: "LONGi-Critical-Minerals-Product-Brochure.pdf"
  },
  {
    id: "mining-industry",
    title: "Mining Industry",
    fullTitle: "Mining Industry Product",
    edition: "3rd Edition",
    url: "/2024 海外矿山英文（第三版） Mining Indutry Product Brochure.pdf",
    downloadName: "LONGi-Mining-Industry-Product-Brochure.pdf"
  }
]

export function CatalogViewer() {
  const [activeCatalog, setActiveCatalog] = useState(PDF_CATALOGS[0].id)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isWeChat, setIsWeChat] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Get current catalog
  const currentCatalog = PDF_CATALOGS.find(cat => cat.id === activeCatalog) || PDF_CATALOGS[0]
  const pdfUrl = currentCatalog.url

  // Detect WeChat browser and mobile device
  useEffect(() => {
    const checkEnvironment = () => {
      if (typeof window !== 'undefined') {
        // Detect WeChat browser
        const ua = window.navigator.userAgent.toLowerCase()
        setIsWeChat(ua.includes('micromessenger'))

        // Detect mobile device (any mobile browser including iOS, Android)
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
                               window.innerWidth < 768
        setIsMobile(isMobileDevice)
      }
    }
    checkEnvironment()

    // Re-check on window resize
    window.addEventListener('resize', checkEnvironment)
    return () => window.removeEventListener('resize', checkEnvironment)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = currentCatalog.downloadName
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
          {/* Catalog Tabs */}
          <div className="bg-card border-b border-border p-4">
            <Tabs value={activeCatalog} onValueChange={setActiveCatalog} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 h-auto">
                {PDF_CATALOGS.map((catalog) => (
                  <TabsTrigger
                    key={catalog.id}
                    value={catalog.id}
                    className="py-3 px-2 text-xs sm:text-sm font-medium whitespace-normal leading-tight"
                  >
                    {catalog.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Catalog Info and Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground text-sm sm:text-base">{currentCatalog.fullTitle} Brochure</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{currentCatalog.edition}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                {!isWeChat && (
                  <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)} className="gap-2">
                    {isFullscreen ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
                  </Button>
                )}
              </div>
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

            <div className={`${isFullscreen ? "h-screen" : "h-[600px] md:h-[800px]"} w-full relative overflow-auto flex items-center justify-center bg-gray-100`}>
              {isWeChat ? (
                // WeChat - show fake preview with download prompt
                <div className="w-full h-full relative bg-white">
                  {/* Mock catalog preview */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Header area with branding */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
                      <h1 className="text-2xl font-bold mb-2">{currentCatalog.fullTitle}</h1>
                      <p className="text-blue-100">LONGi Magnet Australia</p>
                      <p className="text-sm text-blue-200 mt-2">{currentCatalog.edition}</p>
                    </div>

                    {/* Mock content area */}
                    <div className="flex-1 p-6 space-y-4 bg-gray-50">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                          <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Overlay with download prompt */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="bg-white rounded-2xl p-8 m-6 text-center shadow-2xl max-w-sm">
                        <FileText className="h-20 w-20 mx-auto text-blue-500 mb-4" />
                        <h3 className="font-bold text-xl mb-3">Complete Product Catalog</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                          Download the full brochure to view detailed specifications and product information
                        </p>
                        <Button
                          onClick={handleDownload}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg shadow-lg w-full"
                          size="lg"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // All other browsers - use PDF.js viewer from CDN
                <div className="w-full h-full relative">
                  <iframe
                    src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + pdfUrl)}`}
                    className="w-full h-full border-0"
                    title="Product Catalog"
                  />
                </div>
              )}
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
