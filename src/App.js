import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState('')
  const [lowercase, setLowercase] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [error, setError] = useState('')

  const generatePassword = () => {

    setError('')
    if (!uppercase && !lowercase && !symbol) {
      return setError('Must check at least one box')
    } else if (passwordLength <= 5) {
      return setError('Password must have atleast 6 numbers in it')
    } else if (passwordLength > 26) {
      return setError('Characters must be 26 or below')
    }

    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3) 
      if (uppercase && choice === 0) {
        password += randomUpper()
      } else if (lowercase && choice === 1) {
        password += randomLower()
      } else if (symbol && choice === 3) {
        password += randomSymbol()
      } else {
        i--
      }
    }
    setPassword(password)
  }

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  const randomLower = () => {
    return String.fromCharCode(random(97, 122))
  }

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90))
  }

  const randomSymbol = () => {
    const symbols = '~!@#$%^&*()_+{}|":?><'
    return symbols[random(0, symbols.length - 1)]
  }

  useEffect(() => {
    generatePassword()
  }, [])

  return (
    <div className="app-container">
      <div className="password-container">
        <span className='password_box'>{password}</span>
      </div>
      <div className="question-container">
        <label className='question_label' htmlFor="characters">How many characters?</label>
        <input className='question_input' type="number" min='0' max='26' id='characters' defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
      
        <div className='radio-container'>
          <div className="option">
            <span className='uppercase_title'>Do you want uppercase letters?</span>
            <input className='check' type="checkbox" defaultChecked={uppercase} onClick={(e) => setUppercase(e.target.checked)}/>
          </div>

          <div className="option">
            <span className='uppercase_title'>How about lowercase letters?</span>
            <input className='check' type="checkbox" defaultChecked={lowercase} onClick={(e) => setLowercase(e.target.checked)}/>
          </div>

          <div className="option">
            <span className='uppercase_title'>Any symbols?</span>
            <input className='check' type="checkbox" defaultChecked={symbol} onClick={(e) => setSymbol(e.target.checked)}/>
          </div>

        </div>
      </div>
      <div className="submit">
        <button className='submit_btn' onClick={generatePassword}>Generate</button>
      </div>
      <span className='error-title'>{error}</span>
    </div>
  )
}

export default App;
