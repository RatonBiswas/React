import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const UseUseEffectBasic = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h2>Github Users</h2>
      <ul className='users'>
        {users.map((user)=>{
            const {id,login,avatar_url,html_url} = user
            return <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                </div>
            </li>
        })}
      </ul>
    </section>
  );
};

export default UseUseEffectBasic;
