import React, { useState } from 'react';
import {data} from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  //setting people using a useState
  const [people, setPeople] = useState(data);

  //A function to delete items from the array
  const removePerson=(id)=>{
    setPeople((people)=>{
      //return the person into the array if person.id is not equal to the passed id
      return people.filter((person)=>person.id!== id)
    })

  }
  return (
    <section>
      <h3>Prop Drilling</h3>
      {/**Setting a people prop and rendering the list component */}
      {/**A function can also be set as a prop */}
      {/**setting remove person as a prop */}
      <List people={people} removePerson={removePerson}/>
    </section>
  );  
};

//setting a list component
const List=({people, removePerson})=>{
  return (
    <>
      {
      people.map((person)=>{
        //return a single person component
        //using the spread operator on person array, this indicates that you can add any item into the array
        //passing the prop again
        return <SinglePerson key={person.id} {...person}
        removePerson={removePerson}/>
      })}
    </>
  );  
};

//setting a single person component
//Alays use Pascal casing for react components and not camel casing
//we can also look for remove person
const SinglePerson=({id, name, removePerson})=>{
  const handleRemove=()=>{
    removePerson(id)
  }
  return(
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={handleRemove}>remove</button>
    </div>
  ) 

}

export default PropDrilling;
