import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/IMG/plantel_foto.png';
import slide2 from '../assets/IMG/partido_foto.png';
import slide3 from '../assets/IMG/hinchas.png';

const images = [slide1, slide2, slide3];

function Carrusel() {

  return (
    <Carousel className="carru">
      <Carousel.Item>
        <img className='d-block w-100' src={slide1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={slide2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={slide3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrusel;
