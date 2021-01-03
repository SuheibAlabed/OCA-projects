import img1 from "../../Img/menu/cover1.jpg"
import img2 from "../../Img/menu/cover2.jpg"
import img3 from "../../Img/menu/cover3.jpg"

import Slider from "../../Component/Slider/Slider"
import "./Component/menuPage.css";

import MenuNav from './Component/menuNav';
import PopupSection from "../../Component/popup/section1";

import FirstCategory from './Component/catagory1';
import SecondeCategory from './Component/catagory2';
import DrinkCategory from './Component/catagory3';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import React from "react";



export default function MenuPage(props) {
    document.title = "Oregano | Menu Page";
    document.getElementsByTagName("META")[3].content = "website for ordering elegant italian food with high quality and standards pf cooking and making. You can order main italian dishes, pizzas and sweets";


    return (
        // <div className="App">

        //     <Slider />
        //     <MenuNav />
        //     <FirstCategory id="1" />
        //     <SecondeCategory id="2" />
        //     <DrinkCategory id="3" />


        // </div>

        <BrowserRouter>
            <div className="Menu-Page">
                <ToastContainer className="pt-5" autoClose={2500} />
                <Slider img1={img1} img2={img2} img3={img3} />
                <MenuNav />
                <Switch>
                    <Route path="/menu/1" exact  >
                        <FirstCategory setItem={props.setItem} />
                    </Route>
                    <Route path="/menu/2" >
                    <SecondeCategory setItem={props.setItem}/>

                    </Route>
                    <Route path="/menu/3" >
                        <DrinkCategory setItem={props.setItem}/>
                    </Route>
                    <Route path="/menu/popup" >

                    </Route>
                    {/* <Route path="/4" component={} /> */}



                </Switch>


            </div>
        </BrowserRouter>


    );
}
