import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  //FOR MULTIPLE INPUTS, IT WOULD BE BETTER TO HAVE ONE VALUE FOR USE STATE AND ONE FUNCTION FOR ONCHANGE
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  //setting a person's object instead of multiple properties
  const [person, setPerson] = useState({firstName:'', email:'', age:''})
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values');
  //   }
  // };

  //HADLE CHANGE FUNCTION 
  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    //Using dynamic properties
    setPerson({...person, [name]:value})
  }

  //RE-WRITING HANDLE SUBMIT FROM SCRATCH
  const handleSubmit=(e)=>{
    e.preventDefault();
    //properties you can get from an input are the name and the value.
    //Obtaining the name and the value

    //checking whether there are values in our form
    if(person.firstName && person.email && person.age){
      //adding an id to the person object
      const newPerson = {...person, id:new Date().getTime().toString()}
      //adding people into the people's array
      setPeople([...people, newPerson]);
      //after adding people into the people's array, we the person into an empty object
      setPerson({firstName:'', email:'', age:''})
    }
    
  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              //setting the onchange
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age} // the value in the in the form is set to person.age
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age} = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
