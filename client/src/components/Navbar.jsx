import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Research', href: 'research' },
    { name: 'Achievements', href: 'achievements' },
    { name: 'Contact', href: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? 'bg-brandNavy/80 backdrop-blur-md shadow-lg border-b border-brandBlue/35 py-3'
          : 'bg-brandNavy border-b border-brandBlue/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => handleScrollToSection(e, 'hero')}>
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold tracking-wider font-mono text-white">
              PORTFOLIO<span className="text-brandYellow">.</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="relative text-sm font-medium text-white transition-colors duration-300 hover:text-brandOrange py-1 group"
              >
                {link.name}
                {/* Accent Highlight Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandYellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brandOrange hover:text-white transition-colors duration-300 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brandNavy border-b border-brandBlue/35"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-brandOrange hover:bg-white/5 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
