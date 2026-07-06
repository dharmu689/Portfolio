import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false)

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

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/dharmu689',
      icon: <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110" />,
      borderColor: 'border-white/25',
      hoverBorder: 'hover:border-brandBlue',
      textColor: 'text-white/80 hover:text-brandBlue',
      hoverBg: 'hover:bg-brandBlue/10',
      hoverShadow: 'hover:shadow-sm hover:shadow-brandBlue/20',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/dharmu689',
      icon: <FaLinkedin className="text-xl transition-transform duration-300 group-hover:scale-110" />,
      borderColor: 'border-white/25',
      hoverBorder: 'hover:border-brandBlue',
      textColor: 'text-white/80 hover:text-brandBlue',
      hoverBg: 'hover:bg-brandBlue/10',
      hoverShadow: 'hover:shadow-sm hover:shadow-brandBlue/20',
    },
    {
      name: 'Email',
      href: 'mailto:dharmukumar1622003@gmail.com',
      icon: <HiMail className="text-xl transition-transform duration-300 group-hover:scale-110" />,
      borderColor: 'border-white/25',
      hoverBorder: 'hover:border-brandBlue',
      textColor: 'text-white/80 hover:text-brandBlue',
      hoverBg: 'hover:bg-brandBlue/10',
      hoverShadow: 'hover:shadow-sm hover:shadow-brandBlue/20',
    }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-brandNavy border-t border-brandLight/10 overflow-hidden z-20"
    >
      {/* TOP GRADIENT LINE */}
      <div 
        className="w-full h-[1px]" 
        style={{ background: 'linear-gradient(to right, transparent, #3F72AF, #DBE2EF, transparent)' }} 
      />

      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* LEFT SIDE — Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div
              className="cursor-pointer"
              onClick={(e) => handleScrollToSection(e, 'hero')}
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-auto object-contain" 
                style={{ height: '56px' }} 
              />
            </div>
            <p className="mt-3 text-sm text-white/75 max-w-[220px] leading-relaxed font-medium">
              Building scalable web apps with passion and{' '}
              <span className="text-brandBlue font-bold">clean code.</span>
            </p>
          </div>

          {/* RIGHT SIDE — Social Icons */}
          <div className="flex gap-4 items-center justify-center">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`group w-11 h-11 rounded-full border-[1.5px] ${social.borderColor} ${social.hoverBorder} ${social.textColor} ${social.hoverBg} flex items-center justify-center transition-all duration-300 ${social.hoverShadow}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="relative w-full h-[1px] mt-10 mb-6 flex items-center justify-center">
          <div 
            className="w-full h-full" 
            style={{
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), #3F72AF, rgba(255,255,255,0.1), transparent)'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-brandBlue" 
            style={{
              boxShadow: '0 0 6px #3F72AF'
            }}
          />
        </div>

        {/* COPYRIGHT ROW */}
        <div className="flex justify-center items-center text-sm text-white/50 text-center font-medium">
          <span>
            © 2025 <span className="text-white font-semibold">Dharmu Kumar</span>. All rights reserved.
          </span>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brandBlue hover:bg-brandNavy hover:text-white text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  )
}

export default Footer
