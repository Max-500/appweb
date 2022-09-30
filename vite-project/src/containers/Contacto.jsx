import "../assets/styles/InputDN.css"
import Email from "../components/InputEmail";
import Telefono from "../components/InputTelefono";

function InputET() {
  return (
    <>
      <div className="nombreC">
        <Email></Email>
        <Telefono></Telefono>
      </div>
    </>
  );
}

export default InputET;
