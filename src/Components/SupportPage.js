import React from "react";
import NavBar from "../Components/NavBar";
import BottomFooter from "../BottomFooter";
import '../css/Support.css';

function SupportPage () {
    return (
        <div className='main-container'>
            {/* <div class="five-pointed-star"></div>
            <div class="five-pointed-star2"></div> */}
            <NavBar/>
             <div className='Main-Section'>
             <div className='left-side'>
                <div className="check-container">
                <h1>Check Your Complaint<br/>Issue Rise Before</h1>
                <p>Track Your Issue !</p>
                <label className=''>Enter Your Complaint No :</label><br/>
                <input className='check-input' type="text"/><br/>
                <button className='btn btn-primary'>Check</button>
                </div>
               
             </div> 
             <div className='right-side'>
             <div className="heading-container"><h2>Rise a Support Ticket</h2></div>
                <div className="Form-Box">   
                <form className="main-form-section">
                    <h2 >! Submit Your Issue !</h2>
                    <div className="form-group">
                        <label className="form-label">Customer Name :</label><br/>
                        <input type="text" className="form-control" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Customer Id :</label><br/>
                        <input type="text" className="form-control" placeholder="Enter Customer id"/>
                    </div>
               
                    <div className="form-group">
                        <label className="form-label">Reason :</label><br/>
                       
                       <select className="form-control-selection">
                        <option  value=''>Select Reason</option>
                        <option  value=''>Internet Not Working</option>
                        <option  value=''>Payment Issue</option>
                        <option  value=''>Connecting Issue</option>
                        <option  value=''>Speed is  Slow</option>
                        <option  value=''>Unable to Connect</option>

                       </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message :</label><br/>
                        <textarea className="form-control" rows="3" placeholder="Explain Your Issue in Detail...."></textarea>
                        </div>
                    <div className="form-group">
                        <button className="btn-submit btn-primary">Submit</button>
                    </div>
                </form>
               
                </div>
               
            </div>

             </div>
            <BottomFooter/>
      
     
        </div>
    );

}

export default SupportPage;