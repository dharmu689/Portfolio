import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaTrophy, FaFileAlt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const About = () => {
  const infoCards = [
    { icon: <FaGraduationCap className="text-brandNavy text-xl" />, title: 'B.Tech CSE', desc: 'CGC Mohali' },
    { icon: <FaMapMarkerAlt className="text-brandNavy text-xl" />, title: 'Location', desc: 'Chandigarh, India' },
    { icon: <FaLaptopCode className="text-brandNavy text-xl" />, title: '500+ DSA', desc: 'Problems Solved' },
    { icon: <FaTrophy className="text-brandNavy text-xl" />, title: 'Hackathon', desc: 'Capgemini 2026' },
    { icon: <FaFileAlt className="text-brandNavy text-xl" />, title: 'Research', desc: 'KiranaSmart Paper' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 px-6 bg-brandBg text-brandNavy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brandNavy">About Me</h2>
          {/* Underline accent with gradient */}
          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandNavy mt-3 rounded-full shadow-sm shadow-brandBlue/15" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image/Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center relative"
          >
            {/* Square Rounded Card */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Border with gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brandBlue to-brandNavy rounded-2xl p-1 shadow-md shadow-brandBlue/10 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brandBlue/20" />

              {/* Inside Content Card */}
              <div className="absolute inset-1.5 bg-white rounded-xl flex items-center justify-center border border-brandLight">
                <span className="text-7xl font-extrabold tracking-widest text-brandNavy font-mono drop-shadow-sm">
                  DK
                </span>
              </div>

              {/* Floating Tech Badges */}
              {/* React Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white border border-brandLight p-3 rounded-full text-brandBlue shadow-md shadow-brandBlue/5"
              >
                <FaReact className="h-6 w-6 animate-[spin_8s_linear_infinite]" />
              </motion.div>

              {/* Node Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white border border-brandLight p-3 rounded-full text-brandBlue shadow-md shadow-brandBlue/5"
              >
                <FaNodeJs className="h-6 w-6" />
              </motion.div>

              {/* MongoDB Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-6 -right-6 bg-white border border-brandLight p-3 rounded-full text-brandBlue shadow-md shadow-brandBlue/5"
              >
                <SiMongodb className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col space-y-6 text-brandNavy"
          >
            <div>
              <h3 className="text-2xl font-bold text-brandNavy">Dharmu Kumar</h3>
              <p className="text-brandBlue font-semibold mt-1">Full Stack Developer | MERN Stack</p>
            </div>

            {/* Academic Info */}
            <div className="space-y-3 border-l-2 border-brandBlue/35 pl-4 py-1">
              <div>
                <p className="text-sm text-brandBlue font-bold">CGC University, Mohali</p>
                <p className="text-sm text-brandNavy/80">B.Tech CSE (2024 - 2027) | CGPA: 8.65</p>
              </div>
              <div>
                <p className="text-sm text-brandBlue font-bold">Government Polytechnic College, Patna</p>
                <p className="text-sm text-brandNavy/80">Diploma CSE (2023) | CGPA: 8.01</p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-brandNavy/80 leading-relaxed">
              I am a passionate Full Stack Developer with a strong focus on MERN Stack development. I love building real-world applications that solve actual problems. From AI-powered inventory systems to EdTech platforms, I enjoy turning ideas into scalable products. I have solved 500+ DSA problems and constantly push myself to learn and grow.
            </p>

            {/* Info Cards Grid (with staggered animations) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {infoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-white border border-brandLight hover:border-brandBlue p-4 rounded-[24px] flex flex-col items-center text-center transition-all duration-300 shadow-sm shadow-brandBlue/5"
                >
                  <div className="mb-2 bg-brandLight p-2.5 rounded-xl">
                    {card.icon}
                  </div>
                  <h4 className="text-xs text-brandNavy/60 font-semibold tracking-wide uppercase">{card.title}</h4>
                  <p className="text-xs text-brandNavy font-bold mt-1">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-brandNavy text-brandBg font-semibold shadow-sm hover:bg-brandBlue hover:-translate-y-0.5 transition-all duration-300"
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-6 py-3 rounded-lg border-2 border-brandBlue text-brandBlue font-semibold hover:bg-brandBlue/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
