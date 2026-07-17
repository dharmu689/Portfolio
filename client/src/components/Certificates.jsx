import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdVerified } from 'react-icons/md'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { PiCertificateBold } from 'react-icons/pi'
import { HiOfficeBuilding } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Cloud & AI', 'Web Development', 'Programming', 'Networking', 'Database']

  const certificatesData = [
    {
      id: 1,
      title: "Generative AI Foundations",
      issuer: "Amazon Web Services (AWS)",
      initials: "AWS",
      year: "2026",
      category: "Cloud & AI",
      accentColor: "#112D4E",
      link: "https://drive.google.com/file/d/1K-rIYD-IJGOjXPr1jzzbhGcN_tGqcCpk/view?usp=sharing"
    },
    {
      id: 2,
      title: "Database and SQL",
      issuer: "Infosys Springboard",
      initials: "IS",
      year: "2026",
      category: "Database",
      accentColor: "#3F72AF",
      link: "https://drive.google.com/file/d/1VusW7CVwR2z9L-hKVsRvjHlXM4cBBoY2/view?usp=sharing"
    },
    {
      id: 3,
      title: "Complete Web Development Course",
      issuer: "Udemy (Hitesh Choudhary) 100 Hours",
      initials: "WD",
      year: "2026",
      category: "Web Development",
      accentColor: "#3F72AF",
      link: "https://drive.google.com/file/d/1r8sj-_RPYL7SWcM9iiepHDx7lq0JPNcj/view"
    },
    {
      id: 4,
      title: "Learn C++",
      issuer: "CodeChef",
      initials: "CC",
      year: "2025",
      category: "Programming",
      accentColor: "#3F72AF",
      link: "https://www.linkedin.com/posts/dharmu689_codechef-certificate-dharmu-kumar-activity-7265413443191459840-r2dh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx8yIkBk1ScSwesckwedEMSMTBBhTWkRJ8"
    },
    {
      id: 5,
      title: "JavaScript Essentials 1",
      issuer: "CISCO",
      initials: "CS",
      year: "2023",
      category: "Programming",
      accentColor: "#112D4E",
      link: "https://drive.google.com/file/d/1yQ4D9S-vMJZy82ImOkcg8U88TVNPsgyq/view?usp=sharing"
    },
    {
      id: 6,
      title: "IT Essentials",
      issuer: "CISCO",
      initials: "CS",
      year: "2023",
      category: "Networking",
      accentColor: "#3F72AF",
      link: "https://drive.google.com/file/d/1DKIFVMBXsvwBSKAB4SmumYYHE2Yj9U_1/view"
    }
  ]

  const filteredCertificates = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter(cert => cert.category === activeCategory)

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const tabsVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.08 
      } 
    }
  }

  const tabItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="certificates" className="bg-brandLight py-20 px-6 text-brandNavy overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brandNavy flex items-center justify-center gap-2">
            <MdVerified className="text-brandBlue text-4xl shrink-0" />
            Certificates
          </h2>
          <div className="w-10 h-[3px] bg-brandBlue mt-2 rounded-full"></div>
          <p className="mt-4 text-base text-brandNavy/80 max-w-lg">
            Professional certifications and experiences that validate my skills.
          </p>
        </motion.div>

        {/* CATEGORY FILTER TABS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tabsVariants}
          className="mt-10 flex justify-center flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={tabItemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-brandNavy text-white shadow-sm'
                  : 'bg-transparent border border-brandBlue/35 text-brandNavy hover:border-brandBlue hover:text-brandBlue'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* CERTIFICATES GRID */}
        <div className="mt-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: '#3F72AF',
                    boxShadow: '0 10px 20px rgba(63, 114, 175, 0.05)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-brandLight rounded-[24px] overflow-hidden flex flex-col justify-between group transition-all duration-300"
                >
                  {/* TOP SECTION (Mockup Preview) */}
                  <div 
                    className="h-52 w-full flex items-center justify-center relative select-none"
                    style={{
                      background: `linear-gradient(to bottom, ${cert.accentColor}15 0%, #FFFFFF 100%)`
                    }}
                  >
                    {/* Mockup Frame */}
                    <div className="w-[80%] h-[80%] bg-brandBg/50 border border-brandLight rounded-2xl p-4 flex flex-col justify-between relative backdrop-blur-sm">
                      {/* Top Issuer Initials */}
                      <div 
                        className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-sm"
                        style={{ backgroundColor: cert.accentColor }}
                      >
                        {cert.initials}
                      </div>

                      {/* Certificate Icon */}
                      <div className="flex justify-center items-center flex-grow mt-3">
                        <PiCertificateBold 
                          className="text-5xl transition-transform duration-500 group-hover:scale-110" 
                          style={{ color: cert.accentColor, opacity: 0.7 }} 
                        />
                      </div>

                      {/* Bottom Label */}
                      <div className="text-center text-[10px] sm:text-xs text-brandNavy/40 tracking-wider font-semibold uppercase">
                        Certificate of Completion
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM SECTION */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-bold text-brandNavy text-lg line-clamp-2 min-h-[56px] group-hover:text-brandBlue transition-colors duration-300">
                        {cert.title}
                      </h3>
                      
                      {/* Issuer info */}
                      <div className="mt-3 flex items-center gap-2 text-sm text-brandNavy/80">
                        <HiOfficeBuilding className="text-base text-brandBlue shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>

                      {/* Year info */}
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-brandNavy/60">
                        <BsCalendar3 className="text-xs text-brandBlue shrink-0" />
                        <span>{cert.year}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-5 flex gap-2 justify-end items-center">
                      <button
                        onClick={() => alert("Add certificate PDF link!")}
                        className="w-9 h-9 rounded-lg bg-brandBg border border-brandLight text-brandNavy/70 hover:border-brandBlue hover:text-brandBlue flex items-center justify-center transition-all duration-300 cursor-pointer"
                        title="Download Certificate"
                      >
                        <FiDownload className="text-base" />
                      </button>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-brandBlue text-brandBlue text-sm font-medium hover:bg-brandBlue/10 flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                      >
                        <FiExternalLink className="text-sm" />
                        View
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredCertificates.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center text-brandNavy/40 text-sm"
            >
              No certificates in this category yet.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Certificates


