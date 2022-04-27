// import Users from './Components/Users'
import { useState,useEffect  } from 'react';
import './Components/Users.css';

function App() {
 const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then((response) => response.json())
    .then((data) => setUsers(data.results));
  }, [

  ]) ;

 

    return (
      <ul>{users && users.map((user, idx)=> {
        return (
          <div key={idx} className="main-container">
            <ul>
            <h2 className="first__Name">{user.name.first}</h2>
              <p className="gender__line">{user.gender}</p>
              <address>
                <h1 className="user__Name">{user.login.username}</h1>
                <img src={user.picture.thumbnail} className="user__Img"></img>
              </address>

            </ul>

          </div>
        )
          
      })}</ul>
      
      
      
      )
      
}

export default App;
 

// const fetchUsers = async () => {
//   const res  = await fetch("https://randomuser.me/api/");
//   const userData = await res.json();
//   const [item] = userData.results
//   setUsers(item);
//   console.log(users)
// };
// fetchUsers();