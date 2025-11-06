import React, { useState } from "react";
import "../styles/plantel.css";

function Plantel() {
  const jugadores = [
    { id: 1, nombre: "Agustín Alonso", img: "/img/Alonso.jpg", posicion: "Arquero", numero: 1, zona: "arquero" },
    { id: 2, nombre: "Ema Loza", img: "/img/Loza.jpg", posicion: "Defensor", numero: 2, zona: "defensores" },
    { id: 3, nombre: "Juan Roumec", img: "/img/hombre-negro.png", posicion: "Defensor", numero: 3, zona: "defensores" },
    { id: 4, nombre: "Gonzalo Ganame", img: "/img/Ganame.jpg", posicion: "Defensor", numero: 4, zona: "defensores" },
    { id: 5, nombre: "Franco Garello", img: "/img/Garello.jpg", posicion: "Mediocampista", numero: 5, zona: "mediocampistas" },
    { id: 6, nombre: "Angel Melgarejo", img: "/img/Melgarejo.jpg", posicion: "Defensor", numero: 6, zona: "defensores" },
    { id: 7, nombre: "Gaston Perez", img: "/img/Perez.jpg", posicion: "Delantero", numero: 7, zona: "delanteros" },
    { id: 8, nombre: "Marcelo Prieto", img: "/img/hombre-negro.png", posicion: "Mediocampista", numero: 8, zona: "mediocampistas" },
    { id: 9, nombre: "Nicolas Rivarola", img: "/img/hombre-negro.png", posicion: "Delantero", numero: 9, zona: "delanteros" },
    { id: 10, nombre: "Diego Amaya", img: "/img/Amaya.jpg", posicion: "Mediocampista", numero: 10, zona: "mediocampistas" },
    { id: 11, nombre: "Franco Stefanini", img: "/img/Stefanini.jpg", posicion: "Mediocampista", numero: 11, zona: "mediocampistas" },
    { id: 12, nombre: "Gastón Galliano", img: "/img/Galliano.jpg", posicion: "Arquero", numero: 12, zona: "arquero" },
    { id: 13, nombre: "Luciano Rodriguez", img: "/img/hombre-negro.png", posicion: "Mediocampista", numero: 13, zona: "mediocampistas" },
    { id: 14, nombre: "Ignacio Berardo", img: "/img/Berardo.jpg", posicion: "Delantero", numero: 14, zona: "delanteros" },
    { id: 15, nombre: "Federico Ganzer", img: "/img/Ganzer.jpg", posicion: "Mediocampista", numero: 15, zona: "mediocampistas" },
    { id: 16, nombre: "Jonatan Villavicencio", img: "/img/Villavicencio.jpg", posicion: "Mediocampista", numero: 16, zona: "mediocampistas" },
    { id: 17, nombre: "Agustín Pressaco", img: "/img/Pressaco.jpg", posicion: "Defensor", numero: 17, zona: "defensores" },
    { id: 18, nombre: "Dario Taverna", img: "/img/Taverna.jpg", posicion: "Defensor", numero: 18, zona: "defensores" },
    { id: 19, nombre: "Franco Amin", img: "/img/Amin.jpg", posicion: "Mediocampista", numero: 19, zona: "mediocampistas" },
    { id: 20, nombre: "Mayco Gonzalez", img: "/img/Gonzalez.jpg", posicion: "Delantero", numero: 20, zona: "delanteros" },
    { id: 21, nombre: "Denis Eber", img: "/img/hombre-negro.png", posicion: "Defensor", numero: 21, zona: "defensores" },
    { id: 22, nombre: "Gero Marino", img: "/img/hombre-negro.png", posicion: "Defensor", numero: 22, zona: "defensores" },
  ];

  const cuerpoTecnico = [
    { id: 23, nombre: "José Luis Debernardi", img: "/img/DT.jpg", posicion: "Director Técnico" },
    { id: 24, nombre: "Martín Coy", img: "/img/Coy.jpg", posicion: "Ayudante de Campo" },
    { id: 25, nombre: "Belén Llompart", img: "/img/Belen.jpeg", posicion: "Kinesióloga" },
  ];

  const [seleccionado, setSeleccionado] = useState(jugadores[0]);

  return (
    <section className="plantel">
      <article className="plantel-container">
        <div className="header-plantel">
          <h1>JUGADORES</h1>
        </div>

        {/* Lista de jugadores */}
        <div className="player-selector">
          {jugadores.map((jugador) => (
            <div
              key={jugador.id}
              className={`player-card ${seleccionado.id === jugador.id ? "active" : ""}`}
              onClick={() => setSeleccionado(jugador)}
            >
              <img src={jugador.img} alt={jugador.nombre} className="player-img" />
              <p>{jugador.nombre}</p>
            </div>
          ))}
        </div>

        {/* Sección del cuerpo técnico */}
        <div className="header-plantel tecnico">
          <h1>CUERPO TÉCNICO</h1>
        </div>

        <div className="cuerpo-tecnico">
          {cuerpoTecnico.map((miembro) => (
            <div
              key={miembro.id}
              className={`player-card ${seleccionado.id === miembro.id ? "active" : ""}`}
              onClick={() => setSeleccionado(miembro)}
            >
              <img src={miembro.img} alt={miembro.nombre} className="player-img" />
              <p>{miembro.nombre}</p>
              <small>{miembro.posicion}</small>
            </div>
          ))}
        </div>

        {/* Cancha y detalle */}
        <div className="cancha-section">
          <div className="cancha">
            <img src="/img/cancha.jpeg" alt="Cancha" className="cancha-fondo" />

            <div className="formacion">
              <div className="delanteros">
                <div className={`jugador-pos ${seleccionado.zona === "delanteros" ? "resaltado" : ""}`}>10</div>
                <div className={`jugador-pos ${seleccionado.zona === "delanteros" ? "resaltado" : ""}`}>9</div>
                <div className={`jugador-pos ${seleccionado.zona === "delanteros" ? "resaltado" : ""}`}>11</div>
              </div>
              <div className="mediocampistas">
                <div className={`jugador-pos ${seleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>8</div>
                <div className={`jugador-pos ${seleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>5</div>
                <div className={`jugador-pos ${seleccionado.zona === "mediocampistas" ? "resaltado" : ""}`}>7</div>
              </div>
              <div className="defensores">
                <div className={`jugador-pos ${seleccionado.zona === "defensores" ? "resaltado" : ""}`}>2</div>
                <div className={`jugador-pos ${seleccionado.zona === "defensores" ? "resaltado" : ""}`}>3</div>
                <div className={`jugador-pos ${seleccionado.zona === "defensores" ? "resaltado" : ""}`}>4</div>
                <div className={`jugador-pos ${seleccionado.zona === "defensores" ? "resaltado" : ""}`}>6</div>
              </div>
              <div className="arquero">
                <div className={`jugador-pos ${seleccionado.zona === "arquero" ? "resaltado" : ""}`}>1</div>
              </div>
            </div>
          </div>

          <section className="detalle-section">
            <div className="detalle-jugador">
              <img src={seleccionado.img} alt={seleccionado.nombre} />
              <h2>{seleccionado.nombre}</h2>
              <p><strong>Posición:</strong> {seleccionado.posicion}</p>
              {seleccionado.numero && <p><strong>Número:</strong> {seleccionado.numero}</p>}
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}

export default Plantel;
