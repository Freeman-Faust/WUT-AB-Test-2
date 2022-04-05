import React from "react";


function AddBtn (props)
{ 
    const addContact = (event)=>
{
    event.preventDefault();
    const formData = new FormData(document.getElementById("addContact"))
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    fetch('http://localhost:8888', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formDataJsonString
    })
} 
    
    return(   
    <div>
            <form id="addContact" onSubmit={addContact}>
                <description>Photo: </description> 
               <input name="image" type="img"></input> 
               <description>First Name: </description> 
               <input name="firstname" type="text"></input> 
               <description>Last Name: </description>
               <input name="LN" type="text"></input> 
               <description>Email: </description>
               <input name="email" type="email"></input>  
               <description>Phone Number: </description> 
               <input name="phone" type="phone"></input> 
               <button type="submit">Add</button>
            </form>
        </div>   
        )
}

export default AddBtn;



