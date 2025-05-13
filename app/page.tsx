"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import ServiceDialog from "@/components/service-dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Modern architectural design"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 font-serif text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              ULTIMATE CONSULTING
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-8 max-w-2xl text-base font-normal md:text-lg lg:text-xl"
            >
              Architects and Engineers creating spaces that inspire, endure, and
              transform the way we live
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 border border-white/80 px-5 py-2.5 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black sm:px-6 sm:py-3"
              >
                Explore our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 font-serif text-2xl font-normal tracking-tight text-black md:text-3xl">
                Crafting Exceptional Spaces
              </h2>
              <p className="mb-8 text-muted-foreground">
                Ultimate Consulting Architects and Engineers is a premier firm
                dedicated to creating spaces that blend functionality,
                aesthetics, and sustainability. With a passion for innovative
                design and meticulous attention to detail, we transform visions
                into reality.
              </p>
              <div className="h-px w-24 bg-neutral-300 mx-auto"></div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[#f5f2ef] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center font-serif text-2xl font-normal tracking-tight text-black md:mb-16 md:text-3xl"
            >
              Our Services
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col bg-white p-6 md:p-8"
                >
                  <h3 className="mb-3 font-serif text-xl font-normal md:mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm text-muted-foreground md:mb-6 md:text-base">
                    {service.description}
                  </p>
                  <ServiceDialog
                    title={service.title}
                    description={service.description}
                    fullDescription={service.fullDescription}
                    benefits={service.benefits}
                    process={service.process}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center font-serif text-2xl font-normal tracking-tight text-black md:mb-16 md:text-3xl"
            >
              Featured Projects
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group overflow-hidden"
                >
                  <div className="relative mb-3 aspect-[4/3] overflow-hidden md:mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-1 font-serif text-lg font-normal md:mb-2 md:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {project.location}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-black md:mt-3"
                  >
                    View project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mt-10 text-center md:mt-12"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-black px-5 py-2.5 text-sm uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white sm:px-6 sm:py-3"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA with Animation */}
        <section className="bg-black py-16 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-serif text-2xl font-normal tracking-tight md:mb-6 md:text-3xl"
            >
              Let's Create Something Extraordinary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-6 max-w-2xl text-sm text-white/80 md:mb-8 md:text-base"
            >
              Ready to transform your vision into reality? Contact us to discuss
              your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white px-5 py-2.5 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black sm:px-6 sm:py-3"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const services = [
  {
    title: "Architectural Design",
    description:
      "From concept to completion, we create innovative architectural designs that balance form and function, tailored to your specific needs and vision.",
    fullDescription:
      "Our architectural design service is a comprehensive process that transforms your ideas into tangible, buildable plans. We begin by understanding your vision, needs, and constraints, then develop conceptual designs that evolve through collaboration into detailed construction documents. Our team of experienced architects brings creativity, technical expertise, and attention to detail to every project, ensuring that the final design not only meets your functional requirements but also creates a meaningful spatial experience.",
    benefits: [
      "Customized designs that reflect your unique vision and requirements",
      "Innovative solutions that maximize space, light, and functionality",
      "Sustainable design strategies that reduce environmental impact and operating costs",
      "Seamless integration of architecture with interior and landscape design",
      "Compliance with building codes and regulations",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We begin by understanding your goals, requirements, budget, and timeline through in-depth consultations.",
      },
      {
        title: "Concept Design",
        description:
          "We develop preliminary design concepts that explore different approaches to meeting your needs.",
      },
      {
        title: "Design Development",
        description:
          "We refine the selected concept, developing detailed plans, elevations, and material selections.",
      },
      {
        title: "Documentation",
        description:
          "We prepare comprehensive construction documents that communicate the design intent to contractors.",
      },
      {
        title: "Construction Support",
        description:
          "We provide ongoing support during construction to ensure the design is executed as envisioned.",
      },
    ],
  },
  {
    title: "Interior Design",
    description:
      "Our interior design services transform spaces into beautiful, functional environments that reflect your style and enhance your daily experience.",
    fullDescription:
      "Interior design is about creating spaces that not only look beautiful but also function efficiently and reflect the personality and lifestyle of the occupants. Our interior design service encompasses everything from space planning and material selection to furniture specification and styling. We consider how you move through and use each space, ensuring that the design enhances your daily experience while expressing your unique aesthetic preferences.",
    benefits: [
      "Cohesive design that harmonizes with the architectural elements",
      "Thoughtful space planning that optimizes flow and functionality",
      "Curated material and furniture selections that balance aesthetics, comfort, and durability",
      "Custom solutions for unique spaces or specific requirements",
      "Access to exclusive trade resources and craftspeople",
    ],
    process: [
      {
        title: "Programming",
        description:
          "We identify your functional needs, aesthetic preferences, and lifestyle considerations.",
      },
      {
        title: "Schematic Design",
        description:
          "We develop space plans and conceptual designs that address your requirements.",
      },
      {
        title: "Design Development",
        description:
          "We select materials, finishes, furniture, lighting, and accessories that bring the design to life.",
      },
      {
        title: "Documentation",
        description:
          "We create detailed specifications and drawings for contractors and fabricators.",
      },
      {
        title: "Installation",
        description:
          "We coordinate the delivery and placement of furnishings and accessories, ensuring every detail is perfect.",
      },
    ],
  },
  {
    title: "Landscape Design",
    description:
      "We create beautiful, sustainable outdoor spaces that complement your architecture and provide functional areas for relaxation, entertainment, and connection with nature.",
    fullDescription:
      "Our landscape design service creates outdoor environments that extend and enhance your living or working space. We consider the natural features of your site, local climate conditions, and your lifestyle needs to develop landscapes that are both beautiful and sustainable. From intimate garden retreats to expansive commercial landscapes, we integrate hardscape elements, planting designs, and outdoor amenities to create cohesive, functional outdoor spaces.",
    benefits: [
      "Outdoor spaces that complement and enhance your architecture",
      "Sustainable planting designs appropriate for your local climate",
      "Functional areas for relaxation, entertainment, and recreation",
      "Improved property value through thoughtful landscape enhancements",
      "Reduced maintenance through smart material and plant selection",
    ],
    process: [
      {
        title: "Site Analysis",
        description:
          "We evaluate your site's existing conditions, including topography, soil, and vegetation.",
      },
      {
        title: "Concept Development",
        description:
          "We create preliminary designs that address your needs and preferences for outdoor living.",
      },
      {
        title: "Design Refinement",
        description:
          "We develop detailed plans for hardscape elements, planting schemes, and special features.",
      },
      {
        title: "Implementation Planning",
        description:
          "We prepare construction documents and specifications for landscape contractors.",
      },
      {
        title: "Installation Oversight",
        description:
          "We monitor the installation process to ensure the landscape is executed according to plan.",
      },
    ],
  },
  {
    title: "Site Supervision",
    description:
      "Our experienced team provides comprehensive site supervision to ensure your project is built according to specifications, maintaining quality standards and addressing challenges promptly.",
    fullDescription:
      "Site supervision is critical to translating design intent into built reality. Our site supervision service provides regular on-site presence during construction to monitor progress, verify quality, and address issues as they arise. We serve as your advocate, working closely with contractors to ensure that work is performed according to plans and specifications. Through detailed documentation and clear communication, we help keep your project on track and maintain the integrity of the design throughout the construction process.",
    benefits: [
      "Quality assurance through regular site inspections and documentation",
      "Timely identification and resolution of construction issues",
      "Coordination between design intent and construction realities",
      "Clear communication between all project stakeholders",
      "Detailed progress reporting and documentation",
    ],
    process: [
      {
        title: "Pre-construction Meeting",
        description:
          "We establish communication protocols and review expectations with the construction team.",
      },
      {
        title: "Regular Site Visits",
        description:
          "We conduct scheduled inspections to monitor progress and quality of work.",
      },
      {
        title: "Quality Control",
        description:
          "We verify that materials and workmanship meet the standards specified in the contract documents.",
      },
      {
        title: "Issue Resolution",
        description:
          "We identify and address construction issues promptly to minimize delays and cost impacts.",
      },
      {
        title: "Documentation",
        description:
          "We maintain detailed records of site conditions, progress, and decisions made during construction.",
      },
    ],
  },
  {
    title: "Renovation",
    description:
      "Breathe new life into existing structures while preserving their character and integrity through our expert renovation services.",
    fullDescription:
      "Renovation projects require a special sensitivity to the existing structure's history, character, and construction. Whether we're updating a space for modern functionality or meticulously restoring historic elements, our approach balances respect for the original with the requirements of contemporary life. We have extensive experience working with existing buildings of all ages and styles, developing solutions that honor their past while ensuring their relevance for the future.",
    benefits: [
      "Thoughtful interventions that respect and enhance the original structure",
      "Creative solutions for integrating modern systems and amenities",
      "Expert knowledge of construction techniques and materials",
      "Improved energy efficiency and performance without compromising character",
      "Increased property value through quality improvements",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We thoroughly evaluate the existing conditions, identifying both constraints and opportunities.",
      },
      {
        title: "Design Strategy",
        description:
          "We develop a design approach that addresses your goals while respecting the building's character.",
      },
      {
        title: "Technical Solutions",
        description:
          "We devise detailed solutions for integrating new elements with existing construction.",
      },
      {
        title: "Specialized Construction",
        description:
          "We work with craftspeople skilled in both traditional and contemporary techniques.",
      },
      {
        title: "Finishing Touches",
        description:
          "We carefully select finishes and details that complement the building's style and period.",
      },
    ],
  },
  {
    title: "Consulting",
    description:
      "We provide expert consulting services for architectural and engineering challenges, offering specialized knowledge and innovative solutions for complex projects.",
    fullDescription:
      "Our consulting service offers specialized expertise for specific architectural and engineering challenges. Whether you need guidance on a particular aspect of your project or comprehensive review of plans and specifications, our team provides objective, expert advice based on years of experience across diverse project types. We can help identify potential issues, evaluate alternatives, and develop solutions that align with your goals, budget, and timeline.",
    benefits: [
      "Access to specialized expertise for specific project challenges",
      "Objective evaluation of design options and technical solutions",
      "Identification of potential issues before they become problems",
      "Strategic guidance for complex decision-making",
      "Fresh perspective from experienced professionals",
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We discuss your specific needs and challenges to define the scope of consulting services.",
      },
      {
        title: "Information Gathering",
        description:
          "We collect and review relevant documents, plans, and specifications.",
      },
      {
        title: "Analysis",
        description:
          "We evaluate the information and identify key issues, opportunities, and constraints.",
      },
      {
        title: "Recommendations",
        description:
          "We develop and present clear, actionable recommendations to address your specific challenges.",
      },
      {
        title: "Implementation Support",
        description:
          "We provide ongoing guidance as you implement recommendations and address issues.",
      },
    ],
  },
];

const projects = [
  {
    title: "Azure Heights Residence",
    location: "Addis Ababa, Ethiopia",
    slug: "azure-heights-residence",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Serenity Corporate Headquarters",
    location: "Addis Ababa, Ethiopia",
    slug: "serenity-corporate-headquarters",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Harmony Cultural Center",
    location: "Addis Ababa, Ethiopia",
    slug: "harmony-cultural-center",
    image:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Oasis Eco Resort",
    location: "Hawassa, Ethiopia",
    slug: "oasis-eco-resort",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Vertex Mixed-Use Development",
    location: "Addis Ababa, Ethiopia",
    slug: "vertex-mixed-use-development",
    image:
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Luminance Residential Tower",
    location: "Addis Ababa, Ethiopia",
    slug: "luminance-residential-tower",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=1887&auto=format&fit=crop",
  },
];
