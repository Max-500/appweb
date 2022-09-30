import Password from "../components/InputPassword";
import Submit from "../components/InputSubmit";
import Turno from "../components/InputTurno";

function InputRPS() {
    return ( 
        <>
        <div className="InputDN">
        <Turno></Turno>
        <Password></Password>
        <Submit></Submit>
      </div>
        </>
     );
}

export default InputRPS;