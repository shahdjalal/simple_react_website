import React from 'react'
import style from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <>
    <div className={`${style.contact}`}>
    <div className='container d-flex justify-content-center align-items-center  flex-column g-3 ' >
 <h1>contact me</h1>

<div className={`${style.star}`}>

<FontAwesomeIcon icon={faStar} />

</div>    


<form>

<input type='text' required placeholder='Full name' className='border-bottom p-3' />
<input type='text' required placeholder='Email address' className='border-bottom p-3' />
<input type='text' required placeholder='Phone number' className='border-bottom p-3' />
<textarea required placeholder='Message' className='border-bottom p-3'></textarea>

<button  className='rounded'>Send</button>



</form>




    </div>
    
    
    </div>
    
    
    
    
    
    </>
  )
}
