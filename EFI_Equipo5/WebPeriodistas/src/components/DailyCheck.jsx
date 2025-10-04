import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function DailyCheck() {

    return(
        <Card title="Daily Check" className="daily-check">
          <p>Registro diario de actividades o check.</p>
          <Button label="Completar" icon="pi pi-check" />
        </Card>
    )

}

export default DailyCheck