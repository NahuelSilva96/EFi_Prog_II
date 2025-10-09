import React from 'react';
import { Button } from 'primereact/button';

function CarruselNoticias() { 
    const noticias = [
        { id: 1, titulo: "Goleada en la liga", descripcion: "El equipo gano 5 a 0", imagen: "/img/joni16.jpeg" },
        { id: 2, titulo: "Nuevo refuerzo", descripcion: "Se incorpora el delantero", imagen: "/img/charla.jpeg" },
        { id: 3, titulo: "Partido Suspendido", descripcion: "El equipo disputara una fecha suspendida esta semana", imagen: "/img/charla1.jpeg" },
        { id: 4, titulo: "Victoria en penales", descripcion: "Triunfo emocionante tras tanda de penales", imagen: "/img/charla2.jpeg" },
        { id: 5, titulo: "Final furioso", descripcion: "Se jugo, se raspo y casi se van a las mano", imagen: "/img/tecnico.jpeg" }
        
        ];
    
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 }
    ];

        return(
            <div>
                <div className="noticias-carrusel-constante">
                    <div className="noticias-track">
                        {[...noticias, ...noticias].map((noticia, index) => (
                            <div className="card_noticias" key={index}>
                                <img src={noticia.imagen} alt={noticia.titulo} />
                                <div className="card_noticias_content">
                                    <p className="card_noticias_title">{noticia.titulo}</p>
                                    <p className="card_noticias_description">{noticia.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mas-noticias'>
                    <Button label='Mas Noticas' className='btn-hacete-socio' icon='pi pi-chevron-right' />
                  </div>
                </div>
            </div>
            );
}
export default CarruselNoticias