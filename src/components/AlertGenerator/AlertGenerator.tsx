import {Alert} from "react-bootstrap";

type AlertGeneratorProps = {
  message : String;
}
const AlertGenerator = (message:AlertGeneratorProps) => {
  return (
    <Alert variant="success" className="mt-2 w-25">
        <Alert.Heading>Mensaje recibido</Alert.Heading>
        <p>
           {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator
