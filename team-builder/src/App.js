import React, {useState} from 'react';
import MemberForm from './MemberForm';
import Members from './Members';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
    name: "Jack Hammer",
    age: 31,
    email: "jack01@gmail.com",
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
    email: "phillips10@yahoo.com",
    role: "Back-end engineer"

    },
    {
      name: "Alicia Siegal",
      age: 24,
      email: "siegal_alicia@hotmail.com",
      role: "fullstack developer"
      }
    
  ])

 

  
  const addNewMember = member =>{
    const newMember ={
      // id:Date.now(),
      // id: member.id,
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
      <Members members ={members}/>
     
    </div>
  );
}

export default App;
