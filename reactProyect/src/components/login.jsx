import { useState } from "react";

function Login() {
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
    const enviarInfo = (event) => {
        event.preventDefault(); 
        setSubmittedData(formData);
      };
    return <div>
    <h1>Login!</h1>
    <input type="text" id="userName" placeholder="userName" name="userName" onChange={actualizarInfo} value={formData.userName}></input>
    <input type="password" id="password" placeholder="password" name="password" onChange={actualizarInfo} value={formData.password}></input>
    <p>remember me<input type="checkbox" id="checkbox" name="remember" onChange={actualizarInfo} checked={formData.remember}></input></p>
    <button onClick={enviarInfo}>Send Data here</button>
    <div id="info">
    <h1>This is your sended info!</h1>
    <h2>username = {submittedData.userName}</h2>
    <h3>password ={submittedData.password}</h3>
    <h4>remember me ={submittedData.remember.toString()}</h4>
    </div>
    </div>
}
export default Login;