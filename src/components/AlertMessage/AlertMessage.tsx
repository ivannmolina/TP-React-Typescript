import { useState } from "react";
import AlertGenerator from '../AlertGenerator/AlertGenerator';
const AlertMessage = () => {
    //guarda el campo texto
  const [inputValue, setInputValue] = useState('');
  //guarda el mensaje del input 
  const [message , setMessage] = useState(''); }
  //muestra en el componente hijo lo ingresado en el campo de texto
  const [showAlert, setShowAlert] = useState(false);

  //si no es nulo el mensaje, se guarda se guarda el contenido en "message"
  //se renderiza el componente hijo 
   const handleClick = () => {
        if (inputValue.trim() !== '' ){
            setShowAlert(true);
            setMessage(inputValue);
        }else {
            setShowAlert(false);
        }
   }
    return (
        <div className='m-3'>
            <h2>Ejemplo 2 </h2>
            {/*Componente padre*/}
            <input type="text" value={inputValue} onChange ={(e)=>
                setInputValue(e.target.value)}/>
            <button onClick={handleClick}>Enviar</button>
            {/*Componente hijo*/}
            {showAlert && <AlertGenerator message={message}/>}
        </div>
    
  )
    }

export default AlertMessage