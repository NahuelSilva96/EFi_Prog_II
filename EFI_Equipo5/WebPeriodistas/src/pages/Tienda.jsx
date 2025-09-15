import Producto from '../components/Producto';
import camiseta from '../assets/IMG/camiseta.png';
import buzo from '../assets/IMG/short.png';

function Tienda() {
    return (
        <main className="tienda">
        <Producto
            imagen={camiseta}
            nombre="Camiseta 2025"
            precio="$12.000"
        />
        <Producto
            imagen={buzo}
            nombre="Buzo Entrenamiento"
            precio="$9.500"
        />
        </main>
    );
}

export default Tienda;
