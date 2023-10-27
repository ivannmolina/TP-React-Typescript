import {ProgressBar} from "react-bootstrap";
 //indica el tipo de props y tipo de dato que el componente hijo puede recibir
 type DangerBarProps={
    value:number;
 };
 //el hijo tiene argumentos de tipo DangeBarProps
const DangerBar = ({value}: DangerBarProps) =>{
    //segun el valor recibido del padre se muetra un diferente color
    const getVariant = (value:number) => {
        if(value < 30){
            return 'success';
        }else if (value < 60){
            return 'warning';
        }else{
            return 'danger';    
        }
    };
    return (
        <ProgressBar animated now = {value} variant ={getVariant(value)}/> 
    )
} 