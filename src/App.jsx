import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Quote from './pages/Quote'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import "aos/dist/aos.css"

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/quote" element={<Quote />}/>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
