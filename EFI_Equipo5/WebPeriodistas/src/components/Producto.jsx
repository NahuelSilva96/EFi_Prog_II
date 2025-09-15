function Producto({ imagen, nombre, precio }) {
    return (
        <div className="producto">
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <button>Comprar</button>
        </div>
    );
}

export default Producto;
