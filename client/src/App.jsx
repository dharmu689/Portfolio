import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brandBg text-brandNavy font-sans selection:bg-brandBlue/30 selection:text-brandNavy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
