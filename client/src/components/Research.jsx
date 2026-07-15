import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa'

const Research = () => {
  const tags = ["YOLOv8", "Facebook Prophet", "NLP", "MERN Stack", "Agile"]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section id="research" className="py-20 px-6 bg-brandLight text-brandNavy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brandNavy">Research & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandNavy mt-3 rounded-full shadow-sm shadow-brandBlue/15" />
          <p className="text-brandNavy/80 mt-4 max-w-lg text-sm sm:text-base">
            Publications, conference presentations, and scientific work detailing my academic and research contributions.
          </p>
        </motion.div>

        {/* Highlighted Featured Card */}
        <div className="flex justify-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full max-w-4xl bg-white border border-brandLight rounded-[24px] p-6 sm:p-8 shadow-sm shadow-brandBlue/5 hover:shadow-md transition-all duration-500"
          >
            {/* Grid Layout: Left Icon, Right Text */}
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 items-start">
              {/* Left Column: Large Icon */}
              <div className="flex justify-center md:justify-start items-center">
                <div className="p-6 rounded-2xl bg-brandBg border border-brandLight flex items-center justify-center group">
                  <FaBookOpen className="text-5xl sm:text-6xl md:text-7xl text-brandBlue animate-pulse" />
                </div>
              </div>

              {/* Right Column: Content Details */}
              <div className="flex flex-col text-left space-y-4">
                {/* Paper Status Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full text-brandBg bg-brandNavy shadow-sm select-none">
                    📄 Research Paper - Accepted & Presented
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brandNavy leading-snug">
                  KiranaSmart - AI-Based Smart Inventory Management System for Kirana Stores
                </h3>

                {/* Authors Info */}
                <div className="text-xs sm:text-sm text-brandBlue font-semibold">
                  <p>
                    <span className="text-brandNavy/60 font-normal">Authors:</span> Dharmu Kumar, Ayush Kumar Jha, Muskan Kumari, Sowayam Mahajan
                  </p>
                  <p className="mt-1 text-brandNavy italic font-normal">
                    Guided by: <span className="font-semibold text-brandNavy">Dr. Jaspreet Kaur</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-brandNavy/80 leading-relaxed">
                  This paper presents an AI-powered smart inventory management system designed specifically for small Kirana stores in India. The system uses YOLOv8 for product detection, Facebook Prophet for demand forecasting, and NLP for natural language querying. Built on MERN stack with Agile methodology.
                </p>

                {/* Tech Tags (with stagger animations) */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {tags.map((tag, tIdx) => (
                    <motion.span
                      key={tIdx}
                      variants={tagVariants}
                      className="px-2.5 py-1 text-xs text-brandNavy bg-brandBg border border-brandLight rounded-md hover:border-brandBlue hover:text-brandBlue transition-colors duration-300 select-none"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Actions Button Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1O8xAAozfdE05vc84H4KuNjAlbpSpLmK2/view?usp=sharing"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-brandNavy text-brandBg text-sm font-semibold shadow-sm hover:bg-brandBlue transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    <span>View Paper</span>
                  </a>
                  <a
                    href="https://github.com/dharmu689/Kirana-Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-lg border-2 border-brandBlue text-brandBlue text-sm font-semibold hover:bg-brandBlue/10 transition-all duration-300"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Research
