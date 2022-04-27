import { useState, useEffect } from 'react'

export default function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const res  = await fetch("https://randomuser.me/api/");
      const userData = await res.json();
      const [item] = userData.results
      setUsers(item);
      console.log(users)
    };
    fetchUsers();
  },[users]);

  // const useUsers = users.map((user) => {
  //   return <div>
  //     <h3>user.name</h3>
  //     {/* <h4>user.</h4> */}
  //     {/* <p></p> */}


  //   </div>
  // })

    return (
      <div>
        {users && <div>{users.name.first}</div>}
      </div>
    )
}
