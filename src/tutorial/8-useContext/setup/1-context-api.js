import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//CONTEXT API
//Helps you to access different functions and items from different components by using the use Context
//creating a context
const PersonContext = React.createContext();
//two components, the provider and the consumer
//provider-works as the distributor

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //setting a person context provider that wraps our whole application hence accessing the elements throughout the application
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API / Use Context</h3>
      <List/>
    </PersonContext.Provider>
  );
};

const List = () => {
  //accessing people using the use context
  const {people} = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  //accessing the person context provider
  //this helps access all the values without the prop drilling
  //we can also access the functions
  const {removePerson} = useContext(PersonContext);
  // console.log(data);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
