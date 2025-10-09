import { Button } from "primereact/button";
import '../styles/plantel.css';


function Plantel() {
  return (
      <section className='plantel'>
      <article className='plantel-container'>
        <div className='header-plantel'>
          <h1 style={{color: 'white'}}>PLANTEL:</h1>
        </div>
        <div className='player-selector'>
            <Button className='btn-player' label='jugador 1'/>
            <Button className='btn-player' label='jugador 2'/>
            <Button className='btn-player' label='jugador 3'/>
            <Button className='btn-player' label='jugador 4'/>
            <Button className='btn-player' label='jugador 5'/>
            <Button className='btn-player' label='jugador 6'/>
            <Button className='btn-player' label='jugador 7'/>
            <Button className='btn-player' label='jugador 9'/>
            <Button className='btn-player' label='jugador 10'/>
            <Button className='btn-player' label='jugador 11'/>
            <Button className='btn-player' label='jugador 12'/>
            <Button className='btn-player' label='jugador 13'/>
            <Button className='btn-player' label='jugador 14'/>
            <Button className='btn-player' label='jugador 15'/>
            <Button className='btn-player' label='jugador 16'/>
            <Button className='btn-player' label='jugador 17'/>
            <Button className='btn-player' label='jugador 18'/>
            <Button className='btn-player' label='jugador 19'/>
        </div>
      </article>
    </section>

  );
}

export default Plantel;
