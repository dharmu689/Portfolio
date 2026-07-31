import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiGithub,
  SiTailwindcss,
  SiGit,
  SiDocker
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Preset positions for twinkling stars (purity compliant)
const STARS = [
  { id: 0, top: '12%', left: '15%', dur: '2.5s', delay: '0.5s' },
  { id: 1, top: '25%', left: '80%', dur: '3.2s', delay: '1.2s' },
  { id: 2, top: '38%', left: '45%', dur: '2.1s', delay: '0.1s' },
  { id: 3, top: '8%', left: '92%', dur: '3.7s', delay: '2.3s' },
  { id: 4, top: '48%', left: '18%', dur: '2.8s', delay: '0.7s' },
  { id: 5, top: '75%', left: '88%', dur: '3.1s', delay: '1.5s' },
  { id: 6, top: '60%', left: '32%', dur: '2.4s', delay: '0.3s' },
  { id: 7, top: '90%', left: '60%', dur: '3.6s', delay: '2.8s' },
  { id: 8, top: '18%', left: '68%', dur: '2.9s', delay: '1.1s' },
  { id: 9, top: '82%', left: '12%', dur: '3.3s', delay: '1.9s' },
  { id: 10, top: '50%', left: '85%', dur: '2.2s', delay: '0.4s' },
  { id: 11, top: '30%', left: '10%', dur: '3.8s', delay: '2.5s' },
  { id: 12, top: '68%', left: '52%', dur: '2.7s', delay: '0.8s' },
  { id: 13, top: '15%', left: '35%', dur: '3.4s', delay: '1.6s' },
  { id: 14, top: '85%', left: '40%', dur: '2.3s', delay: '0.2s' },
  { id: 15, top: '42%', left: '72%', dur: '3.9s', delay: '2.7s' },
  { id: 16, top: '55%', left: '95%', dur: '2.6s', delay: '0.9s' },
  { id: 17, top: '70%', left: '22%', dur: '3.5s', delay: '1.4s' },
  { id: 18, top: '28%', left: '58%', dur: '2.0s', delay: '0.0s' },
  { id: 19, top: '92%', left: '82%', dur: '3.0s', delay: '2.2s' },
  { id: 20, top: '5%', left: '50%', dur: '2.5s', delay: '1.3s' },
  { id: 21, top: '62%', left: '78%', dur: '3.3s', delay: '0.6s' },
  { id: 22, top: '20%', left: '28%', dur: '2.8s', delay: '2.0s' },
  { id: 23, top: '78%', left: '3%', dur: '3.1s', delay: '1.7s' },
  { id: 24, top: '45%', left: '60%', dur: '2.4s', delay: '0.5s' }
]

