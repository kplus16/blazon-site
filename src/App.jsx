import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Quote from './pages/Quote'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/quote" element={<Quote />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
