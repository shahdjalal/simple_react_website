import React from 'react'
import style from './home.module.css';
import myImage from './images/home.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <>
    
    <div className={`${style.home}`}>
<div className='container'>
<div className={`${style.main}`}>
<img src={myImage} />

<h1>Start Bootstrap</h1>

<div className={`${style.star}`}>

<FontAwesomeIcon icon={faStar} />

</div>

<p  className={`${style.desc}`} > Graphic Artist - Web Designer - Illustrator </p>

</div>
</div>
    </div>

    
    
    
    
    
    
    
    </>
  )
}
