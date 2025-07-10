import './App.css'
import items from './data/items';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutme" element={ <AboutMe items={items}/>}></Route>
          <Route path="/projects" element={ <Projects />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
