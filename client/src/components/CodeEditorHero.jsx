import { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'

const codeLines = [
  {
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'developer ', type: 'variable' },
      { text: '= ', type: 'operator' },
      { text: '{', type: 'punctuation' }
    ]
  },
  {
    tokens: [
      { text: '  name', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Dharmu Kumar"', type: 'string' },
      { text: ',', type: 'punctuation' }
    ]
  },
  {
    tokens: [
      { text: '  role', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"MERN Stack Developer"', type: 'string' },
      { text: ',', type: 'punctuation' }
    ]
  },
  {
    tokens: [
      { text: '  dsaSolved', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"500+"', type: 'string' },
      { text: ',', type: 'punctuation' }
    ]
  },
  {
    tokens: [
      { text: '  status', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Open to opportunities"', type: 'string' }
    ]
  },
  {
    tokens: [
      { text: '};', type: 'punctuation' }
    ]
  }
]

const CodeEditorHero = () => {
  const [visibleCount, setVisibleCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate total length of all characters in the code representation
  const totalLength = codeLines.reduce((acc, line) => {
    return acc + line.tokens.reduce((tokenAcc, token) => tokenAcc + token.text.length, 0)
  }, 0)

  // Handle typing interval and reset loops
  useEffect(() => {
    if (visibleCount < totalLength) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timer)
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleCount(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [visibleCount, totalLength])

  // Process visible tokens and determine where to place the cursor
  let globalIndex = 0
  let cursorRendered = false

  const renderedLines = codeLines.map((line, lineIdx) => {
    const lineTokens = []

    line.tokens.forEach((token, tokenIdx) => {
      const tokenLen = token.text.length
      const startIdx = globalIndex

      if (visibleCount >= startIdx) {
        const visibleInToken = Math.min(tokenLen, visibleCount - startIdx)
        const text = token.text.substring(0, visibleInToken)
        
        let showCursor = false
        if (!cursorRendered && (startIdx + visibleInToken === visibleCount) && (visibleCount < totalLength)) {
          showCursor = true
          cursorRendered = true
        }

        lineTokens.push({
          text,
          type: token.type,
          showCursor,
          key: `${lineIdx}-${tokenIdx}`
        })
      }
      globalIndex += tokenLen
    })

    // Handle end of loop cursor display
    let showEndCursor = false
    if (!cursorRendered && (visibleCount === totalLength) && (lineIdx === codeLines.length - 1)) {
      showEndCursor = true
      cursorRendered = true
    }

    return {
      tokens: lineTokens,
      showEndCursor,
    }
  })

  // Token colors resembling a One Dark Pro VS Code theme
  const tokenColors = {
    keyword: 'text-[#C678DD]',     // Pink/Purple
    variable: 'text-[#E5C07B]',    // Yellowish variable/constant names
    operator: 'text-[#ABB2BF]',    // White/Gray operators
    punctuation: 'text-[#ABB2BF]', // White/Gray punctuation
    property: 'text-[#61AFEF]',    // Light Blue keys
    string: 'text-[#D19A66]',      // Orange/Yellow strings
  }

  return (
    <div className="w-full relative flex justify-center items-center py-6">
      {/* Background Soft Glow mixing Orange (#FF6B00) and Blue (#1E90FF) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-tr from-[#FF6B00]/15 via-transparent to-[#1E90FF]/15 blur-3xl opacity-60 animate-pulse" />
      </div>

      {/* Tilt Component wrapper */}
      <div className="w-full max-w-[95%] md:max-w-full lg:max-w-[90%] relative z-10">
        <Tilt
          tiltMaxAngleX={isMobile ? 4 : 10}
          tiltMaxAngleY={isMobile ? 4 : 10}
          perspective={1000}
          scale={isMobile ? 1.0 : 1.02}
          transitionSpeed={1500}
          glareEnable={!isMobile}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          className="w-full"
        >
          {/* Code Window Container with drop-shadow-2xl */}
          <div className="w-full rounded-2xl bg-[#1e1e24] border border-white/10 shadow-2xl drop-shadow-2xl overflow-hidden flex flex-col font-mono text-left select-none">
            {/* Top Navigation Bar */}
            <div className="h-10 bg-[#16161a] border-b border-white/5 flex items-center justify-between px-4">
              {/* Mac Window Controls */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* JS Filename Tab */}
              <div className="flex items-center space-x-2 bg-[#1e1e24] px-4 py-1.5 rounded-t-lg border-t border-l border-r border-white/5 text-xs text-gray-400">
                <span className="text-yellow-500 font-bold">JS</span>
                <span>developer.js</span>
              </div>

              {/* Balance spacer */}
              <div className="w-12" />
            </div>

            {/* Editor Text Area */}
            <div className="p-4 sm:p-6 bg-[#1e1e24] flex flex-col space-y-1">
              {renderedLines.map((line, lineIdx) => (
                <div key={lineIdx} className="flex">
                  {/* Line Numbers */}
                  <span className="w-8 text-right text-gray-500 font-mono text-xs pr-4 select-none">
                    {lineIdx + 1}
                  </span>
                  
                  {/* Code Line */}
                  <div className="font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed flex flex-wrap text-[#ABB2BF] flex-1 whitespace-pre">
                    {line.tokens.map((token) => (
                      <span key={token.key} className={tokenColors[token.type] || 'text-[#ABB2BF]'}>
                        {token.text}
                        {token.showCursor && (
                          <span className="inline-block w-[2px] h-[1.1em] align-middle bg-[#1E90FF] ml-0.5 animate-pulse select-none" />
                        )}
                      </span>
                    ))}
                    {line.showEndCursor && (
                      <span className="inline-block w-[2px] h-[1.1em] align-middle bg-[#1E90FF] ml-0.5 animate-pulse select-none" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default CodeEditorHero
