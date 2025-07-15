"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@webvalor.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "New York, NY",
    description: "Come say hello at our office"
  }
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-muted/20 to-primary/5 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(99,102,241,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your project? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond within 24 hours.
          </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <AnimatedCard glowing>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                    />
                  </div>

                  <AnimatedButton type="submit" size="lg" className="w-full" glowing>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </AnimatedButton>
                </form>
              </CardContent>
              </AnimatedCard>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Let&apos;s start a conversation
                </h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;re here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div 
                    key={info.title} 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <info.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-primary font-medium mb-2">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4">Response Time</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Email inquiries: Within 24 hours</p>
                  <p>• Phone calls: Mon-Fri, 8am-6pm EST</p>
                  <p>• Emergency support: Available 24/7</p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to questions you may have about working with us.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Most projects take 4-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes! We offer various support packages including maintenance, updates, and 24/7 monitoring to keep your site running smoothly."
              },
              {
                question: "What's included in your pricing?",
                answer: "Our pricing includes design, development, testing, deployment, and 30 days of post-launch support. No hidden fees."
              },
              {
                question: "Can you work with our existing brand?",
                answer: "Absolutely! We can work with your existing brand guidelines or help you develop a new brand identity if needed."
              }
            ].map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.1}>
                <AnimatedCard glowing>
              <CardContent className="p-6">


                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">
                      {faq.answer}
                </p>
              </CardContent>

                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}