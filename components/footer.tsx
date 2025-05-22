import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-3xl font-bebas tracking-wider mb-4 inline-block">
              CORE X
            </Link>
            <p className="text-white/70 mb-6">
              Performance gear for the relentless athlete. Engineered for those who push boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-corex-red transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-corex-red transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/70 hover:text-corex-red transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-corex-red transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Performance Tees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Compression Gear
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Joggers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Sports Bras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Training Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Athletes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-corex-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Core X. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/70 hover:text-corex-red text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/70 hover:text-corex-red text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 hover:text-corex-red text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
