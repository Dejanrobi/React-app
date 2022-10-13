//importing react to create any component
import React from 'react';

//importing the data from the array
import { data } from '../../../data';

//Creating a component( start with a capital letter: named in camell case.)
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  //useState is a hook function in which you pass the initial variable. It then returns a variable with the current state value
  const removeItem=(id)=>{
    //filtering the id that matches the one to be deleted
    let newPeople = people.filter((person)=>person.id !== id);
    setPeople(newPeople);
  }
  
  //instead of using React. Fragment in the return you can use the shortcut <> </>
  return <>
  {
    people.map((person)=>{
      //extracting the data items from the object
      const {id, name} = person;
      return(
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={()=>removeItem(id)}>remove</button>
        </div>
      )
    })
  }

  <button className='btn' onClick={()=>setPeople([])}>clear items</button> 
  </>
};

export default UseStateArray;
