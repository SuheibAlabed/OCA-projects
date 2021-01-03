import React from "react";
import { Button,Modal} from 'react-bootstrap';
// import food2 from "./food2.jpg";
import './section1.css';
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';




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
        <span>choose the anything:</span>
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
        <span>choose the anything:</span>
      </div>

   <div className='form_check_label2'>
        <div>
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Second radio
        </label>
        </div>

        <div>
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Second radio
        </label>
        </div>
        
        <div>
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Second radio
        </label>
        </div>

   </div>

      </div>

      <div className="number-input">
      <div className='popup_tag3'>
        <span>choose the anything:</span>
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
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PopupSection() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default PopupSection





























// import MenuPage from "./Pages/menue/menue"


// function App() {
//   return (
//       <div>
// <MenuPage/>
      

//       </div>
//   );
// }

// export default App;
