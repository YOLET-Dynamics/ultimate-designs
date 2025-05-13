"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find((project) => project.slug === slug) || null;
};

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug) || portfolioProjects[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Project Hero */}
        <section className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <Image
            src={project.heroImage || project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-end px-4 pb-10 text-center text-white md:pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3 font-serif text-3xl font-normal tracking-tight md:mb-4 md:text-4xl lg:text-5xl"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-4 text-lg font-light md:mb-6 md:text-xl"
            >
              {project.location}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-2"
            >
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm md:px-4"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="mb-4 font-serif text-2xl font-normal md:mb-6 md:text-3xl">
                Project Overview
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground md:text-base">
                <p>{project.description}</p>
                <p>{project.overview}</p>
              </div>

              <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className="mb-3 text-base font-medium md:mb-4 md:text-lg">
                    Project Details
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm">
                    <li className="flex justify-between">
                      <span className="font-medium">Client:</span>
                      <span className="text-muted-foreground">
                        {project.client}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Year:</span>
                      <span className="text-muted-foreground">
                        {project.year}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Size:</span>
                      <span className="text-muted-foreground">
                        {project.size}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Status:</span>
                      <span className="text-muted-foreground">
                        {project.status}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-base font-medium md:mb-4 md:text-lg">
                    Services Provided
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground md:text-sm">
                    {project.services?.map((service, index) => (
                      <li key={index}>{service}</li>
                    )) || <li>Architectural Design</li>}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="bg-[#f5f2ef] py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl"
            >
              Project Gallery
            </motion.h2>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {(project.gallery || Array(6).fill({ url: project.image })).map(
                (image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.url || project.image}
                        alt={image.caption || `Project image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
                    </div>
                    {image.caption && (
                      <p className="mt-2 text-center text-xs text-muted-foreground md:text-sm">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Next Projects */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl"
            >
              Explore More Projects
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {portfolioProjects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="group block"
                    >
                      <div className="relative mb-3 aspect-[4/3] overflow-hidden md:mb-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mb-1 font-serif text-lg font-normal md:mb-2 md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground md:text-sm">
                        {project.location}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto mb-12 px-4 md:mb-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </motion.div>
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
    overview:
      "Perched on the hills of Addis Ababa, this private residence was designed to maximize the stunning views while creating a sense of privacy and tranquility. The architecture responds to the challenging topography, with a series of terraced levels that follow the natural contours of the site. The material palette of concrete, glass, and wood creates a warm yet contemporary aesthetic that complements the surrounding landscape.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tags: ["Residential", "Modern", "Sustainable"],
    client: "Private Client",
    year: "2022",
    size: "6,500 sq ft",
    status: "Completed",
    services: [
      "Architectural Design",
      "Interior Design",
      "Landscape Design",
      "Construction Management",
      "Furniture Selection",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        caption: "Exterior view showcasing the cantilevered structure",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        caption: "Open-concept living area with panoramic views",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        caption: "Infinity pool overlooking the city",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
        caption: "Master bedroom with floor-to-ceiling windows",
      },
      {
        url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=2070&auto=format&fit=crop",
        caption: "Minimalist kitchen with custom cabinetry",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        caption: "Terraced garden with native plantings",
      },
    ],
  },
  {
    slug: "serenity-corporate-headquarters",
    title: "Serenity Corporate Headquarters",
    location: "Addis Ababa, Ethiopia",
    description:
      "A 25-story corporate headquarters designed to foster collaboration and innovation, with flexible workspaces, abundant natural light, and state-of-the-art sustainability features that earned LEED Platinum certification.",
    overview:
      "This landmark corporate headquarters redefines the modern workplace with its emphasis on employee wellbeing, sustainability, and collaborative spaces. The building features a distinctive double-skin façade that optimizes thermal performance while providing occupants with natural ventilation options. A series of sky gardens punctuate the tower, offering respite and gathering spaces with spectacular views of the city.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1554469384-e58fac937c33?q=80&w=2187&auto=format&fit=crop",
    tags: ["Commercial", "Corporate", "LEED Certified"],
    client: "Serenity Global Inc.",
    year: "2021",
    size: "450,000 sq ft",
    status: "Completed",
    services: [
      "Architectural Design",
      "Interior Design",
      "Workplace Strategy",
      "Sustainability Consulting",
      "Construction Administration",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
        caption: "Exterior view of the tower and plaza",
      },
      {
        url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
        caption: "Main lobby with living green wall",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
        caption: "Collaborative workspace with flexible furniture",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        caption: "Executive boardroom with city views",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        caption: "Sky garden on the 15th floor",
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        caption: "Cafeteria and social hub",
      },
    ],
  },
  {
    slug: "harmony-cultural-center",
    title: "Harmony Cultural Center",
    location: "Addis Ababa, Ethiopia",
    description:
      "A multi-purpose cultural center that houses a theater, art gallery, and educational spaces, designed with acoustic excellence and versatile configurations to accommodate diverse programming and community needs.",
    overview:
      "The Harmony Cultural Center serves as a vibrant hub for the arts in Chicago's cultural district. The design celebrates the intersection of various art forms through a series of interconnected volumes that create a dynamic composition. The main performance hall features adjustable acoustics and seating configurations, allowing it to host everything from classical concerts to experimental theater. Public spaces flow seamlessly between indoor and outdoor areas, inviting community engagement and interaction.",
    image:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cultural", "Public", "Multi-purpose"],
    client: "City of Chicago Arts Commission",
    year: "2020",
    size: "85,000 sq ft",
    status: "Completed",
    services: [
      "Architectural Design",
      "Acoustic Engineering",
      "Exhibition Design",
      "Landscape Design",
      "Lighting Design",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1581365365721-9f5f5a5321ff?q=80&w=2070&auto=format&fit=crop",
        caption: "Exterior view at dusk",
      },
      {
        url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
        caption: "Main performance hall",
      },
      {
        url: "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=2070&auto=format&fit=crop",
        caption: "Art gallery with temporary exhibition",
      },
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        caption: "Educational workshop space",
      },
      {
        url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=2074&auto=format&fit=crop",
        caption: "Public plaza with outdoor performance area",
      },
      {
        url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
        caption: "Lobby with grand staircase",
      },
    ],
  },
  {
    slug: "oasis-eco-resort",
    title: "Oasis Eco Resort",
    location: "Addis Ababa, Ethiopia",
    description:
      "An environmentally conscious resort that integrates with its natural surroundings, featuring passive cooling systems, rainwater harvesting, and locally sourced materials that minimize ecological impact while maximizing guest comfort.",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    tags: ["Hospitality", "Eco-friendly", "Resort"],
    client: "Oasis Hospitality Group",
    year: "2019",
    size: "12 acres",
    status: "Completed",
    services: [
      "Master Planning",
      "Architectural Design",
      "Interior Design",
      "Landscape Architecture",
      "Sustainability Consulting",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
        caption: "Aerial view of the resort",
      },
      {
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop",
        caption: "Reception pavilion",
      },
      {
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
        caption: "Beachfront villa",
      },
      {
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
        caption: "Main pool area",
      },
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
        caption: "Restaurant with ocean views",
      },
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        caption: "Spa treatment room",
      },
    ],
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
