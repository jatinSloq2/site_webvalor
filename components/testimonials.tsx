"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "Webvalor transformed our online presence completely. The website they built not only looks stunning but also converts visitors into customers at an incredible rate.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Founder, GrowthLab",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "Working with Webvalor was a game-changer. Their attention to detail and technical expertise resulted in a website that exceeded all our expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, InnovateCorp",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The team at Webvalor delivered a premium website that perfectly captures our brand identity. The performance improvements were immediate and significant.",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Webvalor.
          </p>
        </ScrollReveal>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedCard className="text-center p-12" glowing>
                <CardContent className="p-0">
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-1" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          </AnimatePresence>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 0.1}
            >
              <AnimatedCard className="h-full" glowing>
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  </motion.div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}