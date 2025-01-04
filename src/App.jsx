import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"




const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="*" element={<Notfound  />} />
      
        {/* <Route path="/contactMe" element={<ContactMe />} /> */}
     
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
