import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import ImgItem from "../Assests/2.png";
import bgCard from "../Assests/bg-card-1.jpg";
import "./CardItem.css";

function CardItem(props){

  const [isCount, isEditCount] = useState(false);
  const [Count, EditCount] = useState(props.count);
  const [PriceItem, SetPrice] = useState(props.price);
  const[isdelete , setDelet]=useState(false)
  let [TotalPrice, EditPrice] = useState(PriceItem);
  const plusCount = (count) => {
    if (count < 40) {
      EditPrice(PriceItem * (Count + 1));
      EditCount(count + 1);
      console.log(Count);
      props.sett(c=>c+PriceItem)
    }
  };
  const MinusCount = (count) => {
    if (count > 1) {
      EditCount(count - 1);
      props.sett(c=>c-PriceItem)
      EditPrice(TotalPrice - PriceItem);
    }
  };

  return (!isdelete ?
    <div className="CardItem-Container">
      <div className="cardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="Card-Details">
        <div className="Card-Delete-Icon">
          <button>
            {" "}
            <MdDelete onClick={()=> {
              props.sett(c => c - TotalPrice);
              const list = JSON.parse(localStorage.getItem("cart"))
              const newList = list.filter((item) => item.id !== props.id);

              localStorage.setItem("cart",JSON.stringify( newList));
              props.setItem(c=>c-1)
              setDelet(true)
            }} size={35} />
          </button>
        </div>
        <div className="Card-Info">
          <h3>Name : {props.name}</h3>
          <h3 className="Price">Price: {TotalPrice} JOD</h3>

          {isCount ? (
            <div className="Card-Counter">
              <h3>Quantity : </h3>
              <button
                className="btn-ChangeCount"
                onClick={() => plusCount(Count)}
              >
                <BsPlus className="icon" />
              </button>
              <h5>{Count}</h5>
              <button
                className="btn-ChangeCount"
                onClick={() => MinusCount(Count)}
              >
                <BiMinus className="icon" />
              </button>
              <div className="Card-Edit">
                <button onClick={() => {
                  isEditCount(false)

                }}>
                  <h3>Done</h3>
                </button>
              </div>
            </div>
          ) : (
            <div className="Card-Counter">
              <h3>Quantity : </h3>
              <h3>{Count}</h3>
              <div className="Card-Edit">
                <button onClick={() => isEditCount(true)}>
                  <h3>Edit</h3>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <img src={bgCard} alt="" className="bg-card-1" /> */}
    </div> : null
);
};
export default CardItem;
