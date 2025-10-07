import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Better yet, see us in person!</h2>
          <p className="text-muted-foreground text-lg">Visit our website or contact us for more information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background">
            <div className="flex flex-col items-center text-center space-y-6 h-full">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <h3 className="font-bold text-2xl mb-4">Email Us</h3>
                  <p className="text-base font-semibold text-foreground mb-6">info@ljmagnet.com</p>
                </div>
                <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6" asChild>
                  <a href="mailto:info@ljmagnet.com">Send Email</a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-br from-green-50/50 to-white dark:from-green-950/20 dark:to-background">
            <div className="flex flex-col items-center text-center space-y-6 h-full">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <h3 className="font-bold text-2xl mb-4">Call Us</h3>
                  <p className="text-base font-semibold text-foreground mb-2">(08) 6253 8830</p>
                  <p className="text-sm text-muted-foreground mb-6">Open: 09:00 am – 05:00 pm</p>
                </div>
                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6" asChild>
                  <a href="tel:+61862538830">Call Now</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
