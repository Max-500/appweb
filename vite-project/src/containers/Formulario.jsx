import "../assets/styles/Formulario.css";

import InputTN from "./Nombre"
import InputDN from "./Edad-Fecha"
import InputET from "./Contacto";
import InputRPS from "./Datos";

function Formulario() {
  return (
    <>
      <div className="formulario">
        <h1>Formato Para Registrar un Nuevo Estudiante: </h1>
        <InputTN></InputTN>
        <InputDN></InputDN>
        <InputET></InputET>
        <InputRPS></InputRPS>
      </div>
    </>
  );
}

export default Formulario;
