function Footer () {
    return (
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
    )
}

export default Footer;