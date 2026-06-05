import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTrophy, FaCode, FaFire } from 'react-icons/fa'

// Stats Counter Helper Component
const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      if (start === end) return

      const duration = 2.5 // seconds
      const totalMiliseconds = duration * 1000
      const stepTime = Math.abs(Math.floor(totalMiliseconds / end))

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, Math.max(stepTime, 15)) // Cap to keep render rates smooth

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-mono">
      {count}{suffix}
    </span>
  )
}

const Achievements = () => {
  const statsList = [
    { value: "500", suffix: "+", label: "DSA Problems Solved" },
    { value: "2", suffix: "★", label: "CodeChef Rating" },
    { value: "3", suffix: "+", label: "Featured Projects" },
    { value: "5", suffix: "+", label: "Professional Certifications" },
  ]

  const achievementsList = [
    {
      icon: <FaTrophy className="text-[#FF6B00]" />,
      title: "Capgemini Exceller AgentifAI Buildathon 2026",
      desc: "Participated as Backend Developer in Team Starks. Built a Hospital IoT Data Interpreter Agent for ICU patient monitoring using Python, Streamlit, Firebase, OpenAI GPT-4o, and LangChain.",
      badge: "Hackathon",
      badgeColor: "#FF6B00",
    },
    {
      icon: <FaCode className="text-[#1E90FF]" />,
      title: "500+ DSA Problems Solved",
      desc: "Solved 500+ problems across LeetCode, CodeChef, GeeksforGeeks, and HackerRank. Achieved 2-star rating on CodeChef.",
      badge: "Competitive Programming",
      badgeColor: "#1E90FF",
    },
    {
      icon: <FaFire className="text-[#FFB800]" />,
      title: "30-Day Coding Challenge Completed",
      desc: "Completed a 30-day coding challenge enhancing problem-solving, algorithm design, and competitive programming skills.",
      badge: "Challenge",
      badgeColor: "#FFB800",
    },
  ]

  const certificationsList = [
    { name: "AWS Academy Graduate — Generative AI Foundations", issuer: "Amazon Web Services", dotColor: "#FF6B00" },
    { name: "Database and SQL", issuer: "Infosys Springboard", dotColor: "#1E90FF" },
    { name: "Learn C++", issuer: "CodeChef", dotColor: "#FFB800" },
    { name: "JavaScript Essentials 1", issuer: "CISCO", dotColor: "#FF6B00" },
    { name: "IT Essentials", issuer: "CISCO", dotColor: "#1E90FF" },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="achievements" className="py-20 px-6 bg-brandNavy text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandOrange to-brandBlue mt-3 rounded-full shadow-md shadow-brandBlue/35" />
          <p className="text-[#A0AEC0] mt-4 max-w-lg text-sm sm:text-base">
            Milestones, coding challenges, hackathons, and certifications achieved during my developer journey.
          </p>
        </motion.div>

        {/* Stats Animate Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-[#0D1B2A] border border-brandBlue/15 rounded-2xl flex flex-col items-center text-center shadow-md shadow-brandNavy/40 hover:border-brandBlue/30 transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-brandOrange">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-medium mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Achievements Group */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <h3 className="text-lg font-bold text-brandYellow border-l-4 border-brandYellow pl-3 leading-none select-none">
              🏆 Milestones & Hackathons
            </h3>
            <div className="flex-grow h-px bg-white/10" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {achievementsList.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-[#0D1B2A] border border-brandBlue/15 hover:border-brandOrange hover:shadow-lg hover:shadow-brandOrange/5 rounded-2xl p-6 transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Floating Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-brandNavy rounded-xl border border-brandBlue/15 text-2xl">
                    {achievement.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white shadow-sm select-none"
                    style={{ backgroundColor: achievement.badgeColor }}
                  >
                    {achievement.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                  {achievement.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#A0AEC0] leading-relaxed mt-1">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Group */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h3 className="text-lg font-bold text-brandYellow border-l-4 border-brandYellow pl-3 leading-none select-none">
              📜 Professional Certifications
            </h3>
            <div className="flex-grow h-px bg-white/10" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificationsList.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-[#0D1B2A] border border-brandBlue/10 hover:border-brandBlue/35 rounded-xl transition-all duration-300 shadow-sm"
              >
                {/* Colored dot matching accent color */}
                <div
                  className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: cert.dotColor, color: cert.dotColor }}
                />

                {/* Text Content */}
                <div className="flex flex-col text-left">
                  <span className="font-bold text-white text-sm sm:text-base leading-snug">
                    {cert.name}
                  </span>
                  <span className="text-xs text-[#A0AEC0] mt-0.5 font-medium">
                    {cert.issuer}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
