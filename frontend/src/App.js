import react, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users,setUsers] = useState([]);
  async function fetchData() {
    let response = await axios(
      `http://localhost:5000/users`
    );
    let user = response.data;
    setUsers(user);
  }
  useEffect(() => {
	//fetchData();
	axios.get('http://localhost:5000/users')
		.then(res => {
			setUsers(res.data)
		})
		.catch(err => console.log(err))
  },[]);
  return (
    <div className="App">
      Users List
	  <ul>
		{users.length && users.map((user) => (
			<UserList key={user._id} user={user}/>
		))}
	  </ul>
    </div>
  );
}

function UserList({user}) {
    return (
		<li key={user._id}>
			{user.username}
		</li>
	);
}

export default App;
