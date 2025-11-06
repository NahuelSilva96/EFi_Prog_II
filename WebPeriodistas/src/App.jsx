import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import Noticias from './pages/Noticias';
import Club from './pages/Club';
import Plantel from './pages/Plantel';
import Fixture from './pages/Fixture';
import './styles/main.css';
import Store from './store/AppStore';
import { CartProvider } from './store/components/CartContext';

function App() {
  const location = useLocation();
  const isStore = location.pathname.startsWith('/tienda');

  return (
    <div className="fondo">
      { !isStore && <Navbar />}  

      {location.pathname !== "/" && !isStore && <div style={{ height: '165px', backgroundColor: 'black' }}></div>}
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/plantel" element={<Plantel />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/club" element={<Club />} />
          <Route path="/tienda/*" element={
            <CartProvider>
            <Store />
            </CartProvider>
          }/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
