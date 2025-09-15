import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Noticias from './pages/Noticias';
import Plantel from './pages/Plantel';
import Fixture from './pages/Fixture';
import Sorteo from './pages/Sorteo';
import Tienda from './pages/Tienda';
import './styles/main.css';

function App() {
  return (
    <div className="fondo">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/plantel" element={<Plantel />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/sorteo" element={<Sorteo />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
