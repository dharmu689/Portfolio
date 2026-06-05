import { motion } from 'framer-motion'
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPaperPlane,
} from 'react-icons/fa'
import {
  SiCplusplus,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiPostman,
  SiCloudinary,
  SiRazorpay,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { DiVisualstudio } from 'react-icons/di'

const Skills = () => {
  const skillCategories = [
    {
      category: "💻 Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-3xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E] text-3xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-3xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-3xl" /> },
      ],
    },
    {
      category: "⚛️ Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB] text-3xl animate-[spin_12s_linear_infinite]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-3xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-3xl" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC] text-3xl" /> },
      ],
    },
    {
      category: "🔧 Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-white text-3xl" /> },
        { name: "REST APIs", icon: <TbApi className="text-brandBlue text-3xl" /> },
      ],
    },
    {
      category: "🗄️ Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-3xl" /> },
        { name: "SQL", icon: <FaDatabase className="text-[#00758F] text-3xl" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57] text-3xl" /> },
      ],
    },
    {
      category: "🛠️ Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-3xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-3xl" /> },
        { name: "VS Code", icon: <DiVisualstudio className="text-[#007ACC] text-3xl" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5] text-3xl" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-[#0B72E7] text-3xl" /> },
      ],
    },
    {
      category: "☁️ Cloud & Others",
      skills: [
        { name: "AWS", icon: <FaAws className="text-[#FF9900] text-3xl" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000] text-3xl bg-white rounded-full p-0.5" /> },
        { name: "Nodemailer", icon: <FaPaperPlane className="text-[#1E90FF] text-3xl" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 px-6 bg-[#0D1B2A] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandOrange to-brandBlue mt-3 rounded-full shadow-md shadow-brandBlue/35" />
          <p className="text-[#A0AEC0] mt-4 max-w-lg text-sm sm:text-base">
            A representation of my technical toolkit, languages, database management, and development frameworks.
          </p>
        </motion.div>

        {/* Categories List */}
        <div className="space-y-12">
          {skillCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              {/* Category Label */}
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-bold text-brandYellow border-l-4 border-brandYellow pl-3 leading-none select-none">
                  {group.category}
                </h3>
                <div className="flex-grow h-px bg-white/10" />
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
              >
                {group.skills.map((skill, skillIdx) => {
                  // Alternate borders (blue/orange) based on total offset index
                  const globalIdx = groupIdx * 4 + skillIdx
                  const isBlueBorder = globalIdx % 2 === 0
                  const borderClasses = isBlueBorder
                    ? 'border-brandBlue/30 hover:border-brandBlue hover:shadow-brandBlue/15'
                    : 'border-brandOrange/30 hover:border-brandOrange hover:shadow-brandOrange/15'

                  return (
                    <motion.div
                      key={skillIdx}
                      variants={cardVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`h-28 flex flex-col items-center justify-center p-4 bg-brandNavy border rounded-xl shadow-md transition-all duration-300 ${borderClasses}`}
                    >
                      <div className="mb-2.5 transition-transform duration-300 hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/95">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
