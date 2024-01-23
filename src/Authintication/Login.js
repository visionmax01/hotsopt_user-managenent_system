import React from "react";
import NavBar from "../Components/NavBar";
// import BottomFooter from "../BottomFooter";
import '../css/login.css';
/*image*/
import logo1 from '../img/login.png';
import img2 from '../img/logo2.png';
function Login () {
    return (
        <div className='main-container'>
            <NavBar/>
            <div className="design-container">
                <div className="container1"></div>
                <div className="container2"></div>
                
                
                </div>
            <div className="login-container-1">
               
                <div className="container-login">
                    <div className="left-side-container">
                        <div className="Design-one">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="Design-two"></div>

                    </div>
                    <div className="right-side-container">
                        <div className="login-icon"><center><img src={logo1} alt=""></img></center></div>
                        <div className="login-field">
                            <h1>Login</h1>
                            <form>
                                <label className="Form-label">User Id :</label><br/>
                                <input type="text" className="Form-input" placeholder="enter user name"/><br/><br/>

                                <label className="Form-label">Password :</label><br/>
                                <input type="Password" className="Form-input" placeholder="enter password"/><br/>

                                <button className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
             
                </div>  
                </div>
                <div className="design-container">
                <div className="container3"></div>
                <div className="container4"></div>
                </div><br/><br/>    <br/><br/>
         </div>

      
     
    );

}

export default Login;


