import React from 'react'
import style from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return (
    <>
    <div className= {`${style.about}`}>
     <div className='container'>
     <div className= {`${style.aboutSection}`}>
     <h1>about</h1>

<div className={`${style.star}`}>

<FontAwesomeIcon icon={faStar} />

</div>    

<div className='row'>

<div className='col'>
<p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes 
    the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>

<div className='col'>
  <p>You can create your own custom avatar for the masthead,
     change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
</div>



</div>

<button className=' rounded  '> Free Download</button>
     </div>



     </div>

    </div>
    
    
    
    
    
    </>
  )
}
