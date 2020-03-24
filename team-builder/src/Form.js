import React from 'react';

function Form(props) {
    return (
        
      <form onSubmit={props.onFormSubmit}>
        <label> First name: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.fname}
            name='fname'
            type='text'
          />
        </label>

        <br />
        <label> Last name: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.lname}
            name='lname'
            type='text'
          />
        </label>

        <br />
        <label> Role: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.role}
            name='role'
            type='text'
          />
        </label>

        <br />
        <input type='submit' />

      </form>
    )
  }

export default Form;