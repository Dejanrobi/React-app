import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//handle submit function

const ControlledInputs = () => {

  //setting the first name and email's usestate
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  //Adding the inputs dynamically to an array
  const [people, setPeople] = useState([]);

  const handleSubmit=(e)=>{
    //the event object is used to prevent defaults (the default submission of a form)
    //console.log(firstName, email);
    //checking whether there is an input in the forms
    e.preventDefault();
    if(firstName && email){
      //you should add a unique key in each person's object e.g. id
      const person={id:new Date().getTime().toString(), firstName, email};
      //adding the person's object to the people's array
      //we use set people, then pass the array inside, we spread the objects within the array and then add the current object into the array
      console.log(person);
      setPeople((people)=>{
        return [...people, person]
      })
      //after adding the inputs to the array, we reset the forms into empty
      setFirstName('');
      setEmail('');
      //console.log(person);
    }else{
      console.log("Empty values")
    }  
  }

  return <>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        {/*htmlfor is used to pass the id of the form to be labelled*/}
        <label htmlFor="firstName">Name : </label>
        {/**The Value Property is added to reference the entered value in the form */}
        {/**The onchange property is used to change the initial value in the first name usestate into the curent entered value */}
        {/**The event object in the onchange is used to look for the event target then the value to help make changes in the useSate */}
        {/**The Value and onChange property are all used to setup controlled inputs*/}
        <input 
        type="text" 
        id='firstName' 
        name='firstName' 
       
        value={firstName}
        onChange={(e)=> setFirstName(
          e.target.value
        )}
        
        />
      </div>

      <div className="form-control">
        {/*htmlfor is used to pass the id of the form to be labelled*/}
        <label htmlFor="email">Email : </label>
        <input 
        type="text" 
        id='email' 
        name='email' 
        value={email} 
        onChange={(e)=>setEmail(
          e.target.value
        )}
        />
      </div>
      <button type='submit'>Add Person</button>
    </form>
    {/**DISPLAYING THE PEOPLE THAT WE HAVE IN OUR ARRAY*/}
    {
      people.map((person)=>{
        //destructing the person object
        const{id, firstName, email} = person;
        {/**Setting the unique key when rendering each item */}
        return <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }
  </article>
  </>
  
};

export default ControlledInputs;
