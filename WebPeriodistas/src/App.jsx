import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import Noticias from './pages/Noticias';
import Club from './pages/Club';
import Plantel from './pages/Plantel';
import Fixture from './pages/Fixture';
import HaceteSocio from './pages/HaceteSocio';
import Socios from './pages/Socios';
import './styles/main.css';
import Store from './store/AppStore';
import { CartProvider } from './store/components/CartContext';

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
          <Route path="/hacete-socio" element={<HaceteSocio />} />
          <Route path="/socios" element={<Socios />} />
          <Route path="/tienda/*" element={
            <CartProvider>
            <Store />
            </CartProvider>
          }/>
        </Routes>
        {!isStore &&  <Footer />}
    </div>
  );
}

export default App;
