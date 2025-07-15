import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  )
}