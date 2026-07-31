import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaTerminal, FaBrain } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-xl" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      icon: <FaServer className="text-xl" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io", "GraphQL"]
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-xl" />,
      skills: ["MongoDB", "MySQL", "Firebase", "Prisma", "Mongoose"]
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools className="text-xl" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify", "Docker"]
    },
    {
      category: "Programming Languages",
      icon: <FaTerminal className="text-xl" />,
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      category: "CS Fundamentals",
      icon: <FaBrain className="text-xl" />,
      skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "SDLC"]
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 px-6 bg-brandLight text-brandNavy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-4 text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-[2px] bg-brandBlue/45 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brandNavy">Skills</h2>
            <div className="w-12 h-[2px] bg-brandBlue/45 rounded-full" />
          </div>
          <p className="text-brandNavy/80 mt-4 max-w-lg text-sm sm:text-base font-medium">
            Technologies I use to develop and deliver impactful solutions.
          </p>
        </motion.div>

        {/* Main Categories Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto mt-12 bg-white border border-brandLight/60 rounded-[24px] p-6 sm:p-8 shadow-sm shadow-brandBlue/5"
        >
          <div className="divide-y divide-brandLight/60">
            {skillCategories.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                variants={rowVariants}
                className="flex flex-col md:flex-row md:items-center py-6 gap-4 first:pt-2 last:pb-2"
              >
                {/* Left Column: Category Label & Icon */}
                <div className="flex items-center space-x-4 md:w-72 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brandLight/45 flex items-center justify-center text-brandBlue shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-brandNavy">
                    {group.category}
                  </h3>
                </div>

                {/* Right Column: Skills Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="px-4 py-1.5 bg-brandBg border border-brandLight/50 text-xs sm:text-sm font-semibold text-brandNavy rounded-full transition-all duration-300 hover:border-brandBlue/50 hover:bg-white cursor-default select-none shadow-sm shadow-brandBlue/2"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
