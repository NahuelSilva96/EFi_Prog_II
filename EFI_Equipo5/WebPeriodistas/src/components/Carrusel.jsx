import { useState, useEffect } from 'react';
import slide1 from '../assets/IMG/plantel_foto.png';
import slide2 from '../assets/IMG/partido_foto.png';
import slide3 from '../assets/IMG/hinchas.png';

const images = [slide1, slide2, slide3];

function Carrusel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="carrusel">
        {images.map((img, i) => (
            <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
            <img src={img} alt={`Slide ${i + 1}`} />
            </div>
        ))}
        <button className="prev" onClick={() => setCurrent((current - 1 + images.length) % images.length)}>‹</button>
        <button className="next" onClick={() => setCurrent((current + 1) % images.length)}>›</button>
        </section>
    );
}

export default Carrusel;
