import { Metadata } from "next"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About - Webvalor",
  description: "Learn about Webvalor's mission, values, and the team behind premium web development solutions.",
}

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "We never compromise on quality. Every line of code is crafted with precision and attention to detail."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you to understand and exceed your expectations."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay ahead of the curve, using cutting-edge technologies to build future-proof solutions."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent delivery, transparent communication, and dependable support you can count on."
  }
]

const timeline = [
  {
    year: "2020",
    title: "Founded",
    description: "Webvalor was founded with a vision to create premium digital experiences."
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Landed our first enterprise client and delivered a game-changing e-commerce platform."
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team to include specialized designers, developers, and strategists."
  },
  {
    year: "2023",
    title: "50+ Projects",
    description: "Successfully delivered over 50 projects across various industries."
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Recognized as a leading web development agency with multiple awards."
  }
]

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24h", label: "Average Response Time" },
  { number: "5", label: "Years Experience" }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            About <span className="gradient-text">Webvalor</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're a team of passionate developers, designers, and strategists 
            dedicated to creating premium digital experiences that drive real business results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Webvalor, we believe that every business deserves a website that not only 
                looks exceptional but also performs flawlessly. Our mission is to bridge the 
                gap between stunning design and powerful functionality.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We work with ambitious brands and forward-thinking companies to create 
                digital experiences that convert visitors into customers and help businesses 
                achieve their goals in the digital landscape.
              </p>
              <Button size="lg">
                Start Your Project
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work 
              with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to industry recognition, here's our story.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The talented individuals behind Webvalor's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Alex Johnson"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Alex Johnson
                </h3>
                <p className="text-primary text-sm mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Visionary leader with 10+ years in web development and digital strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Sarah Chen
                </h3>
                <p className="text-primary text-sm mb-3">Lead Designer</p>
                <p className="text-muted-foreground text-sm">
                  Creative mastermind behind our stunning designs and user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Mike Rodriguez"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Mike Rodriguez
                </h3>
                <p className="text-primary text-sm mb-3">Technical Director</p>
                <p className="text-muted-foreground text-sm">
                  Full-stack expert ensuring our solutions are robust and scalable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch and let's 
            discuss how we can help transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}