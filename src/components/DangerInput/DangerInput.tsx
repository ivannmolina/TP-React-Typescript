import { useState } from "react";
import {Form} from 'react-bootstrap';
import DangerBar   from '../DangerBar/DangerBar';


const DangerInput = () => {
    //variable que guarda el valor elegido
    const [value, setvalue] = useState(0);
    //setValue actualiza el valor de value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(Number(event.target.value)); 
    }
    return (
        <div className="m-3 w-50">
            <h2>Ejemplo 1</h2>
            {/*Componente padre*/}
            <Form.Range value = {value} onChange={handleChange}/>
            {/*Componente hijo*/ }
            <DangerBar value={value}/>

        </div>
    )
}

export default DangerInput