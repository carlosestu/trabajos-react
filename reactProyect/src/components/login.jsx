import { useState } from "react";
import LoginData from "./loginData";

function Login() {
    const [defaultData, setDefaultData] = useState({
        userName: "",
        password: "",
        remember: false
    });
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        remember: false
    });
    const [submittedData, setSubmittedData] = useState({
        userName: "",
        password: "",
        remember: "",
      });
   
    const actualizarInfo = (event) => {
       const { name, type, value, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
          }));
    };
      const reset = (event) => {
        event.preventDefault(); 
        setSubmittedData(defaultData);
        setFormData(defaultData);
      }
      const HandleLogin = (event) => {
        event.preventDefault(); 
        setSubmittedData(formData);
      }
    return <form onSubmit={HandleLogin}>
    <h1>Login!</h1>
    <input type="text" id="userName" placeholder="userName" name="userName" onChange={actualizarInfo} value={formData.userName}></input>
    <input type="password" id="password" placeholder="password" name="password" onChange={actualizarInfo} value={formData.password}></input>
    <p>remember me<input type="checkbox" id="checkbox" name="remember" onChange={actualizarInfo} checked={formData.remember}></input></p>
    {formData.userName !== "" && formData.password !== "" ? (
        <button type="submit">submit</button>
    ) : null}
    <button id="reset" onClick={reset}>Clear Form</button>
    {submittedData.userName !== "" && submittedData.password !== "" && (
        <LoginData Data={submittedData} />
      )}
      
    </form>
}
export default Login;

//para evitar el comportamiento por defecto del formulario, y que no se recargue la pagina al hacer submit, se usa "event.preventDefault()" esto garantizara que el form no haga nada inesperado.