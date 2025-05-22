"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="#" className="text-3xl font-bebas tracking-wider">
          CORE X
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#shop" className="font-medium hover:text-corex-red transition-colors">
            Shop
          </Link>
          <Link href="#about" className="font-medium hover:text-corex-red transition-colors">
            Our Mission
          </Link>
          <Link href="#athletes" className="font-medium hover:text-corex-red transition-colors">
            X Athletes
          </Link>
          <Link href="#join" className="font-medium hover:text-corex-red transition-colors">
            Join
          </Link>
          <Link href="#contact" className="font-medium hover:text-corex-red transition-colors">
            Support
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User size={20} />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="#shop" className="font-medium py-2" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="#about" className="font-medium py-2" onClick={() => setIsOpen(false)}>
              Our Mission
            </Link>
            <Link href="#athletes" className="font-medium py-2" onClick={() => setIsOpen(false)}>
              X Athletes
            </Link>
            <Link href="#join" className="font-medium py-2" onClick={() => setIsOpen(false)}>
              Join
            </Link>
            <Link href="#contact" className="font-medium py-2" onClick={() => setIsOpen(false)}>
              Support
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon">
                <User size={20} />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
