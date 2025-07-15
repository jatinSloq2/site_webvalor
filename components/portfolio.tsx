"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern e-commerce solution with advanced filtering and payment integration."
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Clean and intuitive dashboard for data visualization and analytics."
  },
  {
    title: "Corporate Website",
    category: "Brand Identity",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional corporate website with custom CMS and SEO optimization."
  },
  {
    title: "Mobile App Landing",
    category: "Mobile Design",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Conversion-focused landing page for mobile app with interactive elements."
  },
  {
    title: "Restaurant Chain",
    category: "Web Development",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Multi-location restaurant website with online ordering system."
  },
  {
    title: "Tech Startup",
    category: "Brand Identity",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete brand identity and website for innovative tech startup."
  }
]

export function Portfolio() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-muted/40 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses 
            transform their digital presence with stunning, high-performance websites.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
            >
              <AnimatedCard className="overflow-hidden group" glowing hoverScale={1.03}>
                <div className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center space-x-4 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedButton size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </AnimatedButton>
                    <AnimatedButton size="sm" variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </AnimatedButton>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <motion.div 
                    className="text-sm text-primary font-medium mb-3 px-3 py-1 bg-primary/10 rounded-full inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-20" delay={0.4}>
          <AnimatedButton size="lg" variant="outline">
            View All Projects
          </AnimatedButton>
        </ScrollReveal>
      </div>
    </section>
  )
}