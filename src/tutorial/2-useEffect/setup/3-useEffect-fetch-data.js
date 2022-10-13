import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  //useEffect runs once the component is rendered.

  //fetching the users using async await
  const getUsers = async()=>{
    const response = await fetch(url);
    const users = await response.json();
    //when we set users, we trigger re-render and useEffect will run once re-render is triggered
    //this will again run get Users. We will hence find ourselves in an infinte loop
    setUsers(users);
    //console.log(users);
  };

  //Setting a use Effect Function 
  //Async await cannot be used in useEffect because useEffect cannot return a promise
  //hence we use a second parameter to make the use effect to run only once during the first render and not the re-render
  useEffect(()=>{
    getUsers();
  },[]);
  return <>
    <h3>Github Users</h3>
    <ul className='users'>
      {users.map((user)=>{
        const {id,login,avatar_url,html_url} = user;
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </div>          
        </li>
      })}
    </ul>

  </>;
};

export default UseEffectFetchData;
