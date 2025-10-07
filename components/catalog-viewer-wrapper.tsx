"use client"

import dynamic from "next/dynamic"

const CatalogViewer = dynamic(() => import("@/components/catalog-viewer").then((mod) => ({ default: mod.CatalogViewer })), {
  ssr: false,
  loading: () => (
    <section id="catalog" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">Loading catalog...</p>
      </div>
    </section>
  ),
})

export { CatalogViewer }
