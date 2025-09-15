function Sorteo() {
    return (
        <main className="sorteo">
        <h2>Sorteo Exclusivo</h2>
        <p>Participá por camisetas oficiales, entradas VIP y más.</p>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <button type="submit">Participar</button>
        </form>
        </main>
    );
}

export default Sorteo;
