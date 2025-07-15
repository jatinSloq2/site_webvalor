import { Metadata } from "next"
import { motion } from "framer-motion"
import { 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Headphones,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Services - Webvalor",
  description: "Comprehensive web development services including custom development, mobile-first design, SEO optimization, and 24/7 support.",
}

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailored websites built with cutting-edge technologies for optimal performance and scalability.",
    features: [
      "React & Next.js Development",
      "TypeScript Implementation",
      "Custom CMS Solutions",
      "API Integration",
      "Database Design",
      "Third-party Integrations"
    ],
    price: "Starting at $5,000"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that provide exceptional user experiences across all devices and platforms.",
    features: [
      "Mobile Optimization",
      "Touch-Friendly Interfaces",
      "Cross-Platform Compatibility",
      "Progressive Web Apps",
      "App Store Optimization",
      "Performance Testing"
    ],
    price: "Starting at $3,000"
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Strategic optimization to boost search rankings and deliver lightning-fast loading speeds.",
    features: [
      "Technical SEO Audit",
      "Content Strategy",
      "Core Web Vitals Optimization",
      "Schema Markup",
      "Local SEO",
      "Analytics Setup"
    ],
    price: "Starting at $2,500"
  },
  {
    icon: Zap,
    title: "E-Commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing and inventory management.",
    features: [
      "Custom Shopping Cart",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Accounts",
      "Analytics Dashboard"
    ],
    price: "Starting at $8,000"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Comprehensive security measures and ongoing maintenance to protect your digital assets.",
    features: [
      "SSL Certificate Setup",
      "Security Audits",
      "Regular Backups",
      "Software Updates",
      "Malware Protection",
      "Performance Monitoring"
    ],
    price: "Starting at $500/month"
  },
  {
    icon: Headphones,
    title: "Consulting & Support",
    description: "Expert guidance and round-the-clock support to ensure your project's success.",
    features: [
      "Strategy Consultation",
      "Technical Architecture",
      "Code Reviews",
      "Training Sessions",
      "Priority Support",
      "Emergency Response"
    ],
    price: "Starting at $200/hour"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and technical requirements."
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Creating wireframes, mockups, and technical specifications for your project."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building your website with clean code, rigorous testing, and quality assurance."
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Deploying your site and providing ongoing optimization and support."
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive web development solutions designed to elevate your business 
            and deliver exceptional digital experiences that drive results.
          </p>
          <Button size="lg">
            Request Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Separator className="mb-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered 
              on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project requirements and create a custom solution 
            that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}