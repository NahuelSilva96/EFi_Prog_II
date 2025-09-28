import Carrusel from '../components/Carrusel';

function Inicio() {
    return (
        <main className="inicio container py-4">
        <section className="bienvenida text-center mb-5">
            <h1 className='align-center'>Bienvenidos a Periodistas FC</h1>
            <p>El club donde la pasión y la información se cruzan en la cancha.</p>
        </section>
        <Carrusel />
        </main>
    );
}

export default Inicio;
