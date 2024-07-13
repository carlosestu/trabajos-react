import React from 'react'
import { useState, useEffect } from 'react';
import IndexMessage from './IndexMessage';
import { Link, Outlet, useParams } from 'react-router-dom';

function GithubUserList() {
    const [users, setUsers ] = useState([])
    const { userName } = useParams();

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('https://api.github.com/users');
            if (!response.ok) {
              throw new Error('Error fetching data');
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error('Error, algo salio mal');
          }
        };
    
        fetchUsers();
      }, []);
  return (
        <div>
          <h2>Lista de usuarios de GitHub</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>
         <Outlet /> 
        </div>
      );
    };
    
    
  



export default GithubUserList