import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projectsList = [
    {
      title: "KiranaSmart - Smart Inventory Management",
      initials: "KS",
      bannerGradient: "from-brandNavy to-brandBlue",
      description: "A full-stack AI-powered inventory and sales management system for kirana stores. Features QR/Barcode scanning, real-time stock tracking, automated alerts, and an AI Assistant for smart business insights.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Assistant"],
      badgeText: "Featured Project",
      badgeColor: "#112D4E",
      github: "https://github.com/dharmu689/Kirana-Store",
      live: "https://kirana-store-oq3u.vercel.app/",
    },
    {
      title: "GoldenBite - Food Delivery Web App",
      initials: "GB",
      bannerGradient: "from-brandBlue to-brandLight",
      description: "A responsive food ordering web interface built with React JS and Bootstrap. Features reusable UI components, dynamic cart management, and clean component-based architecture.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      badgeText: "Web App",
      badgeColor: "#3F72AF",
      github: "https://github.com/dharmu689/Summer-industrial-Training",
      live: "https://goldenbite.vercel.app/",
    },
    {
      title: "Smart Stock Portfolio Optimizer",
      initials: "SS",
      bannerGradient: "from-brandNavy to-brandLight",
      description: "A web-based stock portfolio optimizer using 0/1 Knapsack algorithm to maximize investment returns within budget. Features interactive UI for adding stocks and dynamically displaying optimized portfolio results.",
      tech: ["HTML", "CSS", "JavaScript", "DSA (Knapsack)"],
      badgeText: "Algorithms",
      badgeColor: "#3F72AF",
      github: "https://github.com/dharmu689/Smart-Stock-Portfolio-Optimizer",
      live: "https://dharmu689.github.io/Smart-Stock-Portfolio-Optimizer/",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 bg-brandBg text-brandNavy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brandNavy">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandNavy mt-3 rounded-full shadow-sm shadow-brandBlue/15" />
          <p className="text-brandNavy/80 mt-4 max-w-lg text-sm sm:text-base">
            A selection of my recent full-stack applications, algorithms, and responsive interface implementations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsList.map((project, idx) => {
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-white border border-brandLight hover:border-brandBlue rounded-[24px] p-6 transition-all duration-300 flex flex-col h-full shadow-sm shadow-brandBlue/5 hover:shadow-md group"
              >
                {/* Custom Gradient Initials Image Banner */}
                <div
                  className={`relative h-40 w-full rounded-2xl bg-gradient-to-r ${project.bannerGradient} flex items-center justify-center overflow-hidden mb-6`}
                >
                  <span className="text-4xl font-extrabold tracking-widest text-white/95 font-mono select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                    {project.initials}
                  </span>
                  {/* Floating Featured Badge */}
                  {project.badgeText && (
                    <span
                      className="absolute top-3 right-3 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full text-white shadow-md select-none"
                      style={{ backgroundColor: project.badgeColor }}
                    >
                      {project.badgeText}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-brandNavy mb-2 group-hover:text-brandBlue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brandNavy/70 mb-5 line-clamp-3 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-semibold text-brandNavy bg-brandBg border border-brandLight rounded-md transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center justify-between border-t border-brandLight/60 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-brandBlue font-semibold hover:text-brandNavy transition-colors duration-300"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-sm text-brandNavy font-semibold hover:text-brandBlue transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/dharmu689"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border-2 border-brandBlue text-brandBlue font-semibold hover:bg-brandBlue hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm shadow-brandBlue/5 hover:shadow-md"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
