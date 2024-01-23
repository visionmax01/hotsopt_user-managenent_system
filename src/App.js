import './App.css';
import NavBar from './NavBar';
import BottomFooter from './BottomFooter';
import packageimg1 from './img/logo2.png';
import eap110 from './img/eap110.webp';
import image from './img/image.jpg';
import hologram from './img/hologram-img.png';





function App() {
  return (
  
    <div className="App">

       <NavBar/>
         {/* section1-phase of main page */}
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


            {/* section2-phase of main page */}
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
          <img className='card-image' src={packageimg1} alt=''/>
          <h1 className='heading-containt'>STANDARD</h1>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <button className='btn-small btn-primary btn- small'> Join Now</button>
          </div>


          <div className='package-card'>
          <img className='card-image' src={packageimg1} alt=''/>
          <h1 className='heading-containt'>STANDARD</h1>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <button className='btn-small btn-primary btn- small'> Join Now</button>
          </div>


          <div className='package-card'>
          <img className='card-image' src={packageimg1} alt=''/>
          <h1 className='heading-containt'>STANDARD</h1>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <button className='btn-small btn-primary btn- small'> Join Now</button>
          </div>



          <div className='package-card'>
          <img className='card-image' src={packageimg1} alt=''/>
          <h1 className='heading-containt'>STANDARD</h1>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <span className='details'>dfgfh</span><br/>
          <button className='btn-small btn-primary btn- small'> Join Now</button>
          </div>
        </div>
       </div>
        



        {/* section3-phase of main page */}
        <div className='home-main-section3'>
            <div className='left-side1'>
              <h1 className='text-top'>Direct Connect To your <br/>
           Smart  Devices</h1>
              <h2 className='top-text1'>2.4 Gh / 5 Gh</h2>
             <img className='card-image-left' src={hologram} alt=''/>
              
            </div>
            <div className='left-side2'>
              <img src={packageimg1} className='left-side-img' alt=''></img>
            </div>
        </div>

        <div className='home-main-section4'>  
        <div className='img-side1'>
          <img src={eap110} className='left-side-img1' alt=''/>
        </div>

        <div className='img-side2'>
        <img src={image} className='right-side-img2' alt=''/>
        </div>

        </div>
      <BottomFooter/>
    </div>
  );
}

export default App;
