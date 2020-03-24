import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import teamdata from './teamdata';

function App() {
  const [members, setMembers] = useState(teamdata)
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    role: ''
  })
  // for onChange event handler
  const onInputChange = event => {
    // name of input being changed
    const inputThatChanged = event.target.name
    // value for that input
    const newValueForInput = event.target.value
    // placing values onto form state
    setFormValues({...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    // stop the form from reloading the page on submit
    event.preventDefault()
    // add a new member to the team member array in state
    // taking values from form
    const newMember = {
      fname: formValues.fname,
      lname: formValues.lname,
      role: formValues.role
    }
    // adding member to team member array
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
      <h3>List of Team Members:</h3>
      {
        members.map(member => <div key={member.id}>{member.fname} {member.lname}: {member.role}</div>)
      }
      </header>
    </div>
  );
}

export default App;
