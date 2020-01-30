import React from 'react';

const Members = (props) =>{
    console.log("I am member props", props)


    return(
        <div class= "membercards">
            {props.members.map(member=>(
                <div class= "membercard" member = {member}key = {member.id}>
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>Age:</strong>: {member.age}</p>
                <p><strong>Email:</strong>: {member.email}</p>
                <p><strong>Role:</strong> {member.role}</p> </div>
            ))}

        </div>
    )
}
export default Members;