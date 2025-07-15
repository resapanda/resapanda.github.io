import './App.css'
import items from './data/items';
import Navigation from './components/Navigation';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutme" element={ <AboutMe items={items}/>}></Route>
          <Route path="/projects" element={ <Projects />}></Route>
          <Route path="/contact" element={ <Contact />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
