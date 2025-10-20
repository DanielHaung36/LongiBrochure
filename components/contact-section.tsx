"use client"
import { Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin,Users  } from "lucide-react"

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
                  <p className="text-base font-semibold text-foreground mb-6">support@ljmagnet.com.au</p>
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
<Card className="p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/20 dark:to-background">
  <div className="flex flex-col items-center text-center space-y-6 h-full">
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
      <Users className="h-10 w-10 text-white" />
    </div>

    <div className="flex-1 flex flex-col justify-between w-full">
      <div>
        <h3 className="font-bold text-2xl mb-6">Contact Our Engineers</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <img src="/wubiao-weng.png" alt="Wubiao Weng" className="w-32 h-32 object-contain rounded-lg shadow-md" />
            <p className="font-semibold text-base">Wubiao Weng</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img src="/weijun-wang.jpg" alt="Weijun Wang" className="w-32 h-32 object-contain rounded-lg shadow-md" />
            <p className="font-semibold text-base">Weijun Wang</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img src="/zixuan-lu.png" alt="Zixuan Lu" className="w-32 h-32 object-contain rounded-lg shadow-md" />
            <p className="font-semibold text-base">Zixuan Lu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Card>
          <div className="max-w-5xl mx-auto text-center space-y-8">
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
        </div>
      </div>
    </section>
  )
}
