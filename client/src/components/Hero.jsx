import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const badges = [
    // { text: '500+ DSA', pos: 'top-0 left-0 sm:-left-1', delay: 0 },
    // { text: 'React.js', pos: 'top-0 right-0 sm:-right-1', delay: 0.3 },
    // { text: 'Node.js', pos: 'top-1/2 -translate-y-1/2 -left-4 sm:-left-8', delay: 0.6 },
    // { text: 'Express.js', pos: 'top-1/2 -translate-y-1/2 -right-4 sm:-right-8', delay: 0.9 },
    // { text: 'MongoDB', pos: 'bottom-0 left-1/2 -translate-x-1/2', delay: 1.2 },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brandBg to-brandLight overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Tech grid/dot background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(63,114,175,0.15)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brandNavy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-24">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col space-y-6 text-left"
        >
          <div>
            <span className="text-brandBlue font-semibold tracking-wide uppercase text-sm sm:text-base">
              👋 Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brandNavy mt-2 leading-tight">
              Dharmu Kumar
            </h1>
          </div>

          {/* Subheading with Typewriter effect */}
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brandNavy to-brandBlue bg-clip-text text-transparent flex items-center h-12">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'MERN Stack Developer',
                  'Backend Developer',
                  'Problem Solver',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <p className="text-base sm:text-lg text-brandNavy/80 max-w-xl leading-relaxed">
            Passionate developer from Chandigarh, building scalable web apps with MERN Stack. 500+ DSA problems solved.
          </p>

          {/* Call to Actions & Socials */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 rounded-lg bg-brandNavy text-brandBg font-semibold shadow-lg shadow-brandNavy/15 hover:bg-brandBlue hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-brandBlue text-brandBlue font-semibold hover:bg-brandBlue/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Resume
            </a>

            <div className="flex space-x-3 items-center sm:ml-2">
              <a
                href="https://github.com/dharmu689"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-brandLight text-brandBlue hover:bg-brandBlue hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dharmu689/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-brandLight text-brandBlue hover:bg-brandBlue hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Circular Avatar with Floating Badges */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center relative w-full h-full min-h-[360px]"
        >
          {/* Background depth glow blob */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#FF6B00]/20 via-[#1E90FF]/20 to-[#FFB800]/15 blur-3xl opacity-75 animate-pulse" />
          </div>

          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
            {/* AVATAR CONTAINER WITH SHADOW & ROTATING GRADIENT BORDER */}
            <div className="relative rounded-full shadow-2xl shadow-brandBlue/25 p-[4px] overflow-hidden w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] flex items-center justify-center">
              {/* Rotating Conic Gradient Layer */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[60%] rounded-full pointer-events-none"
              // style={{
              //   background: 'conic-gradient(from 0deg, #FF6B00, #1E90FF, #FFB800, #FF6B00)',
              // }}
              />

              {/* Inner Gap Ring & Photo Container */}
              <div className="relative w-full h-full rounded-full bg-[#0A0F1E] p-1.5 overflow-hidden z-10 flex items-center justify-center shadow-inner">
                <img
                  src="/profile-photo.png"
                  alt="Dharmu Kumar"
                  className="w-full h-full rounded-full object-cover object-top select-none"
                  onError={(e) => {
                    e.currentTarget.src = '/profile-photo.png'
                  }}
                />
              </div>
            </div>

            {/* FLOATING BADGES (5 BADGES WITH STAGGERED FLOAT & HOVER EFFECT) */}
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 + badge.delay },
                  scale: { duration: 0.5, delay: 0.3 + badge.delay },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: badge.delay,
                  },
                }}
                whileHover={{ scale: 1.08 }}
                className={`absolute ${badge.pos} z-20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-brandBlue/25 bg-white/95 text-brandNavy shadow-md shadow-brandBlue/15 backdrop-blur-sm cursor-default transition-transform duration-200 select-none`}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
