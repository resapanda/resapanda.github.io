import './App.css'
import items from './data/items';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={ <OrderPage items={items}/>}></Route>
          <Route path="/register" element={ <RegistrationPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
