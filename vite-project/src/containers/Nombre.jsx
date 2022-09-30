import "../assets/styles/InputTextN.css";
import Nombre from "../components/InputNombre";
import Apellido from "../components/InputApellido";

function FirstLastName() {
  return (
    <>
      <div className="nombreC">
        <Nombre></Nombre>
        <Apellido></Apellido>
      </div>
    </>
  );
}

export default FirstLastName;
