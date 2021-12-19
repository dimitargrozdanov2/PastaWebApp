import Header from "./components/Header";
import DescriptionSlider from "./components/DescriptionSlider";
import ProductSlider from "./components/ProductSlider";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/Home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* TODO: add createrecipes and addproducts private route */}
        <Header />
        <DescriptionSlider />
        <ProductSlider />
        <ContactUs />
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
