import AboutMe from "./section/AboutMe"
import ContactMe from "./section/ContactMe"
import Hero from "./section/Hero"
import Skill from "./section/Skill"
const Home = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto">
        <Hero />
        <Skill />
        <AboutMe />
        <ContactMe />
    </main>
  )
}

export default Home