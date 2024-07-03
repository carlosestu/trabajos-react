import Welcome from "./Welcome";
import { useState } from "react";
function InteractiveWelcome() {
    const [name, setName] = useState("");
    let actualizarH1 = (event) => setName(event.target.value);
    return <div>
    <input id="input" value={name} placeholder="write your name here" onChange={actualizarH1}></input>
    <Welcome name={name} />
    </div>;
}
export default InteractiveWelcome;