
function App() {
  return (
    <div>
     {/* --============ Navigation ============ */}
    
    <div className="headerwrapper">
      <div id="header" className="container">
        <div className="logo"> 
        <a href="#"><img src="images/LOGO.png" alt="logo" width="165" height="74" />
        </a> 
        </div> {/* end of logo */}
            <nav>
                <ul id="navigations">
                    <li><a href="#navigations">HOME</a></li>
                    <li> <a href="#slider">ABOUT</a></li>
                    <li><a href="#map">LOCATONS</a></li>
                    <li><a href="#bestdishes">MENU</a></li>
                    <li><a href="#contactus">CONTACT</a></li>
                </ul>
            </nav>
          </div>
    </div>
    
    {/*--============ Slider ============- */}
    
    
    <div className="sliderwrapper">
          <div id="slider" className="container">
               <div className="slider">
                <ul className="slides">
                    <li className="slide">
                            <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                             the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                               also the leap into 
                             electronic typesetting</p>
                          <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight" 
                          data-wow-delay="0.8s" alt="slide1img" /> 
                          </li>
                     <li className="slide">
                            <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                             the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                               also the leap into 
                             electronic typesetting</p>
                          <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight" 
                          data-wow-delay="0.8s" alt="slideimg2" /> 
                          </li>
                    <li className="slide">
                            <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                             the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                               also the leap into 
                             electronic typesetting</p>
                          <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight" 
                          data-wow-delay="0.8s" alt="slideimg2" /> 
                          </li>
                  </ul>
                </div>
          </div>
    </div>
    
    
    {/* --============ Best Dishes ============ */}
    
    
    <div className="bestdisheswrapper">
        <div id="bestdishes" className="container">
           
         <h2 className="wow fadeInUp" data-wow-delay="0.3s">BEST DISHES</h2>
          <div className="slider">
                  <ul className="slides">
                    <li className="slide">
                        <div className="item">
                              <img src="  images/thumb1.png" width="226" height="225" alt="sliderimg" className="wow flipInX"
                               data-wow-delay=".8s" /> 
                              <h3>Pasta Capellini</h3>
                          </div>
                          
                       <div className="item2">
                              <img src="images/thumb2.jpg" width="226" height="225" alt="sliderimg" className="wow flipInX"
                               data-wow-delay=".8s" /> 
                              <h3>Pasta Pillus</h3>
                          </div>
                       <div className="item3">
                              <img src="images/thumb3.png" width="226" height="225" alt="sliderimg" className="wow flipInX"
                               data-wow-delay=".8s" /> 
                              <h3>Pasta Fusilli</h3>
                          </div>
                      </li>
                       <li className="slide">
                        <div className="item">
                              <img src="images/thumb1.png" width="226" height="225" alt="sliderimg" /> 
                              <h3>Pasta Capellini</h3>
                          </div>
                          
                       <div className="item2">
                              <img src="images/thumb2.jpg" width="226" height="225" alt="sliderimg" /> 
                              <h3>Pasta Pillus</h3>
                          </div>
                          
                       <div className="item3">
                              <img src="images/thumb3.png" width="226" height="225" alt="sliderimg" /> 
                              <h3>Pasta Fusilli</h3>
                          </div>
                      </li>
                       
            </ul>
          </div>
        </div>
    </div>
    
    {/*--============ MAP ============ */}
    <div className="mapwrapper">
      
        <div id="map" className="container">
        <iframe src="https://maps.google.com/maps?q=6%20%D0%A1%D0%B8%D1%80%D0%BC%D0%B0%20%D0%B2%D0%BE%D0%B9%D0%B2%D0%BE%D0%B4%D0%B0,%20Montana&t=&z=15&ie=UTF8&iwloc=&output=embed" title='GrosAddress'  className="googlemap"></iframe>
        </div>
    </div>
    
    
    {/* --============ Contact us ============ */}
    
    {/* --============ FOOTER ============ */}
    
    <div className="footerwrapper">
      <footer class="container">
          <div className="socialize">
          <h2>Socialize</h2>
            <div className="socialimgs">
              <a href="https://www.facebook.com/Pasta-GROS-891137657661272">
                <img src="images/fb.png" width="68" height="68" className="facebook" alt="fb" />
              </a>
            </div>
          </div>
            
        <div className="sendfeedback">
          <h2>Send Feedback</h2>
            <form>
              <h6>Your Name:</h6>
              <input type="text" className="yourname" />
              <h6>Mobile Number :</h6>
              <input type="text" className="mobilenumber" />
              <h6>Email :</h6>
              <input type="text" className="email" />
              <h6>Message :</h6>
              <textarea></textarea>
              <button>SUBMIT </button>
            </form>
        </div>
      
        <div className="fixedsocial">
        <a href="https://www.facebook.com/Pasta-GROS-891137657661272"><img src="images/facebook.png" width="20" height="20" alt="fb" /> </a>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default App;
