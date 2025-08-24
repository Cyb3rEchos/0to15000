import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Process from '@/components/Process'
import About from '@/components/About'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Process />
      <About />
      <CTA />
    </main>
  )
}