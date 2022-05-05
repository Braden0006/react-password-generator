import React, { useState } from 'react';
import './App.css';

// TODO: FIGURE OUT HOW TO PUT THE NUMBER OF CHARACTERS IN THE PASSWORD BOX BASED ON WHAT NUMBER THE USER CHOOSES FROM THE NUMBER INPUT

function App() {

  const [numbers, setNumbers] = useState('')

  return (
    <div className="app-container">
      <div className="password-container">
        <span className='password_box'>{numbers}</span>
      </div>
      <div className="question-container">
        <label htmlFor="characters">How many characters?</label>
        <input className='question_input' type="number" id='characters' onChange={(e) => setNumbers(e.target.value)} />
      
        <form className='radio-container'>
          <div className="uppercase">
            <span className='uppercase_title'>Do you want uppercase letters?</span>
            <label htmlFor="yes"><input type="radio" id='yes' name='first'/> Yes</label>
            <label htmlFor="no"><input type="radio" id='no' name='first'/> No</label>
          </div>

          <div className="uppercase">
            <span className='uppercase_title'>How about lowercase letters?</span>
            <label htmlFor="yes"><input type="radio" id='yes' name='second'/> Yes</label>
            <label htmlFor="no"><input type="radio" id='no' name='second'/> No</label>
          </div>

          <div className="uppercase">
            <span className='uppercase_title'>Any symbols?</span>
            <label htmlFor="yes"><input type="radio" id='yes' name='third'/> Yes</label>
            <label htmlFor="no"><input type="radio" id='no' name='third'/> No</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
