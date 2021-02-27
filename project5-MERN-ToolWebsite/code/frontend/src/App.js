import Home from "./Pages/Home/Home.jsx"
import Navbar from "./Component/NavBar/Navbar";
import Footer from "./Component/Footer/footer";
import Menue from "./Pages/menue/menue"
import User from "./Pages/signin-signup Page/User"
import ScrollToTop from "./Component/ScrollToTop"
import {BrowserRouter as Router, Redirect, Route , withRouter} from "react-router-dom"
import {UserContext} from "./Component/useContext/UserContext"
import Profile from "./Pages/src/App.js"
import Cart from "./Pages/Cart Page/Cart"
import {useEffect, useState} from "react";
import "./App.css"
import "./Component/popup/section1.css"


if(!localStorage.getItem("cart")){
    localStorage.setItem("cart","[]")
}



function App() {






    const [item, setItem] = useState(JSON.parse(localStorage.getItem("cart")).length);



  return (

      <div >

<Router>


<Navbar setCart={setItem}  item={item}/>

    <ScrollToTop/>
    <Route path="/" exact component={Home} />

    <Route path="/menu"  >
        <Menue  setItem={setItem}/>
    </Route>
    <Route path="/login" component={User} />
    <Route path="/profile" component={Profile} />
    <Route path="/Cart"  >
        <Cart setItem={setItem}/>
    </Route>




</Router>
      <Footer/>
      </div>
  );

}

export default App;
