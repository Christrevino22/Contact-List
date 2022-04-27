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
        return (
          <div key={idx} className="main-container">
            <ul>
                <img src={user.picture.thumbnail} className="user__Img"></img>
            <h2 className="first__Name">{user.name.first}</h2>
              <p className="gender__line">{user.gender}</p>
              <address>
                <h1 className="user__Name">{user.login.username}</h1>
              </address>

            </ul>

          </div>
        )
          
      })}</ul>
      
      
      
      )
      
};
