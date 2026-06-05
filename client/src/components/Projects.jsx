import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projectsList = [
    {
      title: "KiranaSmart — Smart Inventory Management",
      initials: "KS",
      bannerGradient: "from-orange-600 to-amber-500",
      description: "A full-stack AI-powered inventory and sales management system for kirana stores. Features QR/Barcode scanning, real-time stock tracking, automated alerts, and an AI Assistant for smart business insights.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Assistant"],
      badgeText: "Featured Project",
      badgeColor: "#FF6B00",
      github: "https://github.com/dharmu689",
      live: "#",
    },
    {
      title: "GoldenBite — Food Delivery Web App",
      initials: "GB",
      bannerGradient: "from-blue-600 to-indigo-500",
      description: "A responsive food ordering web interface built with React JS and Bootstrap. Features reusable UI components, dynamic cart management, and clean component-based architecture.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      badgeText: "Web App",
      badgeColor: "#1E90FF",
      github: "https://github.com/dharmu689",
      live: "#",
    },
    {
      title: "Smart Stock Portfolio Optimizer",
      initials: "SS",
      bannerGradient: "from-yellow-500 to-rose-500",
      description: "A web-based stock portfolio optimizer using 0/1 Knapsack algorithm to maximize investment returns within budget. Features interactive UI for adding stocks and dynamically displaying optimized portfolio results.",
      tech: ["HTML", "CSS", "JavaScript", "DSA (Knapsack)"],
      badgeText: "Algorithms",
      badgeColor: "#FFB800",
      github: "https://github.com/dharmu689",
      live: "#",
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
    <section id="projects" className="py-20 px-6 bg-brandNavy text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandOrange to-brandBlue mt-3 rounded-full shadow-md shadow-brandBlue/35" />
          <p className="text-[#A0AEC0] mt-4 max-w-lg text-sm sm:text-base">
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
            // Alternate border highlight triggers
            const tagBorderClass =
              idx % 2 === 0
                ? 'border-brandBlue/20 hover:border-brandBlue/60'
                : 'border-brandOrange/20 hover:border-brandOrange/60'

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-[#0D1B2A] border border-brandBlue/10 hover:border-brandOrange hover:shadow-lg hover:shadow-brandOrange/5 rounded-2xl p-6 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Custom Gradient Initials Image Banner */}
                <div
                  className={`relative h-40 w-full rounded-xl bg-gradient-to-r ${project.bannerGradient} flex items-center justify-center overflow-hidden mb-6`}
                >
                  <span className="text-4xl font-extrabold tracking-widest text-white/95 font-mono select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
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
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brandOrange transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A0AEC0] mb-5 line-clamp-3 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2.5 py-1 text-[10px] font-medium text-white/95 bg-brandNavy border rounded-md transition-colors duration-300 ${tagBorderClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-brandBlue font-semibold hover:text-[#56b0ff] transition-colors duration-300"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-sm text-brandOrange font-semibold hover:text-[#ff8f40] transition-colors duration-300"
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
            className="px-8 py-3 rounded-lg border-2 border-brandOrange text-brandOrange font-semibold hover:bg-brandOrange hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brandOrange/5 hover:shadow-brandOrange/20"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
