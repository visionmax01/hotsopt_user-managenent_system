import React from 'react';
import img1 from '../img/Av_network-logo.png';
import img2 from '../img/logo1.png';
import '../css/NavBar.css';


function NavBar () {
    return (
        <div>
             <header className="App-header">
        <nav>
        <a href='/'><img className='imagemain' src={img1}   alt="" /></a>

        
        <img src={img2} className='Main_logo'  alt=""/>
          <ul>
            <li>
              <a href="/Payment">Payment</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a className='loginbtn' href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
     
        </div>
    );
}

export default NavBar;






