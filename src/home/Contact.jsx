import React from 'react'
import { Button } from 'react-bootstrap'
import './contact.css'

const Contact = () => {
  return (
    <div className='main-contact'>
      <h1 className='text-center '>Make A Contact</h1>
      <form className='main-form'>
        <div className='name-mail'>
          <input type="text" placeholder='name' />
          <input type="email" placeholder='E-mail' />

        </div>
        <input type="number" placeholder='Phone Number' />
        <input className='msg' type="text" placeholder='Message' />
        {/* <button>Submit</button> */}
      </form>
    </div>
  )
}

export default Contact
