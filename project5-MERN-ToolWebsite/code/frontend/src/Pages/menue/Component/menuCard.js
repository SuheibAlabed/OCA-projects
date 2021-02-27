import React, { Component } from 'react';
import {Card, Modal} from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyVerticallyCenteredModal(props) {



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Customize your order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='popup_all'>

                    <div className='popup_part1'>
                        <img src={props.img}/>
                        <p>
                            {props.description}

                        </p>
                    </div>

                    <div className='popup_part2'>

                        <form>
                            <div className="form_check">
                                <div className='popup_tag1'>
                                    <span>Choose the Size:</span>
                                </div>
                                <div className='form_check_label1'>

                                    <div >

                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        <label className="form-check-label" for="inlineRadio1">
                                            <img className='radio_img' src='https://www.flaticon.com/svg/static/icons/svg/3522/3522643.svg   '/>
                                        </label>
                                    </div>
                                    <div>

                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" for="inlineRadio2">
                                            <img className='radio_img' src='https://www.flaticon.com/svg/static/icons/svg/3522/3522509.svg  '/>

                                        </label>
                                    </div>
                                    <div>

                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                        <label className="form-check-label" for="inlineRadio3">
                                            <img className='radio_img' src='https://www.flaticon.com/svg/static/icons/svg/3522/3522487.svg '/>

                                        </label>
                                    </div>

                                </div>
                            </div>


                            <div className='popup_radio'>
                                <div className='popup_tag2'>
                                    <span>Spice level:</span>
                                </div>

                                <div className='form_check_label2'>
                                    <div>
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                            Mild
                                        </label>
                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                            Medium
                                        </label>
                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                            Spicy
                                        </label>
                                    </div>

                                </div>

                            </div>

                            <div className="number-input">
                                <div className='popup_tag3'>
                                    <span>Select Quantity</span>
                                </div>
                                <div className='form_check_label3' >
                                    <input className="quantity" min="1"  max='10' name="quantity" placeholder="1"  type="number"/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <p className="price">Total price: {props.price}</p>
                <div className="btn btn-dark" onClick={()=> {
                    props.Addtocart();
                    props.onHide()
                }}>Done</div>




            </Modal.Footer>
        </Modal>
    );
}





let cart = [];
if (localStorage.getItem("cart") ){
    cart.push(JSON.parse( localStorage.getItem("cart")))
}









function MenuCard(props){
    const [modalShow, setModalShow] = React.useState(false);







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
      <button className="btn1" onClick={()=>setModalShow(true)} >Customize</button>
          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              description={props.content}
              price={props.cost}
              img={props.img}
              setItem={props.setItem}
              Addtocart={Addtocart}
          />
      
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
