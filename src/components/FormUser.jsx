import { number } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import  GithubUser from "./GithubUser";
function FormUser() {
  const [userName, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const changeUserName = (event) => {
    setUsername(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (userName && !userList.includes(userName)) {
      setUserList([...userList, userName]);

      setUsername("");
    }
  };
  useEffect(() => {
    console.log(userList);
  },[ userList])
 
  return (
    <>
    <form onSubmit={submit}>
      <input type="text" onChange={changeUserName} value={userName}></input>
      <button type="submit">submit</button>
    </form>
    {userList.map((user, index) => (
        <GithubUser key={index} username={user} />
      ))}
    </>
  );
}

export default FormUser;