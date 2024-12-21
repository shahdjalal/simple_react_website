import React from 'react'
import style from './port.module.css';
import cabin from './images/cabin.png'
import cake  from './images/cake.png'
import circus from './images/circus.png'
import game from './images/game.png'
import safe from './images/safe.png'
import submarine from './images/submarine.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Port() {
  return (
   <>
   
  <div className='container'>

<div className={`${style.port}`}>

<h1>Portfolio</h1>
   
   <div className={`${style.star}`}>
   
   <FontAwesomeIcon icon={faStar} />
   
   </div>

   <div className="row g-4">

   <div className="col-4">
   <img  src={cabin}   />
    </div>
    <div className="col-4">
    <img  src={cake}   />
    </div>


    <div className="col-4">
    <img  src={circus}   />
    </div>

    <div className="col-4">
    <img  src={game}   />
    </div>

    <div className="col-4">
    <img  src={safe}   />
    </div>

    <div className="col-4">
     <img  src={submarine}   />
    </div>


   </div>



</div>

  </div>
   
   
   
   
   
   </>
  )
}
