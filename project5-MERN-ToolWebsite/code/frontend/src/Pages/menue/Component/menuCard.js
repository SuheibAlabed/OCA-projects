import React, { Component } from 'react';
import { Button,Card } from 'react-bootstrap';
import card1 from "./card1.jpg"
// import starRate from "./starRate.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let cart = [];
if (localStorage.getItem("cart") ){
    cart.push(JSON.parse( localStorage.getItem("cart")))
}









function MenuCard(props){







    function Addtocart(){

        if(localStorage.getItem("cart")=="[]"){
            cart=[]
        }
        cart.push(props);

        props.setItem(c=>c+1)




        localStorage.setItem("cart", JSON.stringify(cart));

        toast.dark("Added to Cart",{hideProgressBar: true,className:"pl-4 text-primary"});

    }








       return (

           <div className="mainCard">




                   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.dishName}</Card.Title>
   
    <Card.Text>
      
      <p>
      {props.content}
      <br/>
      <br/>
      <button className="btn1"> customize</button>
      
      </p>
      <hr/>
      
      <div className='menuCard_price'>
      <p > Price: {props.cost} JOD</p>
      <div onClick={Addtocart} className="menuCard_orderNow btn btn-dark">Order now</div>


      </div>
    </Card.Text>
    
  </Card.Body>
</Card>

                           </div>
                           )
                       }


export default MenuCard