const TechOrbit = () => {

  const techIcons = [
    {
      name: 'React',
      icon: <SiReact />,
      color: '#3F72AF',
      style: { top: '5%', left: '30%' },
      delay: '0s'
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs />,
      color: '#112D4E',
      style: { top: '5%', left: '48%' },
      delay: '0.3s'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      color: '#112D4E',
      style: { top: '2%', left: '62%' },
      delay: '0.6s'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      color: '#3F72AF',
      style: { top: '5%', left: '74%' },
      delay: '0.9s'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: '#112D4E',
      style: { top: '8%', right: '12%' },
      delay: '1.2s'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      color: '#3F72AF',
      style: { top: '12%', right: '2%' },
      delay: '1.5s'
    },
    {
      name: 'C++',
      icon: <SiCplusplus />,
      color: '#112D4E',
      style: { top: '38%', left: '2%' },
      delay: '1.8s'
    },
    {
      name: 'SQL',
      icon: <SiMysql />,
      color: '#3F72AF',
      style: { top: '35%', right: '5%' },
      delay: '2.1s'
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      color: '#112D4E',
      style: { top: '55%', right: '2%' },
      delay: '2.4s'
    },
    {
      name: 'GitHub',
      icon: <SiGithub />,
      color: '#112D4E',
      style: { top: '62%', left: '2%' },
      delay: '2.7s'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      color: '#3F72AF',
      style: { bottom: '15%', left: '15%' },
      delay: '3.0s'
    },
    {
      name: 'Git',
      icon: <SiGit />,
      color: '#112D4E',
      style: { bottom: '10%', left: '38%' },
      delay: '3.3s'
    },
    {
      name: 'VS Code',
      icon: <VscVscode />,
      color: '#3F72AF',
      style: { bottom: '10%', left: '55%' },
      delay: '3.6s'
    },
    {
      name: 'Docker',
      icon: <SiDocker />,
      color: '#3F72AF',
      style: { bottom: '15%', right: '12%' },
      delay: '3.9s'
    }
  ]

  return (
    <div className="relative w-full h-full min-h-[550px] lg:h-screen flex items-center justify-center overflow-visible select-none">
      
      {/* BACKGROUND STARS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 rounded-full bg-brandNavy/20 animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              '--twinkle-dur': star.dur,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* 3D ORBIT RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1000px' }}>
        
        {/* Ring 1 (innermost) */}
        <div 
          className="absolute border border-dashed border-brandBlue/30 rounded-full animate-rotate-cw-12s flex items-center justify-center"
          style={{
            width: '320px',
            height: '120px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 1 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-brandBlue shadow-[0_0_10px_#3F72AF]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

        {/* Ring 2 (middle) */}
        <div 
          className="absolute border border-dashed border-brandNavy/25 rounded-full animate-rotate-cw-18s flex items-center justify-center"
          style={{
            width: '500px',
            height: '180px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 2 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-brandNavy shadow-[0_0_10px_#112D4E]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

        {/* Ring 3 (outermost) */}
        <div 
          className="absolute border border-dashed border-brandBlue/20 rounded-full animate-rotate-cw-25s flex items-center justify-center"
          style={{
            width: '680px',
            height: '240px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 3 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-brandBlue shadow-[0_0_10px_#3F72AF]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

      </div>

      {/* CENTER ELEMENT — DH689 Logo Planet */}
      <div 
        className="absolute w-[180px] h-[180px] rounded-full flex items-center justify-center z-10 bg-white border border-brandLight shadow-md"
      >
        {/* Ring 1 (outer) */}
        <div 
          className="absolute -inset-2 rounded-full border-2 border-brandBlue animate-rotate-cw-8s pointer-events-none"
          style={{
            boxShadow: '0 0 15px rgba(63, 114, 175, 0.2), inset 0 0 10px rgba(63, 114, 175, 0.1)'
          }}
        />

        {/* Ring 2 (inner) */}
        <div 
          className="absolute -inset-[3px] rounded-full border-2 border-brandNavy animate-rotate-ccw-6s pointer-events-none"
          style={{
            boxShadow: '0 0 10px rgba(17, 45, 78, 0.2)'
          }}
        />

        {/* Logo Text */}
        <span className="text-2xl font-extrabold tracking-wider font-mono">
          <span className="text-brandBlue">&lt;</span>
          <span className="text-brandNavy">DH</span>
          <span className="text-brandBlue">689</span>
          <span className="text-brandNavy">/&gt;</span>
        </span>
      </div>

      {/* TECH ICONS */}
      {techIcons.map((tech) => (
        <div
          key={tech.name}
          className="absolute flex flex-col items-center gap-1 cursor-pointer group z-20"
          style={{
            ...tech.style,
            animation: 'float 3s ease-in-out infinite',
            animationDelay: tech.delay
          }}
        >
          {/* Icon Circle */}
          <div 
            className="tech-icon-circle w-14 h-14 rounded-full bg-white border-[1.5px] border-brandLight flex items-center justify-center shadow-sm"
            style={{
              '--glow-color': tech.color,
              '--glow-color-dim': `${tech.color}20`
            }}
          >
            <span className="text-2xl text-brandNavy">
              {tech.icon}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-brandNavy/60 font-semibold tracking-wide group-hover:text-brandBlue transition-colors duration-200">
            {tech.name}
          </span>
        </div>
      ))}

    </div>
  )
}

export default TechOrbit
