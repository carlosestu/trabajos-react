import React from "react";
function LoginData({Data}) {
    return (
    <div id="info">;
    <h1>This is your sent info!</h1>
    <h2>username = {Data.userName}</h2>
    <h3>password ={Data.password}</h3>
    <h4>remember me ={Data.remember.toString()}</h4>
    </div> )
};
export default LoginData;


