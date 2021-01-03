import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from '../../Img/Logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { Link, Redirect, withRouter } from "react-router-dom"
import { UserContext } from '../useContext/UserContext'
import { BrowserRouter as Router, Route } from "react-router-dom"

const Navbar = (props) => {
    const [islogin, setLogin] = useState(localStorage.getItem("UserStatus") === "loggedIn")
    const [dropdown, setdropdown] = useState(false);
    const [click, setClick] = useState(false);


    const handleButtonClick = () => {
        setdropdown(!dropdown);
    };
    const handelClick = () => {
        setClick(!click);
    };
    function logout() {
        localStorage.removeItem("UserStatus");
        localStorage.setItem("cart" , "[]");
        props.setCart(0);
        setLogin(false);



    }
    const closeMobileMenu = () => {
        setClick(false);


    };


    useEffect(() => {
        const removeListener = props.history.listen((e) => {
            setLogin(localStorage.getItem("UserStatus") ? true : false)
            console.log(e)
        }, [islogin]);
        setLogin(localStorage.getItem("UserStatus") ? true : false)
    })
    return (


        <div className="Container-Navbar" onMouseLeave={() => setdropdown(false)}>
            {islogin || <Redirect to="/" />}
            <h1 className="Logo">  <img src={logo} width="60px" height='60px' />  </h1>
            <div className="Nav-Icon" onClick={handelClick}>
                {click ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
            </div>
            <ul className={click ? "Nav-Items active" : "Nav-Items"}>
                <li className="Nav-btn">
                    <Link to="/" className="Nav-Links" onClick={closeMobileMenu}>
                        Home
                  </Link>
                </li>

                <li className="Nav-btn">
                    <Link to="/menu/1" className="Nav-Links" onClick={closeMobileMenu}>
                        Menu
                  </Link>
                </li>
                <li className="Nav-btn">
                    <div className="dropdown-btn">
                        <a
                            type="button"
                            className="Nav-Links"
                            onClick={() => props.setItem(c => c + 1)}
                            onMouseEnter={() => setdropdown(true)}
                        >
                            Pages
                          <i>
                                <RiArrowDownSFill />
                            </i>
                        </a>
                        {dropdown && (
                            <div className="dropdown flipInX">
                                <ul className="flipInX">
                                    <li>Shop</li>
                                    <li>Gallery</li>
                                    <li>Book a Table</li>
                                    <li>Events</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </li>

                {/* <li className="Nav-btn Login-btn">
          <a href="/" className="button-Login" onClick={closeMobileMenu}>
            Login
          </a>
        </li> */}
                {islogin ?
                    <>
                        <li className="Nav-btn">
                            <Link to="/cart" className="Nav-Links" onClick={closeMobileMenu}>
                                Cart <span style={{ height: "20px" }} className="bg-primary d-flex flex-column px-1 justify-content-center pb-1 text-light mx-1 rounded ">{props.item}</span>
                            </Link>
                        </li>
                        <li className="Nav-btn">
                            <Link to="/profile" className="Nav-Links" onClick={closeMobileMenu}>
                                Profile
                          </Link>
                        </li>
                        <li className="Nav-btn Login-btn">
                            <a className="button-Login" onClick={logout}>
                                Logout
                          </a>
                        </li>
                    </>


                    :
                    <li className="Nav-btn Login-btn">
                        <Link to="/login" className="button-Login" onClick={closeMobileMenu}>
                            Login/Register
                      </Link>
                    </li>
                }

            </ul>

        </div>

    );
}

export default withRouter(Navbar);


