// import { User } from './User';
import './User.css'
import React, { useState, useEffect } from 'react';
import { TUser } from '../interfaces/TUser';

export function UserList(): any {
    let [ users, setUsers ] = useState<TUser[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/users/", {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => setUsers(response))
        .catch(error => console.log(error));
    }, [users]);
    return(  
    <div>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Useremail</th>
            </tr>
            </thead>
            <tbody>
            {users?.map((user) => {
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>;
            })}
            </tbody>
        </table>
    </div>);
}