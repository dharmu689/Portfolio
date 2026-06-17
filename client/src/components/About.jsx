import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaTrophy, FaFileAlt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const About = () => {
  const infoCards = [
    { icon: <FaGraduationCap className="text-brandOrange text-xl" />, title: 'B.Tech CSE', desc: 'CGC Mohali' },
    { icon: <FaMapMarkerAlt className="text-brandBlue text-xl" />, title: 'Location', desc: 'Chandigarh, India' },
    { icon: <FaLaptopCode className="text-brandYellow text-xl" />, title: '500+ DSA', desc: 'Problems Solved' },
    { icon: <FaTrophy className="text-brandOrange text-xl" />, title: 'Hackathon', desc: 'Capgemini 2026' },
    { icon: <FaFileAlt className="text-brandBlue text-xl" />, title: 'Research', desc: 'KiranaSmart Paper' },
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
    <section id="about" className="py-20 px-6 bg-brandNavy text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          {/* Underline accent with gradient */}
          <div className="w-24 h-1 bg-gradient-to-r from-brandOrange to-brandBlue mt-3 rounded-full shadow-md shadow-brandBlue/35" />
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
              <div className="absolute inset-0 bg-gradient-to-tr from-brandOrange to-brandBlue rounded-2xl p-1 shadow-[0_0_30px_rgba(30,144,255,0.25)] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]" />

              {/* Inside Content Card */}
              <div className="absolute inset-1.5 bg-[#0D1B2A] rounded-xl flex items-center justify-center border border-[#0D1B2A]">
                <span className="text-7xl font-extrabold tracking-widest text-white/90 font-mono drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                  DK
                </span>
              </div>

              {/* Floating Tech Badges */}
              {/* React Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-brandNavy border border-brandBlue/30 p-3 rounded-full text-brandBlue shadow-lg shadow-brandBlue/20"
              >
                <FaReact className="h-6 w-6 animate-[spin_8s_linear_infinite]" />
              </motion.div>

              {/* Node Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-brandNavy border border-brandOrange/30 p-3 rounded-full text-[#68A063] shadow-lg shadow-green-500/10"
              >
                <FaNodeJs className="h-6 w-6" />
              </motion.div>

              {/* MongoDB Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-6 -right-6 bg-brandNavy border border-brandYellow/30 p-3 rounded-full text-[#47A248] shadow-lg shadow-green-600/10"
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
            className="flex flex-col space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Dharmu Kumar</h3>
              <p className="text-brandOrange font-medium mt-1">Full Stack Developer | MERN Stack</p>
            </div>

            {/* Academic Info */}
            <div className="space-y-3 border-l-2 border-brandBlue/30 pl-4 py-1">
              <div>
                <p className="text-sm text-brandBlue font-semibold">CGC University, Mohali</p>
                <p className="text-sm text-gray-300">B.Tech CSE (2024 - 2027) | CGPA: 8.65</p>
              </div>
              <div>
                <p className="text-sm text-brandBlue font-semibold">Government Polytechnic College, Patna</p>
                <p className="text-sm text-gray-300">Diploma CSE (2023) | CGPA: 8.01</p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-[#A0AEC0] leading-relaxed">
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
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0D1B2A] border border-brandBlue/20 hover:border-brandOrange/35 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 shadow-md shadow-brandNavy/30"
                >
                  <div className="mb-2 bg-brandNavy p-2.5 rounded-lg border border-brandBlue/10">
                    {card.icon}
                  </div>
                  <h4 className="text-xs text-gray-400 font-semibold tracking-wide uppercase">{card.title}</h4>
                  <p className="text-xs text-white font-bold mt-1">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-brandOrange text-white font-semibold shadow-md shadow-brandOrange/25 hover:bg-[#E05E00] hover:shadow-brandOrange/45 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-6 py-3 rounded-lg border-2 border-brandOrange text-brandOrange font-semibold hover:bg-brandOrange hover:text-white hover:-translate-y-0.5 transition-all duration-300"
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
