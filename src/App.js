
import './App.css';
import NavBar from './NavBar';
import BottomFooter from './BottomFooter';




function App() {
  return (
  
    <div className="App">

       <NavBar/>
       <div className="home-main-section1">
          <div className='left_part' >
             <div className='name-highlight'>
              <h1><span className='welcome'>"Welcome </span>
              <span className='welcome-To'>TO,</span><br/>
               <span className='Name-latera'>A</span>
               <span className='Name-laterb'>V</span>&nbsp;
               <span className='network'>NETWORK"</span> </h1>
             </div>
             <div className='offer'>
               
             </div>
             <div className='join-btn'>
              <p> Click <span className='book-link'>Book Now</span> To, Connect With our Wi-Fi<br/>
             <span className='middle-text'>To Explore  Internet World.</span> <br/>
               with Wireless Network <span className='make-red'>available in Limited Areas.</span></p>
             </div>
             <button className='btn btn-primary btn- small'>Book Now</button>

          </div>
          <div className='right_part' >
            <div className='background-container'>
            <div className='image-scroller'>
            </div>
            </div>

          </div>
       </div>
       <div className="home-main-section2">
        <div className='Package-title'> New Year Package</div>
        <div className='package-card-container'>
        <div className='package-card'>
          
          </div>
          <div className='package-cardr'>
          
          </div>
          <div className='package-card'>
          
          </div>
        </div>
       </div>

      <BottomFooter/>
    </div>
  );
}

export default App;
