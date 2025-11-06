import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { Timeline } from "primereact/timeline";
import { Avatar } from "primereact/avatar";
import "../styles/club.css";

export default function Club() {
    const eventos = [
        {
            year: "2015",
            img: "/img/logo.png",
            title: "Fundación",
            text: "Se funda el club. Tras años de pensar en crear un equipo competitivo donde el buen juego y la diversión no pueden faltar."
        },
        {
            year: "2023",
            img: "/img/copa.jpg",
            title: "Primer campeonato",
            text: "El club obtiene su primer título."
        },
        {
            year: "2024",
            img: "/img/descenso.jpg",
            title: "Descenso",
            text: "Tras una campaña lamentable, el club se va al descenso."
        },
    ];

    const comision = [
        { nombre: "Juan Pérez", cargo: "Presidente", foto: "https://via.placeholder.com/150" },
        { nombre: "María López", cargo: "Vicepresidenta", foto: "https://via.placeholder.com/150" },
        { nombre: "Carlos Díaz", cargo: "Secretario General", foto: "https://via.placeholder.com/150" },
        { nombre: "Lucía Gómez", cargo: "Tesorera", foto: "https://via.placeholder.com/150" },
    ];

    const customizedMarker = (item) => (
        <span className="timeline-marker"></span>
    );

    const customizedContent = (item) => (
        <Card className="timeline-card">
            <div className="timeline-content">
                <div className="timeline-img">
                    <Image src={item.img} alt={item.title} imageStyle={{ borderRadius: "10px", width: "100%" }} preview />
                </div>
                <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <h4>{item.year}</h4>
                    <p>{item.text}</p>
                </div>
            </div>
        </Card>
    );

    return (
        <div className="club-page">
            {/* Hero / Portada */}
            <section className="hero-club">
                <div className="hero-overlay">
                    <h1>Historia del Club</h1>
                    <p>Pasión, esfuerzo y comunidad desde nuestros orígenes.</p>
                </div>
            </section>

            {/* Historia */}
            <section className="historia-section">
                <div className="historia-container">
                    <div className="historia-texto">
                        <h2>Nuestros orígenes</h2>
                        <p>
                            El Club fue fundado en 2010 por un grupo de vecinos apasionados por el deporte. 
                            Con esfuerzo y compromiso, levantaron la primera cancha en terrenos cedidos por la comunidad.
                        </p>
                        <p>
                            A lo largo de los años, el club se consolidó como un espacio de encuentro, con logros deportivos 
                            y una profunda conexión con su gente.
                        </p>
                    </div>
                    <div className="historia-imagen">
                        <Image
                            src="../img/hinchas.png"
                            alt="Foto histórica"
                            preview
                            imageStyle={{ borderRadius: "10px", width: "100%" }}
                        />
                    </div>
                </div>
            </section>

            <Divider align="center">
                <h2>Momentos destacados</h2>
            </Divider>

            {/* Línea de tiempo */}
            <section className="timeline-section">
                {eventos.map((item, i) => (
                <div className="timeline-item" key={i}>
                    <div className="timeline-marker">{item.year}</div>
                    <div className="timeline-card">
                        <div className="timeline-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="timeline-text">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
                ))}
            </section>

            <Divider align="center">
                <h2>Comisión Directiva</h2>
            </Divider>

            {/* Comisión directiva */}
            <section className="comision-section">
                <div className="comision-grid">
                    {comision.map((m, i) => (
                        <Card key={i} className="miembro-card" footer={<p>{m.cargo}</p>}>
                            <Avatar
                                image={m.foto}
                                size="xlarge"
                                shape="circle"
                                className="miembro-avatar"
                            />
                            <h3>{m.nombre}</h3>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}