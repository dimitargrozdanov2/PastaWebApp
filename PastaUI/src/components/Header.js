import Navigation from "./Navigation";

function Header () {
    return (
    <div className="headerwrapper">
        <p className='header-title'>"ГРОС-ГРОЗДАН ГРОЗДАНОВ" произвежда най-вкусните макарони в България!</p>
        <div id="header" className="container">
        <div className="logo"> 
        <a href="#"><img src="images/LOGO.png" alt="logo" width="165" height="74" />
        </a> 
        </div> {/* end of logo */}
        <Navigation />
        </div>
    </div>
    )
}
export default Header;