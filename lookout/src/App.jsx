import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from "./components/About"
import Events from "./components/Events"
import Gallery from './components/Gallery'
import Services from './components/Services';
import Footer from './components/Footer'


function App() {


  return (

    <Router>
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </main>
      <Footer />
    </div>
  </Router>
      
  );
};

export default App
