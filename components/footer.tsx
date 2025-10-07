export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-card-foreground">LONGI MAGNET</h3>
            <p className="text-sm text-muted-foreground">Australia</p>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://www.longimagnetics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
            >
              Visit our global website
            </a>
            <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} Longi Magnet Australia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
