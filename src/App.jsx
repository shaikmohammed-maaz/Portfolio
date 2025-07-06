import './App.css'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Aboutme from './components/Aboutme.jsx'
import FloatingIcons from './components/floatingIcons.jsx'
import SkillsSection from './components/Skills.jsx'
import ProjectsSection from './components/Projects.jsx'
import TimelineSection from './components/Experience.jsx'
import ContactSection from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
    <FloatingIcons />
    <NavBar />
    <Home  />
    <Aboutme />
    <SkillsSection />
    <ProjectsSection />
    <TimelineSection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default App
