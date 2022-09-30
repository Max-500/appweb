import "../assets/styles/InputDN.css";
import FechaNacimiento from "../components/InputFechaNacimiento";
import Edad from "../components/InputEdad";

function InputDN() {
  return (
    <>
    <div className="nombreC">
      <FechaNacimiento></FechaNacimiento>
      <Edad></Edad>
    </div>
    </>
  );
}

export default InputDN;
