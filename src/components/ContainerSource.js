import React from 'react'

const ContainerSource = (props) =>{

    return(
        <form style ={{textAlign: 'center'}}>  
        <h2>Form</h2>        
          <input type = 'Text'
            placeholder = 'First name'
            name = 'firstName'
            value ={props.data.firstName}
            onChange = {props.changeHandler}
          ></input>
          <br/>
  
          <input type = 'Text'
            placeholder = 'Last name'
            name = 'lastName'
            value ={props.data.lastName}
            onChange = {props.changeHandler}
          ></input>
          <br/>
  
          <input type = 'number'
            placeholder = 'Age'
            name = 'age'
            value ={props.data.age}
            onChange = {props.changeHandler}
          ></input>
          <br/>
  
          <input type = 'radio'
            name = 'gender'
            value = 'male'
            onChange = {props.changeHandler}
            checked = {props.data.gender === 'male'}
          ></input>Male
          <br/>
  
          <input type = 'radio'
            name = 'gender'
            value = 'female'
            onChange = {props.changeHandler}
            checked = {props.data.gender === 'female'}
          ></input>Female
          <br/>
  
          <input type = 'checkbox'
             name ='Ischecked'
             checked = {props.data.Ischecked[0]}
             onChange = {props.changeHandler}
             value = 'NY'
             />
            <br/>
  
            <input type = 'checkbox'
             name ='Ischecked'
             checked = {props.data.Ischecked[1]}
             onChange = {props.changeHandler}
             value = 'London'
             />
            <br/>
  
            <input type = 'checkbox'
             name ='Ischecked'
             checked = {props.data.Ischecked[2]}
             onChange = {props.changeHandler}
             value = 'Ny'
             />
            <br/>
  
            <select value = {props.data.dieteryRestriction}
             onChange = {props.changeHandler}
             name = 'dieteryRestriction'
             >
               <option value = '0'></option>
               <option value = 'kosher'>kosher</option>
               <option value = 'actose free'>actose free</option>
               <option value = 'Hallal'>Hallal</option>
             </select>
          <br/>
          <button>Submit</button>
          <div>
            <h2>Your data:</h2>
            <p>Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Age: {props.data.age}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Location: ???</p>
            <p>Dietery Restriction: {props.data.dieteryRestriction}</p>
  
  
          </div>
        </form>
      )
    }
    



export default ContainerSource