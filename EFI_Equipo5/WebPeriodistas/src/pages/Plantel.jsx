import React, { useState } from "react";
import "../styles/plantel.css";

function Plantel() {
  const jugadores = [
    { id: 1, nombre: "Agustín Alonso", img: "/img/amigos.jpeg", posicion: "Arquero", numero: 1, zona: "arquero" },
    { id: 2, nombre: "Ema Loza", img: "/img/jugadores/loza.jpg", posicion: "Defensor", numero: 2, zona: "defensores" },
    { id: 3, nombre: "Juan Roumec", img: "/img/jugadores/roumec.jpg", posicion: "Defensor", numero: 3, zona: "defensores" },
    { id: 4, nombre: "Gonzalo Ganame", img: "/img/jugadores/ganame.jpg", posicion: "Defensor", numero: 4, zona: "defensores" },
    { id: 5, nombre: "Franco Garello", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 5, zona: "mediocampistas" },
    { id: 6, nombre: "Angel Melgarejo", img: "/img/jugadores/garello.jpg", posicion: "Defensor", numero: 6, zona: "defensores" },
    { id: 7, nombre: "Gaston Perez", img: "/img/jugadores/garello.jpg", posicion: "Delantero", numero: 7, zona: "delanteros" },
    { id: 8, nombre: "Marcelo Prieto", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 8, zona: "mediocampistas" },
    { id: 9, nombre: "Nicolas Rivarola", img: "/img/jugadores/garello.jpg", posicion: "Delantero", numero: 9, zona: "delanteros" },
    { id: 10, nombre: "Diego Amaya", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 10, zona: "mediocampistas" },
    { id: 11, nombre: "Franco Stefanini", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 11, zona: "mediocampistas" },
    { id: 12, nombre: "Gastón Galliano", img: "/img/jugadores/garello.jpg", posicion: "Arquero", numero: 12, zona: "arquero" },
    { id: 13, nombre: "Luciano Rodriguez", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 13, zona: "mediocampistas" },
    { id: 14, nombre: "Ignacio Berardo", img: "/img/jugadores/garello.jpg", posicion: "Delantero", numero: 14, zona: "delanteros" },
    { id: 15, nombre: "Federico Ganzer", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 15, zona: "mediocampistas" },
    { id: 16, nombre: "Jonatan Villavicencio", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 16, zona: "mediocampistas" },
    { id: 17, nombre: "Agustín Pressaco", img: "/img/jugadores/garello.jpg", posicion: "Defensor", numero: 17, zona: "defensores" },
    { id: 18, nombre: "Dario Taverna", img: "/img/jugadores/garello.jpg", posicion: "Defensor", numero: 18, zona: "defensores" },
    { id: 19, nombre: "Franco Amin", img: "/img/jugadores/garello.jpg", posicion: "Mediocampista", numero: 19, zona: "mediocampistas" },
    { id: 20, nombre: "Mayco Gonzalez", img: "/img/jugadores/garello.jpg", posicion: "Delantero", numero: 20, zona: "delanteros" },
    { id: 21, nombre: "Denis Eber", img: "/img/jugadores/garello.jpg", posicion: "Defensor", numero: 21, zona: "defensores" },
    { id: 22, nombre: "Gero Marino", img: "/img/jugadores/garello.jpg", posicion: "Defensor", numero: 22, zona: "defensores" },
  ];

  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(jugadores[0]);

  return (
    <section className="plantel">
      <article className="plantel-container">
        <div className="header-plantel">
          <h1>JUGADORES</h1>
        </div>

        <div className="player-selector">
          {jugadores.map((jugador) => (
            <div
              key={jugador.id}
              className={`player-card ${jugadorSeleccionado.id === jugador.id ? "active" : ""}`}
              onClick={() => setJugadorSeleccionado(jugador)}
            >
              <img src={jugador.img} alt={jugador.nombre} className="player-img" />
              <p>{jugador.nombre}</p>
            </div>
          ))}
        </div>

        <div className="cancha-section">
          <div className="cancha">
            <img src="/img/cancha.jpeg" alt="Cancha" className="cancha-fondo" />

            <div className="formacion">
              <div className="delanteros">
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "delanteros" ? "resaltado" : ""}`}>10</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "delanteros" ? "resaltado" : ""}`}>9</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "delanteros" ? "resaltado" : ""}`}>11</div>
              </div>
              <div className="mediocampistas">
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>8</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>5</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>7</div>
              </div>
              <div className="defensores">
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "defensores" ? "resaltado" : ""}`}>2</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "defensores" ? "resaltado" : ""}`}>3</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "defensores" ? "resaltado" : ""}`}>4</div>
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "defensores" ? "resaltado" : ""}`}>6</div>
              </div>
              <div className="arquero">
                <div className={`jugador-pos ${jugadorSeleccionado.zona === "arquero" ? "resaltado" : ""}`}>1</div>
              </div>
            </div>
          </div>

          <div className="detalle-jugador">
            <img src={jugadorSeleccionado.img} alt={jugadorSeleccionado.nombre} />
            <h2>{jugadorSeleccionado.nombre}</h2>
            <p><strong>Posición:</strong> {jugadorSeleccionado.posicion}</p>
            <p><strong>Número:</strong> {jugadorSeleccionado.numero}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Plantel;
