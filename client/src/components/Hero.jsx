import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import TechOrbit from './TechOrbit'

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
              href="#resume"
              className="px-6 py-3 rounded-lg border-2 border-brandOrange text-brandOrange font-semibold hover:bg-brandOrange hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Download Resume
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

        {/* Right Side: Solar System style Tech Orbit */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="hidden md:block w-full h-full relative"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
