function Turno() {
    return ( <>
    <div className="separador">
          <label>Seleccione el turno al que entraras:</label>
          <br />
          <div className="separador">
          <input type="radio" /><label>Matutino</label>
          <input type="radio" /><label>Vespertino</label>
          </div>
    </div>
    </> );
}

export default Turno;