"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Portfolio Header */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
            alt="Portfolio header"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 font-serif text-3xl font-normal tracking-tight md:mb-6 md:text-4xl"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-sm text-white/90 md:text-base"
            >
              Explore our diverse collection of architectural projects, each
              reflecting our commitment to innovative design, quality
              craftsmanship, and client satisfaction.
            </motion.p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden md:mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mb-1 font-serif text-xl font-normal md:mb-2 md:text-2xl">
                    {project.title}
                  </h2>
                  <p className="mb-2 text-xs text-muted-foreground md:mb-3 md:text-sm">
                    {project.location}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground md:mb-6 md:text-base">
                    {project.description}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-[#f5f2ef] px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-black hover:underline"
                  >
                    View project details
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
              className="mt-10 text-center md:mt-16"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-black"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const portfolioProjects = [
  {
    slug: "azure-heights-residence",
    title: "Azure Heights Residence",
    location: "Addis Ababa, Ethiopia",
    description:
      "A modern hillside residence that seamlessly blends indoor and outdoor living spaces, featuring floor-to-ceiling windows that frame panoramic city views and a minimalist design aesthetic that emphasizes clean lines and natural materials.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Residential", "Modern", "Sustainable"],
  },
  {
    slug: "serenity-corporate-headquarters",
    title: "Serenity Corporate Headquarters",
    location: "Addis Ababa, Ethiopia",
    description:
      "A 25-story corporate headquarters designed to foster collaboration and innovation, with flexible workspaces, abundant natural light, and state-of-the-art sustainability features that earned LEED Platinum certification.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Commercial", "Corporate", "LEED Certified"],
  },
  {
    slug: "harmony-cultural-center",
    title: "Harmony Cultural Center",
    location: "Addis Ababa, Ethiopia",
    description:
      "A multi-purpose cultural center that houses a theater, art gallery, and educational spaces, designed with acoustic excellence and versatile configurations to accommodate diverse programming and community needs.",
    image:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cultural", "Public", "Multi-purpose"],
  },
  {
    slug: "oasis-eco-resort",
    title: "Oasis Eco Resort",
    location: "Addis Ababa, Ethiopia",
    description:
      "An environmentally conscious resort that integrates with its natural surroundings, featuring passive cooling systems, rainwater harvesting, and locally sourced materials that minimize ecological impact while maximizing guest comfort.",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop",
    tags: ["Hospitality", "Eco-friendly", "Resort"],
  },
  {
    slug: "vertex-mixed-use-development",
    title: "Vertex Mixed-Use Development",
    location: "Addis Ababa, Ethiopia",
    description:
      "A vibrant urban development combining retail, office, and residential spaces around a central plaza, creating a pedestrian-friendly community hub that activates the streetscape and promotes social interaction.",
    image:
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mixed-use", "Urban", "Community"],
  },
  {
    slug: "luminance-residential-tower",
    title: "Luminance Residential Tower",
    location: "Addis Ababa, Ethiopia",
    description:
      "A 30-story residential tower featuring a distinctive façade that optimizes natural light and views while providing privacy and energy efficiency, complemented by amenity spaces that foster a sense of community among residents.",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=1887&auto=format&fit=crop",
    tags: ["Residential", "High-rise", "Luxury"],
  },
  {
    slug: "horizon-public-library",
    title: "Horizon Public Library",
    location: "Addis Ababa, Ethiopia",
    description:
      "A contemporary library designed as a community living room, with flexible spaces that adapt to evolving needs, abundant natural light, and a striking central atrium that connects all floors visually and spatially.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2070&auto=format&fit=crop",
    tags: ["Public", "Educational", "Community"],
  },
  {
    slug: "cascade-mountain-retreat",
    title: "Cascade Mountain Retreat",
    location: "Addis Ababa, Ethiopia",
    description:
      "A mountain lodge that celebrates its alpine setting through expansive glazing, locally sourced stone and timber, and a design that responds to seasonal conditions while providing year-round comfort and spectacular views.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop",
    tags: ["Residential", "Mountain", "Retreat"],
  },
];
