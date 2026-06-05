import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false)

  const footerLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Research', href: 'research' },
    { name: 'Achievements', href: 'achievements' },
    { name: 'Contact', href: 'contact' },
  ]

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScrollButtonVisibility)
    return () => window.removeEventListener('scroll', handleScrollButtonVisibility)
  }, [])

  const handleScrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050D1A] border-t border-brandBlue/10 py-12 px-6 text-[#A0AEC0] overflow-hidden z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col"
      >
        {/* ROW 1: Logo + Nav Links + Social Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left pb-8 border-b border-brandBlue/10">
          {/* Left Side: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-2.5">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={(e) => handleScrollToSection(e, 'hero')}
            >
              <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
              {/* <span className="text-xl font-bold tracking-wider font-mono text-white">
                PORTFOLIO<span className="text-brandYellow">.</span>
              </span> */}
            </div>
            <p className="text-sm text-[#A0AEC0]">Building scalable web apps with passion 🚀</p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm font-medium">
            {footerLinks.map((link, idx) => (
              <span key={idx} className="flex items-center">
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-[#A0AEC0] hover:text-brandOrange transition-colors duration-300"
                >
                  {link.name}
                </a>
                {idx < footerLinks.length - 1 && (
                  <span className="text-[#A0AEC0]/30 ml-3 select-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Right Side: Social Media links */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <motion.a
              href="https://github.com/dharmu689"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2.5 bg-brandNavy rounded-lg border border-brandBlue/15 hover:border-[#FFB800] text-[#A0AEC0] hover:text-[#FFB800] transition-colors duration-300 text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/dharmu689"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2.5 bg-brandNavy rounded-lg border border-brandBlue/15 hover:border-[#1E90FF] text-[#A0AEC0] hover:text-[#1E90FF] transition-colors duration-300 text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:dharmukumar1622003@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="p-2.5 bg-brandNavy rounded-lg border border-brandBlue/15 hover:border-[#FF6B00] text-[#A0AEC0] hover:text-[#FF6B00] transition-colors duration-300 text-xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* ROW 2: Middle Badges Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 py-8 select-none">
          <div className="flex items-center space-x-2 bg-brandNavy border border-brandBlue/15 px-4.5 py-1.5 rounded-full text-xs sm:text-sm text-[#A0AEC0] shadow-sm">
            <span className="text-brandOrange">📍</span>
            <span className="font-medium">Chandigarh, India</span>
          </div>
          <div className="flex items-center space-x-2 bg-brandNavy border border-brandBlue/15 px-4.5 py-1.5 rounded-full text-xs sm:text-sm text-[#A0AEC0] shadow-sm">
            <span className="text-brandOrange">💻</span>
            <span className="font-medium">Open to Opportunities</span>
          </div>
          <div className="flex items-center space-x-2 bg-brandNavy border border-brandBlue/15 px-4.5 py-1.5 rounded-full text-xs sm:text-sm text-[#A0AEC0] shadow-sm">
            <span className="text-brandOrange">⚡</span>
            <span className="font-medium">Available for Freelance</span>
          </div>
        </div>

        {/* ROW 3: Bottom Copyright Section */}
        <div className="border-t border-brandBlue/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#A0AEC0] text-center md:text-left select-none">
          <span>&copy; 2025 Dharmu Kumar. All rights reserved.</span>
          <span className="font-medium">
            Designed & Built with <span className="text-[#FF6B00] hover:scale-115 inline-block transition-transform duration-300">❤️</span> by Dharmu Kumar
          </span>
        </div>
      </motion.div>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-[#FF6B00] hover:bg-[#FFB800] text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
