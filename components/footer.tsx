import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-serif text-xl font-normal tracking-wider md:text-2xl">ULTIMATE CONSULTING</h2>
        </div>

        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Contact</h3>
            <address className="not-italic text-sm text-white/70">
              <p>Bole Road, Friendship Building</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-4">info@ultimateconsulting.com</p>
              <p>+251 (123) 456-7890</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#services" className="hover:text-white">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Site Supervision
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Renovation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Ultimate Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
