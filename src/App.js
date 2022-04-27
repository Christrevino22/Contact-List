import { UsersList } from './Components/Users';


function App() {
  return (
    <div className='app'>
      
      <UsersList />

    </div>

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