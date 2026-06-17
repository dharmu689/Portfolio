import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brandNavy to-[#0D1B2A] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Tech grid/dot background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(30,144,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brandOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-24">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col space-y-6 text-left"
        >
          <div>
            <span className="text-brandOrange font-semibold tracking-wide uppercase text-sm sm:text-base">
              👋 Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              Dharmu Kumar
            </h1>
          </div>

          {/* Subheading with Typewriter effect */}
          <div className="text-2xl sm:text-3xl font-bold text-brandBlue flex items-center h-12">
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

          <p className="text-base sm:text-lg text-[#A0AEC0] max-w-xl leading-relaxed">
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
              className="px-6 py-3 rounded-lg bg-brandOrange text-white font-semibold shadow-lg shadow-brandOrange/25 hover:bg-[#E05E00] hover:shadow-brandOrange/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-brandOrange text-brandOrange font-semibold hover:bg-brandOrange hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              View Resume
            </a>

            <div className="flex space-x-3 items-center sm:ml-2">
              <a
                href="https://github.com/dharmu689"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-brandNavy border border-brandBlue/30 text-brandBlue hover:bg-brandBlue hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-brandNavy border border-brandBlue/30 text-brandBlue hover:bg-brandBlue hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Simple Avatar/Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center relative w-full h-full min-h-[340px]"
        >
          <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            {/* AVATAR CIRCLE */}
            <div
              className="rounded-full"
              style={{
                width: '280px',
                height: '280px',
                padding: '4px',
                background: 'linear-gradient(135deg, #FF6B00, #1E90FF)',
                animation: 'rotate 6s linear infinite'
              }}
            >
              <div
                className="rounded-full w-full h-full bg-[#0D1B2A] flex items-center justify-center"
                style={{
                  animation: 'rotate 6s linear infinite reverse'
                }}
              >
                <span
                  className="text-6xl font-extrabold select-none"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B00, #1E90FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  DK
                </span>
              </div>
            </div>

            {/* FLOATING BADGES */}
            {/* Badge 1 — Top right: React.js */}
            <div
              className="absolute top-4 right-0 px-3 py-1 rounded-full text-xs font-medium border animate-float"
              style={{
                backgroundColor: '#0D1B2A',
                borderColor: '#61DAFB',
                color: '#61DAFB'
              }}
            >
              React.js
            </div>

            {/* Badge 2 — Left: Node.js */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-medium border animate-float"
              style={{
                backgroundColor: '#0D1B2A',
                borderColor: '#68A063',
                color: '#68A063',
                animationDelay: '1s'
              }}
            >
              Node.js
            </div>

            {/* Badge 3 — Bottom right: MongoDB */}
            <div
              className="absolute bottom-4 right-0 px-3 py-1 rounded-full text-xs font-medium border animate-float"
              style={{
                backgroundColor: '#0D1B2A',
                borderColor: '#4DB33D',
                color: '#4DB33D',
                animationDelay: '2s'
              }}
            >
              MongoDB
            </div>

            {/* Badge 4 — Top left: 500+ DSA */}
            <div
              className="absolute top-4 left-0 px-3 py-1 rounded-full text-xs font-medium border animate-float"
              style={{
                backgroundColor: '#0D1B2A',
                borderColor: '#FF6B00',
                color: '#FF6B00',
                animationDelay: '0.5s'
              }}
            >
              500+ DSA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
