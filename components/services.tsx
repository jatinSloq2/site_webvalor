"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Headphones 
} from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    features: ["React & Next.js", "TypeScript", "Responsive Design"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that look stunning and function perfectly on all devices and screen sizes.",
    features: ["Mobile Optimization", "Touch-Friendly UI", "Cross-Platform"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic SEO implementation to boost your search rankings and drive organic traffic.",
    features: ["Technical SEO", "Content Strategy", "Performance Optimization"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites that load instantly and provide exceptional user experiences.",
    features: ["Core Web Vitals", "Image Optimization", "Caching Strategies"]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Comprehensive security measures and ongoing maintenance to keep your site protected.",
    features: ["SSL Certificates", "Regular Updates", "Backup Solutions"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance to ensure your website runs smoothly.",
    features: ["Priority Support", "Quick Response", "Proactive Monitoring"]
  }
]

export function Services() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business 
            establish a powerful online presence and achieve digital success.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.1}
            >
              <AnimatedCard className="h-full group" glowing hoverScale={1.05}>
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full mr-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-20" delay={0.4}>
          <AnimatedButton size="lg" glowing>
            Request Quote
          </AnimatedButton>
        </ScrollReveal>
      </div>
    </section>
  )
}