import React, {useState,useEffect} from 'react';
import './Nav.css';


function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY >100){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });
    return ()=>{
      window.removeEventListener("scroll");
    }
  }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYvbC7z-D0oDtAA3XrxrF1iRU5PW_tMQUdA&usqp=CAU' alt='logo'/>
        <img className='nav__avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWjo-8nBzjjlaloT3RGDaT7eDXHARmr-Qtg&usqp=CAU' alt='smile'/>

    </div>
  );
}

export default Nav;