import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CardItem";
import bg from "../../Img/test-bg.jpg"
import gg from "../../Pages/menue/Component/drink1.jpg"
import gg2 from "../../Pages/menue/Component/drink2.jpg"
import gg3 from "../../Pages/menue/Component/drink3.jpg"
import { Link } from "react-router-dom"

import { FaMoneyBillWaveAlt, FaShuttleVan } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import Img from "../Assests/1.png";





function Cart(props) {
  document.title = "Oregano | Cart Page";
  document.getElementsByTagName("META")[3].content = "website for ordering elegant italian food with high quality and standards pf cooking and making. You can order main italian dishes, pizzas and sweets";

  let data = JSON.parse(localStorage.getItem("cart"))




  if (!data) {
    data = []
  }
  const [total1, setTotal] = useState(0)
  const [cartitem, setItem] = useState([])





  useEffect(() => {
    setItem(data.map(i => {

      setTotal(c => c + parseInt(i.cost));

      return (

        <CartItem setItem={props.setItem} id={i.id} sett={setTotal} count={1} name={i.dishName} desc={i.content} img={i.img} price={i.cost} />
      )
    }
    ))
  }, [])

  function todatabase() {

    let Obj = JSON.parse(localStorage.getItem("UserStatus"))
    let orders = JSON.parse(localStorage.getItem("cart"))
    fetch("http://localhost:5000/cheeckout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Obj._id,
        orders: orders
      }),
    })
      .then((res) => {
        res.json().then((res) => {





          if (res) {
            setItem([])
            localStorage.setItem("UserStatus", JSON.stringify(res));
            localStorage.setItem("cart", JSON.stringify([]))
            props.setItem(0)
            window.location = "#popup1"
          }

        }
        )

        // window.history.pushState({},null,"#popup1")

      }
      )
      .catch((err) => console.log(err));



  }


  return (
    <div className="Cart-Container">
      <div style={{ backgroundImage: `url(${bg})` }} className="Cart-header">
        <div className="d-flex position-relative col-12 jumbotron-fluid  flex-column justify-content-center align-items-center ">
          <img className="App-logo" style={{ borderRadius: "50%", position: "relative", transform: "translateY(50%)" }} src={Img} />
          <h2>Your order 3la elNar</h2>
        </div>
      </div>
      <div className="px-4">


        <div className="CartItem px-4 ">
          <h2 className="card-title">
            Cart
          <hr />
          </h2>
          <div className="Cards-Items">
            {/*<CartItem />*/}
            {/*<CartItem />*/}
            {cartitem}
            {/*<CartItem />*/}
          </div>
        </div>
        <div className="CartTotal">
          <div className="Row-1">
            <p>
              <FaMoneyBillWaveAlt size={30} style={{ marginRight: "0.5rem" }} />
            Cash
          </p>
            <b>0.0 JOD</b>
          </div>
          <div className="Row-1">
            <p>
              <GrMoney size={30} style={{ marginRight: "0.5rem" }} />
            Tax
          </p>
            <b>4.5 JOD</b>
          </div>
          <div className="Row-1">
            <p>
              <FaShuttleVan size={30} style={{ marginRight: "0.5rem" }} />
            Free Shipping
          </p>
            <b>0.0 JOD</b>
          </div>
          <div className="Row-1">
            <button onClick={todatabase}  >Checkout</button>
            <b>Total: {total1 + 4.5}</b>
          </div>
        </div>
      </div>

      <div className="popup-llsoboh">


        <div id="popup1" className="overlay">
          <div className="popup">
            <h2>purchased successflly</h2>
            <Link className="close" to="/profile">&times;</Link>
            <div className="content">
              Thank to purchased our service , you can find purchaseds on your profile.
                    <div className="">
                <Link className='DoneBTN ' to="/profile">
                  <p style={{ color: '#fff' }}>Done</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Cart;
