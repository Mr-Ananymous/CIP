import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    const clickHandler = () =>setClick(!click)
    const closeMobileMenu = () =>setClick (false)
    
    const showButton= () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
useEffect( ()=>{
 showButton()    
},[])

    window.addEventListener('resize',showButton);

    return (
        <>
         <nav className='navbar'>
             <div className='navbar-container'>
                 <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 <i class="fas fa-code"></i>
                     &nbsp;&nbsp;&nbsp; SketchToCode 
                 </Link>
                 <div className="menu-icon" onClick={clickHandler}>
                      {click ?
                      <i class="fas fa-times"></i>: 
                     <img src="https://img.icons8.com/material/24/ffffff/menu--v5.png"/>
                     } 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Home
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                          About
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/contact us' className='nav-links' onClick={closeMobileMenu}>
                          Contact us
                      </Link>
                   </li>
                   <li>
                      <Link to='/getcode' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Get Code
                      </Link>
                   </li>
                </ul>
                {button && <Button buttonStyle="btn--outline" buttonSize="btn--medium">GetCode </Button>}

                     </div>

         </nav>
        </>
    ) 
}


export default Navbar

