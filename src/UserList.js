import React, { useState , useEffect } from "react";
import axios from 'axios';

const UserList = () => {
const [users,setUsers] = useState([])

useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
            console.log(res)
            setUsers(res.data)
        })

},[])

return(
        <div>
            <h1>List of users</h1>
          <ul>
              { users.map(user => (
                    <li key ={user.id}> {user.name}    </li>  
              ))
              }
          </ul>    
        </div>
);

}

export default UserList;