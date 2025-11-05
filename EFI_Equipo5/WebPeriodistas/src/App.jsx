import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import Noticias from './pages/Noticias';
import Club from './pages/Club';
import Plantel from './pages/Plantel';
import Fixture from './pages/Fixture';
import Club from './pages/Equipo';
import './styles/main.css';

import Store from './pages/store/AppStore';

        

function App() {
  const location = useLocation();
  const isStore = location.pathname.startsWith('/tienda');

  return (
    <div className="fondo">
      { !isStore && <Navbar />}  
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/plantel" element={<Plantel />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/club" element={<Club />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/club" element={<Club />} />
        </Routes>
        {!isStore &&  <Footer />}
    </div>
  );
}

export default App;
