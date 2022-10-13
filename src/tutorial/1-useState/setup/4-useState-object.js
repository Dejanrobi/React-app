import React, { useState } from 'react';

const UseStateObject = () => {

  //creating a useState Hook
  const [person, setPerson]= useState({
    name:"Peter", 
    age:24, 
    message:"I am the Headboy of this school"
  })

  //changing specific data items using the use State Hooks
  

  // const [name, setName]=useState("Peter");
  // const [age, setAge]=useState(30);
  // const [message, setMessage]=useState("I am the Man in the House");

  //change message function
  const changeMessage=()=>{
    //use the spread operator and only change a particular item
    setPerson({...person, message:"Hello World"});
    //setName("Dejan Robi");
  }

  //change age function
  const changeAge=()=>{
    setPerson({...person, age:30});
  }

  //change Name Function
  const changeName=()=>{
    setPerson({...person, name:"Johnston"});
  }

  //console.log(person);
  return <>
    <h3>{person.name}</h3>
    <h4>{person.age}</h4>
    <h5>{person.message}</h5>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    <button className='btn' onClick={changeAge}>Change Age</button>
    <button className='btn' onClick={changeName}>Change Name</button>
  </>;
};

export default UseStateObject;
