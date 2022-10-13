import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  //return <h2>useReducer</h2>;
  //SETTING THE USESTATE NAME
  const [name, setName] = useState('');

  //Reducer function
  const reducer = (state, action)=>{
    if(action.type === 'TESTING'){
      return {
        ...state,
        people:data,
        isModalOpen:true,
        modalContent:"item added"};
    }
    //console.log(state, action);
    return state;

  }

  const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:"Hello World"
  }

  //USE REDUCER
  //When use reducer is invoked, we get the state value and the dispatch function
  const [state, dispatch] = useReducer(reducer, defaultState);
  //SETTING THE DATA  
  // const [people, setPeople]= useState(data);
  // const [showModal, setShowModal] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    //if name is true, show the modal else showModal true
    if(name){
      dispatch({type:'TESTING'});
      
    }
    else{
      
    }
  }

  return <>
  {/**Check if the show modal and the Modal is true, we return the Modal*/}
  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  <form onSubmit={handleSubmit} className='form'>
    <div>
      <input 
      type="text" 
      value={name} 
      onChange={(e)=>setName(e.target.value)}
      />
    </div>
    <button type='submit'>Add</button>
  </form>
  {/**Iterating through the list */}
  {state.people.map((person)=>{
    return (
      <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    )
  })}
  
  </>
};

export default Index;
