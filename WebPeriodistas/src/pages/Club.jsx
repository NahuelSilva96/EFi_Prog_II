import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { Timeline } from "primereact/timeline";
import { Avatar } from "primereact/avatar";
import "../styles/club.css";

export default function Club() {
    const eventos = [
        { year: "2010", title: "Fundación", text: "Se funda el club y se inaugura la primera cancha." },
        { year: "2015", title: "Primer campeonato", text: "El club obtiene su primer título regional." },
        { year: "2020", title: "Nueva sede", text: "Se inaugura la sede social con instalaciones modernas." },
        { year: "2025", title: "Modernización", text: "Renovación del estadio y expansión institucional." },
    ];

    const comision = [
        { nombre: "Juan Pérez", cargo: "Presidente", foto: "https://via.placeholder.com/150" },
        { nombre: "María López", cargo: "Vicepresidenta", foto: "https://via.placeholder.com/150" },
        { nombre: "Carlos Díaz", cargo: "Secretario General", foto: "https://via.placeholder.com/150" },
        { nombre: "Lucía Gómez", cargo: "Tesorera", foto: "https://via.placeholder.com/150" },
    ];

    return (
    <div className="club-page">
        {/* Hero / Portada */}
        <section className="hero-club">
        <div className="hero-overlay">
            <img src="/img/fondo.png" alt="Fondo" className="fondo" />
            <h1>Historia del Club</h1>
            <p>Pasión, esfuerzo y comunidad desde nuestros orígenes.</p>
        </div>
        </section>

        {/* Historia */}
        <section className="historia-section">
        <div className="historia-container">
            <div className="historia-texto">
            <h2>Nuestros orígenes</h2>
            <p>El Club fue fundado en 2010 por un grupo de vecinos apasionados por el deporte. 
                Con esfuerzo y compromiso, levantaron la primera cancha en terrenos cedidos por la comunidad.
            </p>
            <p>A lo largo de los años, el club se consolidó como un espacio de encuentro, con logros deportivos 
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
        <Timeline
            value={eventos}
            opposite={(item) => <small className="timeline-year">{item.year}</small>}
            content={(item) => (
            <Card title={item.title} subTitle={item.text} className="timeline-card"></Card>
            )}
        />
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
