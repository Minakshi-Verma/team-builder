import React from 'react';

const Members = (props) =>{
    console.log("I am member props", props)


    return(
        <div>
            {props.members.map(member=>(
                <div member = {member}key = {member.id}>
                <h3>Name: {member.name}</h3>
                <p><strong>Age:</strong>: {member.age}</p>
                <p><strong>Email:</strong>: {member.email}</p>
                <p><strong>Role:</strong> {member.role}</p> </div>
            ))}

        </div>
    )
}
export default Members;