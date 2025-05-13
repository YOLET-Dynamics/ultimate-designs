import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* About Header */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            alt="About header"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-6 font-serif text-3xl font-normal tracking-tight md:text-4xl lg:text-5xl">About Us</h1>
            <p className="mx-auto max-w-2xl text-white/90">
              Ultimate Consulting Architects and Engineers is a premier firm dedicated to creating spaces that blend
              functionality, aesthetics, and sustainability.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-normal md:text-3xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2005, Ultimate Consulting Architects and Engineers began as a small architectural studio
                    in Addis Ababa with a vision to create spaces that inspire and endure. Over the years, we've grown
                    into a full-service architectural and construction firm, but our core values remain unchanged.
                  </p>
                  <p>
                    We believe that great design has the power to transform lives and communities. Our approach combines
                    innovative thinking with practical solutions, ensuring that each project not only meets but exceeds
                    our clients' expectations.
                  </p>
                  <p>
                    Today, our diverse team of architects, designers, and construction professionals collaborate to
                    deliver exceptional projects across residential, commercial, cultural, and public sectors.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Our studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-[#f5f2ef] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 md:p-8">
                  <h3 className="mb-4 font-serif text-xl font-normal">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl">Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mx-auto mb-6 aspect-square w-40 overflow-hidden rounded-full sm:w-48">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mb-1 font-serif text-xl font-normal">{member.name}</h3>
                  <p className="mb-4 text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="bg-[#f5f2ef] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl">
              Awards & Recognition
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, index) => (
                <div key={index} className="bg-white p-6 md:p-8">
                  <p className="mb-2 text-sm font-medium text-neutral-500">{award.year}</p>
                  <h3 className="mb-2 font-serif text-xl font-normal">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-serif text-2xl font-normal md:text-3xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Contact us today to schedule a consultation and discover how Ultimate Designs can bring your vision to
              life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black px-5 py-2.5 text-sm uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <div className="container mx-auto mb-12 px-4 text-center md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-black">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const values = [
  {
    title: "Design Excellence",
    description:
      "We pursue excellence in every aspect of design, creating spaces that are both beautiful and functional.",
  },
  {
    title: "Client Partnership",
    description:
      "We build strong relationships with our clients, working collaboratively to understand and realize their vision.",
  },
  {
    title: "Sustainability",
    description: "We are committed to environmentally responsible design practices that minimize ecological impact.",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovative approaches and technologies to push the boundaries of what's possible in architecture.",
  },
]

const team = [
  {
    name: "Alexandra Chen",
    role: "Principal Architect & Founder",
    bio: "With over 20 years of experience, Alexandra leads our team with a passion for innovative design and sustainable architecture.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "Design Director",
    bio: "Marcus brings a unique perspective to each project, combining artistic vision with practical solutions to create exceptional spaces.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop",
  },
  {
    name: "Sophia Rodriguez",
    role: "Construction Manager",
    bio: "Sophia ensures that our designs are executed with precision and quality, overseeing all aspects of the construction process.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    role: "Interior Design Lead",
    bio: "David specializes in creating harmonious interior spaces that complement the architectural design and enhance the user experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Olivia Patel",
    role: "Sustainability Specialist",
    bio: "Olivia focuses on integrating eco-friendly practices and materials into our designs to create environmentally responsible buildings.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Project Manager",
    bio: "James coordinates our project teams, ensuring efficient communication and timely delivery of all project milestones.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop",
  },
]

const awards = [
  {
    year: "2023",
    title: "Excellence in Sustainable Design",
    organization: "American Institute of Architects",
  },
  {
    year: "2022",
    title: "Best Cultural Building",
    organization: "International Architecture Awards",
  },
  {
    year: "2021",
    title: "Urban Design Merit Award",
    organization: "Society for Urban Design",
  },
  {
    year: "2020",
    title: "Innovative Residential Project",
    organization: "Residential Design Association",
  },
  {
    year: "2019",
    title: "Commercial Building of the Year",
    organization: "Commercial Architecture Excellence",
  },
  {
    year: "2018",
    title: "Preservation Achievement Award",
    organization: "Historic Preservation Foundation",
  },
]
