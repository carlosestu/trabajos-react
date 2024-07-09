import React from "react";
function LoginData({data}) {
    return (
    <div id="info">;
    <h1>This is your sent info!</h1>
    <h2>username = {data.username}</h2>
    <h3>password ={data.password}</h3>
    <h4>remember me ={data.remember.toString()}</h4>
    </div> )
};
export default LoginData;


