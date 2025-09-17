import Carrusel from '../components/Carrusel';

function Inicio() {
    return (
        <main className="inicio container">
        <section className="bienvenida">
            <h1 className='align-center'>Bienvenidos a Periodistas FC</h1>
            <p>El club donde la pasión y la información se cruzan en la cancha.</p>
        </section>
        <Carrusel />
        </main>
    );
}

export default Inicio;
