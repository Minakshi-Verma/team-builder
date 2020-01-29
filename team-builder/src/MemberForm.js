import React, {useState} from 'react';


const MemberForm = (props) =>{
    console.log(" I am member form props", props)

    const [member, setMember] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
        role: ""

    })
 //onchange handler to control inputs
    const handleChanges = e =>{
setMember({ ...member, [e.target.name]:e.target.value});
console.log(member)
    };

    
//submitform to control preventdefault

const submitForm= e =>{
    e.preventDefault();
    props.addNewMember(member);
    setMember({name: "", age: "", email: "", role:""})
}
    return(
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
            <input 
            id = "name"
            type = "text"
            name = "name"
            onChange ={handleChanges}
            placeholder = "name"
            value ={member.name}
            />

            <label htmlFor = "name">Age</label>
            <input 
            id = "age"
            type = "number"
            name = "age"
            onChange ={handleChanges}
            placeholder = "age"
            value ={member.age}
            />

            <label htmlFor = "email">Email</label>
            <input 
            id = "email"
            type = "email"
            name = "email"
            onChange ={handleChanges}
            placeholder = "email"
            value ={member.email}
            />

            <label htmlFor = "role">Role</label>
            <input 
            id = "role"
            type = "text"
            name = "role"
            onChange ={handleChanges}
            placeholder = "role"
            value ={member.role}
            />
            <button type ="submit">Add New Member</button>
        </form>
    )
}

export default MemberForm;