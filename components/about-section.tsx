import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Our Mission"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl mb-6 font-bebas">Our Mission</h2>
            <p className="text-lg mb-6">
              At Core X, we believe that performance wear should empower athletes at every level. Our mission is to
              create gear that enhances your natural abilities while pushing the boundaries of innovation and
              sustainability.
            </p>
            <p className="text-lg mb-6">
              We're committed to developing cutting-edge fabrics and designs that move with you, not against you. Every
              stitch, every seam, and every fiber is engineered with purpose – to help you achieve your personal best.
            </p>
            <p className="text-lg mb-6">
              Beyond performance, we're dedicated to reducing our environmental footprint. Our sustainable practices
              include using recycled materials, reducing water consumption, and implementing ethical manufacturing
              processes.
            </p>
            <Button className="bg-black hover:bg-corex-red text-white">Learn More About Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
