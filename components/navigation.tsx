"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = () => {
    setIsOpen(false)
    scrollToTop()
  }

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded overflow-hidden flex items-center justify-center bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Intraday Experts Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="font-bold text-base lg:text-xl">Intraday Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-400 transition-colors font-medium text-sm lg:text-base px-2 py-1 rounded ${
                  pathname === item.href ? "text-blue-400 bg-slate-700" : ""
                }`}
                onClick={scrollToTop}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-2 hover:text-blue-400 transition-colors font-medium rounded ${
                  pathname === item.href ? "text-blue-400 bg-slate-700" : ""
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
