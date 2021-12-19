import React, {useContext } from "react";
import app from "../firebase";
import { AuthContext } from "../contexts/AuthContext.js";
import Logout from "./Logout/Logout";

const Home = () =>{
const { user } = useContext(AuthContext);

    if (user) {
      return <Logout />
    }
};

export default Home;