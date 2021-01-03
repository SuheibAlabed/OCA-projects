import React, {Component} from 'react';

// import card1 from "./card1.jpg";
import food2 from "./food3.jpg";
import drink2 from "./drink2.jpg";
import card8 from "./sweet21.jpg";


import "./menuNav.css";
import {Link} from 'react-router-dom';


// import starRate from "./starRate.png"


class MenuNav extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="menuNav pt-3">
                <div className='menuNav_head'>
                    <div className="d-flex flex-column mx-2">
                        <div onClick={e => {

                            document.getElementsByClassName("active2")[0].removeAttribute("class");


                            // .removeAttribute("class")
                            (e.target.className = "active2");

                        }} className='imgRounded '>
                            <Link to='/menu/1' className='menuNavIcon'><img className="active2" src={food2}/></Link>
                        </div>


                        <p className="px-0 text-center m-0">Main dish</p>
                    </div>

                    <div className="d-flex flex-column mx-2">
                        <div onClick={e => {

                            document.getElementsByClassName("active2")[0].removeAttribute("class");

                            // .removeAttribute("class")
                            (e.target.className = "active2");

                        }} className='imgRounded'>

                            <Link to='/menu/2' className='menuNavIcon'><img src={drink2}/></Link>
                        </div>
                        <p className="px-0 text-center m-0">Pizza</p>
                    </div>
                    <div className="d-flex flex-column mx-2">
                        <div onClick={e => {

                            document.getElementsByClassName("active2")[0].removeAttribute("class");


                            // .removeAttribute("class")
                            (e.target.className = "active2");

                        }} className='imgRounded'>

                            <Link to='/menu/3' className='menuNavIcon'><img src={card8}/></Link>
                        </div>
                        <p className="px-0 text-center m-0">Sweets </p>
                    </div>

                </div>
            </div>
        )
    }

}

export default MenuNav
