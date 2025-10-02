import { Carousel } from 'primereact/carousel';

function Carrusel() {
  const images = [
    { src: '/carru1.jpeg', alt: 'Jugador 1' },
    { src: '/carru2.jpeg', alt: 'Jugador 2' },
    { src: '/carru3.jpeg', alt: 'Técnico' },
  ];

  const carruselTemplate = (item) => (
    <img
      src={item.src}
      alt={item.alt}
      style={{
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );

  return (
    <div className='carru'>
      <Carousel
        value={images}
        itemTemplate={carruselTemplate}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={3000}
        showIndicators={false}
        showNavigators={false}
      />
    </div>
  );
}

export default Carrusel;
