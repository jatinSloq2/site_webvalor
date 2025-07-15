import { Metadata } from "next"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio - Webvalor",
  description: "Explore our recent projects and see how we've helped businesses transform their digital presence with stunning, high-performance websites.",
}

const projects = [
  {
    title: "TechStart E-Commerce Platform",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete e-commerce solution with advanced product filtering, secure payment processing, and inventory management system.",
    results: ["300% increase in conversions", "50% faster page load times", "99.9% uptime"],
    year: "2024"
  },
  {
    title: "DataViz SaaS Dashboard",
    category: "SaaS",
    tags: ["React", "D3.js", "Node.js"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Interactive dashboard for data visualization with real-time analytics, custom charts, and collaborative features.",
    results: ["40% increase in user engagement", "Reduced bounce rate by 60%", "5-star user ratings"],
    year: "2024"
  },
  {
    title: "InnovateCorp Website",
    category: "Corporate",
    tags: ["Next.js", "Tailwind", "CMS"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional corporate website with custom CMS, multi-language support, and advanced SEO optimization.",
    results: ["200% increase in organic traffic", "85% improvement in Core Web Vitals", "Lead generation up 150%"],
    year: "2023"
  },
  {
    title: "FitApp Mobile Landing",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Conversion-optimized landing page for fitness mobile app with interactive demos and subscription management.",
    results: ["500% increase in app downloads", "35% conversion rate", "Featured in App Store"],
    year: "2023"
  },
  {
    title: "Gourmet Restaurant Chain",
    category: "Restaurant",
    tags: ["Next.js", "Sanity", "Stripe"],
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Multi-location restaurant website with online ordering, reservation system, and loyalty program integration.",
    results: ["400% increase in online orders", "Reduced phone orders by 70%", "Customer satisfaction up 90%"],
    year: "2023"
  },
  {
    title: "FinTech Startup Platform",
    category: "FinTech",
    tags: ["Next.js", "TypeScript", "Supabase"],
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete brand identity and secure financial platform for innovative fintech startup with regulatory compliance.",
    results: ["$2M seed funding raised", "10,000+ active users", "Bank-grade security certification"],
    year: "2023"
  }
]

const categories = ["All", "E-Commerce", "SaaS", "Corporate", "Mobile", "Restaurant", "FinTech"]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our recent projects and see how we've helped businesses 
            transform their digital presence with stunning, high-performance websites.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium text-sm">Key Results:</h4>
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to Join Our <span className="gradient-text">Success Stories?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create something amazing together. Book a consultation 
            and let's discuss how we can transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}