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
    const onLogin = (event) => {
        event.preventDefault(); 
        setSubmittedData(formData);
      };
      const reset = (event) => {
        event.preventDefault(); 
        setSubmittedData(defaultData);
        setFormData(defaultData);
      }
    return <div>
    <h1>Login!</h1>
    <input type="text" id="userName" placeholder="userName" name="userName" onChange={actualizarInfo} value={formData.userName}></input>
    <input type="password" id="password" placeholder="password" name="password" onChange={actualizarInfo} value={formData.password}></input>
    <p>remember me<input type="checkbox" id="checkbox" name="remember" onChange={actualizarInfo} checked={formData.remember}></input></p>
    {formData.userName !== "" && formData.password !== "" ? (
        <button onClick={onLogin}>login here</button>
    ) : null}
    <button id="reset" onClick={reset}>Clear Form</button>
    {submittedData.userName !== "" && submittedData.password !== "" && (
        <LoginData Data={submittedData} />
      )}
    </div>
}
export default Login;