import { useState, useRef, useEffect } from "react";
import LoginData from "./loginData";

function UncontrolledLogin() {
    const formRef = useRef(null);
    const [loginInfo, setLoginInfo] = useState(null);
   const HandleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const username = formData.get("userName");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";
    setLoginInfo({ username, password, remember });
   }
    
    return <div><form ref={formRef} onSubmit={HandleLogin}>
    <h1>Login!</h1>
    <input type="text" id="userName" placeholder="userName" name="userName" ></input>
    <input type="password" id="password" placeholder="password" name="password"></input>
    <p>remember me<input type="checkbox" id="checkbox" name="remember"></input></p>
   <button type="submit">submit</button>
    </form>
    {loginInfo && <LoginData data={loginInfo} />}
    </div>
}
export default UncontrolledLogin;

//las ventajas de usar uncontrolled components es que el codigo es algo mas simple y manejas directamente el formulario en si, 
//pero ahi llega la desventaja, y es que de la otra manera accediendo directamente a cada input, tienes mas control sobre cada parte del formulario,
// y si no es muy complejo es mas util hacerlo asi