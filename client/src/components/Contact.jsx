import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const infoCards = [
    {
      icon: <FaEnvelope className="text-brandNavy text-xl" />,
      label: 'Email',
      value: 'dharmukumar1622003@gmail.com',
      href: 'mailto:dharmukumar1622003@gmail.com',
      isNewTab: false,
    },
    {
      icon: <FaMapMarkerAlt className="text-brandNavy text-xl" />,
      label: 'Location',
      value: 'Chandigarh, India',
      href: null,
    },
    {
      icon: <FaGithub className="text-brandNavy text-xl" />,
      label: 'GitHub',
      value: 'github.com/dharmu689',
      href: 'https://github.com/dharmu689',
      isNewTab: true,
    },
    {
      icon: <FaLinkedin className="text-brandNavy text-xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dharmu689',
      href: 'https://linkedin.com/in/dharmu689',
      isNewTab: true,
    },
  ]

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async () => {
    setSuccess(false)
    setError(false)

    const newErrors = { name: '', email: '', subject: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required'
      isValid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
      isValid = false
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
      isValid = false
    }

    setErrors(newErrors)

    if (!isValid) return

    setLoading(true)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      )

      if (response.data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      if (err.response && err.response.data && err.response.data.errors) {
        const backendErrors = {}
        err.response.data.errors.forEach((e) => {
          const field = e.path || e.param
          backendErrors[field] = e.msg
        })
        setErrors((prev) => ({ ...prev, ...backendErrors }))
      }
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-20 px-6 bg-brandBg text-brandNavy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brandNavy">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandNavy mt-3 rounded-full shadow-sm shadow-brandBlue/15" />
          <p className="text-brandNavy/80 mt-4 max-w-lg text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Content Layout split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-left text-brandNavy"
          >
            <h3 className="text-2xl font-bold text-brandNavy mb-2">Contact Information</h3>
            <p className="text-brandNavy/80 text-sm sm:text-base leading-relaxed mb-6">
              Connect with me via email or follow my work on GitHub and LinkedIn. I am always open to discussing new development ventures, opportunities, or feedback.
            </p>

            <motion.div variants={containerVariants} className="space-y-4">
              {infoCards.map((card, idx) => {
                const cardContent = (
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brandLight rounded-xl flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-brandNavy/60 font-semibold uppercase tracking-wider">{card.label}</span>
                      <span className="text-sm sm:text-base font-bold text-brandNavy truncate">{card.value}</span>
                    </div>
                  </div>
                )

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="bg-white border border-brandLight hover:border-brandBlue rounded-[24px] p-4 transition-all duration-300 shadow-sm shadow-brandBlue/5"
                  >
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.isNewTab ? '_blank' : '_self'}
                        rel={card.isNewTab ? 'noopener noreferrer' : ''}
                        className="block cursor-pointer"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      cardContent
                    )}
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Social media icons below info cards */}
            <div className="flex space-x-4 pt-6">
              <a
                href="https://github.com/dharmu689"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-brandLight text-brandBlue hover:text-brandNavy hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 text-2xl shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/dharmu689"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-brandLight text-brandBlue hover:text-brandNavy hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 text-2xl shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="bg-white border border-brandLight p-6 sm:p-8 rounded-[24px] shadow-sm shadow-brandBlue/5 flex flex-col text-left"
          >
            <h3 className="text-2xl font-bold text-brandNavy mb-6">Send Me a Message</h3>

            {/* Status alerts */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-sm font-semibold flex items-center space-x-2 shadow-sm shadow-emerald-950/5">
                <span>✅ Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-300 rounded-xl text-rose-800 text-sm font-semibold flex items-center space-x-2 shadow-sm shadow-rose-950/5">
                <span>❌ Something went wrong. Please try again.</span>
              </div>
            )}

            {/* Form Fields wrapped in a div wrapper (No HTML form tag) */}
            <div className="space-y-5">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-xs text-brandNavy/60 font-semibold mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="bg-brandBg border border-brandLight focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none rounded-xl px-4 py-3 text-brandNavy placeholder-gray-400 transition-all duration-300 text-sm"
                />
                {errors.name && <span className="text-xs text-rose-500 mt-1.5 font-medium">{errors.name}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-xs text-brandNavy/60 font-semibold mb-2 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-brandBg border border-brandLight focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none rounded-xl px-4 py-3 text-brandNavy placeholder-gray-400 transition-all duration-300 text-sm"
                />
                {errors.email && <span className="text-xs text-rose-500 mt-1.5 font-medium">{errors.email}</span>}
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-xs text-brandNavy/60 font-semibold mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Job Opportunity / Other"
                  className="bg-brandBg border border-brandLight focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none rounded-xl px-4 py-3 text-brandNavy placeholder-gray-400 transition-all duration-300 text-sm"
                />
                {errors.subject && <span className="text-xs text-rose-500 mt-1.5 font-medium">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-xs text-brandNavy/60 font-semibold mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-brandBg border border-brandLight focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none rounded-xl px-4 py-3 text-brandNavy placeholder-gray-400 transition-all duration-300 text-sm resize-none"
                />
                {errors.message && <span className="text-xs text-rose-500 mt-1.5 font-medium">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-brandNavy text-white font-bold text-sm tracking-wide shadow-sm hover:bg-brandBlue hover:scale-[1.01] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>🚀</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
