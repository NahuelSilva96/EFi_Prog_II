import React from "react";
import NoticiaCard from "../components/NoticiaCard";
import '../styles/noticias.css'


function Noticias() {
  const noticias = [
    { id: 1, titulo: "Goleada en la liga", descripcion: "El equipo ganó 5 a 0", imagen: "/img/joni16.jpeg", fecha: 'Sábado 1 de noviembre de 2025' },
    { id: 2, titulo: "Nuevo refuerzo", descripcion: "Se incorpora el delantero", imagen: "/img/charla.jpeg", fecha:'Sábado 25 de octubre de 2025' },
    { id: 3, titulo: "Partido suspendido", descripcion: "El equipo disputará una fecha suspendida esta semana", imagen: "/img/charla1.jpeg", fecha:'Sábado 25 de octubre de 2025' },
    { id: 4, titulo: "Victoria en penales", descripcion: "Triunfo emocionante tras tanda de penales", imagen: "/img/charla2.jpeg", fecha:'Sábado 11 de octubre de 2025' },
    { id: 5, titulo: "Final furioso", descripcion: "Se jugó, se raspó y casi se van a las manos", imagen: "/img/tecnico.jpeg", fecha:'Sábado 4 de octubre de 2025' },
  ];

  
  return (
          <div className="noticias-container">
            <h1 className="titulo-pag-noticias">NOTICIAS</h1>
            {noticias.map((n) => (
            <NoticiaCard 
            key={n.id}
            titulo={n.titulo}
            descripcion={n.descripcion}
            imagen={n.imagen}
            fecha={n.fecha} 
            />  
            ))}
          </div>
          );
}

export default Noticias;
