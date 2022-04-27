import { useState, useEffect } from 'react'
import './Users.css'


export function UsersList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then((response) => response.json())
    .then((data) => setUsers(data.results));
  }, []) ;

 

    return (
      <ul>{users && users.map((user, idx)=> {
        const {name, gender, location}
        return (
          <div key={idx}>
            <ul>
              <h3>{name}</h3>
              {console.log(user)}

            </ul>
          </div>
        )
          
      })}</ul>
      );
      
};
