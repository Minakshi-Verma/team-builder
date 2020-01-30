import React, {useState} from 'react';
import MemberForm from './MemberForm';
import Member from './Member';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
    name: "Jack Hammer",
    age: 31,
    email: "jackhammer01@gmail.com",
    role: "UI developer"
    },
    {
      id:2,
    name: "Terry Mannings",
    age: 27,
    email: "terry_mannings@gmail.com",
    role: "Front-end engineer"
    },
    {
      id: 3,
    name: "Jon Phillips",
    age: 32,
    email: "phillips_phillips@yahoo.com",
    role: "Back-end engineer"

    },
    {
      name: "Alicia Siegal",
      age: 24,
      email: "siegal_alicia01@hotmail.com",
      role: "fullstack developer"
      }
    
  ])

 

  
  const addNewMember = member =>{
    const newMember ={
      // id:Date.now(),
      id: member.id, //React can use this id
      name: member.name,
      age: member.age,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember]);
  }



  return (
    <div className="App">
      <h1>My Team Members</h1>
      <MemberForm addNewMember= {addNewMember}/>
      <Member members ={members}/>
     
    </div>
  );
}

export default App;
