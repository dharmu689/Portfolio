import { useMemo } from 'react'
import { motion } from 'framer-motion'
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

const TechOrbit = () => {
  // Generate random twinkling stars once
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 92 + 4}%`,
      left: `${Math.random() * 92 + 4}%`,
      dur: `${Math.random() * 2 + 2}s`,
      delay: `${Math.random() * 3}s`
    }))
  }, [])

  const techIcons = [
    {
      name: 'React',
      icon: <SiReact />,
      color: '#61DAFB',
      style: { top: '5%', left: '30%' },
      delay: '0s'
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs />,
      color: '#68A063',
      style: { top: '5%', left: '48%' },
      delay: '0.3s'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      color: '#ffffff',
      style: { top: '2%', left: '62%' },
      delay: '0.6s'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      color: '#4DB33D',
      style: { top: '5%', left: '74%' },
      delay: '0.9s'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: '#F7DF1E',
      style: { top: '8%', right: '12%' },
      delay: '1.2s'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      color: '#3178C6',
      style: { top: '12%', right: '2%' },
      delay: '1.5s'
    },
    {
      name: 'C++',
      icon: <SiCplusplus />,
      color: '#9C33FF',
      style: { top: '38%', left: '2%' },
      delay: '1.8s'
    },
    {
      name: 'SQL',
      icon: <SiMysql />,
      color: '#1E90FF',
      style: { top: '35%', right: '5%' },
      delay: '2.1s'
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      color: '#ffffff',
      style: { top: '55%', right: '2%' },
      delay: '2.4s'
    },
    {
      name: 'GitHub',
      icon: <SiGithub />,
      color: '#ffffff',
      style: { top: '62%', left: '2%' },
      delay: '2.7s'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      color: '#38BDF8',
      style: { bottom: '15%', left: '15%' },
      delay: '3.0s'
    },
    {
      name: 'Git',
      icon: <SiGit />,
      color: '#F05032',
      style: { bottom: '10%', left: '38%' },
      delay: '3.3s'
    },
    {
      name: 'VS Code',
      icon: <VscVscode />,
      color: '#007ACC',
      style: { bottom: '10%', left: '55%' },
      delay: '3.6s'
    },
    {
      name: 'Docker',
      icon: <SiDocker />,
      color: '#2496ED',
      style: { bottom: '15%', right: '12%' },
      delay: '3.9s'
    }
  ]

  return (
    <div className="relative w-full h-full min-h-[550px] lg:h-screen flex items-center justify-center overflow-visible select-none">
      
      {/* BACKGROUND STARS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 rounded-full bg-white animate-twinkle"
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
          className="absolute border border-dashed border-[#FF6B00]/30 rounded-full animate-rotate-cw-12s flex items-center justify-center"
          style={{
            width: '320px',
            height: '120px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 1 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

        {/* Ring 2 (middle) */}
        <div 
          className="absolute border border-dashed border-[#1E90FF]/25 rounded-full animate-rotate-cw-18s flex items-center justify-center"
          style={{
            width: '500px',
            height: '180px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 2 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1E90FF] shadow-[0_0_10px_#1E90FF]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

        {/* Ring 3 (outermost) */}
        <div 
          className="absolute border border-dashed border-[#FFB800]/20 rounded-full animate-rotate-cw-25s flex items-center justify-center"
          style={{
            width: '680px',
            height: '240px',
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Dot on Ring 3 */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFB800] shadow-[0_0_10px_#FFB800]" 
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

      </div>

      {/* CENTER ELEMENT — DH689 Logo Planet */}
      <div 
        className="absolute w-[180px] h-[180px] rounded-full flex items-center justify-center z-10"
        style={{
          background: 'radial-gradient(circle, #0A0F1E 40%, #0D1B2A 100%)'
        }}
      >
        {/* Ring 1 (outer) */}
        <div 
          className="absolute -inset-2 rounded-full border-2 border-[#1E90FF] animate-rotate-cw-8s pointer-events-none"
          style={{
            boxShadow: '0 0 30px #1E90FF, 0 0 60px rgba(30, 144, 255, 0.25), inset 0 0 30px rgba(30, 144, 255, 0.12)'
          }}
        />

        {/* Ring 2 (inner) */}
        <div 
          className="absolute -inset-[3px] rounded-full border-2 border-[#FF6B00] animate-rotate-ccw-6s pointer-events-none"
          style={{
            boxShadow: '0 0 20px #FF6B00, 0 0 40px rgba(255, 107, 0, 0.25)'
          }}
        />

        {/* Logo Text */}
        <span className="text-2xl font-extrabold tracking-wider font-mono">
          <span className="text-[#FF6B00]">&lt;</span>
          <span className="text-white">DH</span>
          <span className="text-[#FF6B00]">689</span>
          <span className="text-[#1E90FF]">/&gt;</span>
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
            className="tech-icon-circle w-14 h-14 rounded-full bg-[#0D1B2A] border-[1.5px] flex items-center justify-center"
            style={{
              '--glow-color': tech.color,
              '--glow-color-dim': `${tech.color}40`
            }}
          >
            <span className="text-2xl">
              {tech.icon}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-[#94A3B8] font-medium tracking-wide group-hover:text-white transition-colors duration-200">
            {tech.name}
          </span>
        </div>
      ))}

    </div>
  )
}

export default TechOrbit
