import React, {Component, useEffect, useState} from "react"

import Img2 from "../../Img/fire.gif"

import Card from "../Cart Page/CardItem"
import bg from "../../Img/test-bg.jpg"
import img from "../../Img/user.jpg"



function Profile(){
    document.title = "Oregano | Profile Page";
    document.getElementsByTagName("META")[3].content = "website for ordering elegant italian food with high quality and standards pf cooking and making. You can order main italian dishes, pizzas and sweets";

    const [Obj,setObj]=useState(JSON.parse(localStorage.getItem("UserStatus")))
    const [Vector,setVector]=useState(Obj.img)
    const [total,setTotal]=useState(0)

    const jsonObj = JSON.parse(localStorage.getItem('email'));
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.addEventListener("change", chpic);

    const orders = Obj.orders.map(i=><Card id={i.id}  count={1} name={i.dishName} desc={i.content} img={i.img} price={i.cost} />)


    function chpic(){
        var path = (window.URL || window.webkitURL).createObjectURL(fileSelector.files[0]);
        var fReader = new FileReader();
        fReader.readAsDataURL(fileSelector.files[0]);
        fReader.onloadend = function(event){
            var aaa

            aaa = event.target.result;
            // console.log(fileSelector.value);
            // var aaa = fileSelector.value.replace(/C:\\fakepath\\/i, '')
            setVector(aaa)



            fetch("http://localhost:5000/updateimg", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id:Obj._id,
                    img:event.target.result.toString()
                }),
            })
                .then((res) =>
                    res.json().then((res) => {

                        localStorage.setItem("UserStatus",JSON.stringify( res))


                    })

                )

                .catch((err) => console.log(err));








        }
    }

    function file(){




        fileSelector.click()


    }

    useEffect(()=>{
        Obj.orders.map(i=>{

            setTotal(c=>c+parseInt( i.cost))})



    },[])





    return (
        <div style={{fontFamily:"Arbutus Slab"}} className="container-fluid p-0   ">
            <div style={{backgroundImage:`url(${bg})`}} className="d-flex position-relative  col-12 jumbotron-fluid  flex-column justify-content-center align-items-center ">
                <img  width="200px" height="200px" style={{border: "15px solid white" , backgroundColor:"white",borderRadius:"50%", position:"relative" , transform:"translateY(50%)"  }} src={Vector}/>
<div onClick={file} style={{position: "absolute",
    top: '100%',
    height: "100px",
    width: "200px",

    borderRadius: "0 0 100px 100px"}}  className="bg-primary editeProfile justify-content-center align-items-center  d-inline-flex">
    <h5 className="text-light">Edit</h5>
</div>
            </div>

                <h3 style={{fontFamily:"Courgette"}} className="my-5 pt-5 text-center f " >{Obj.name}</h3>

            <div  className="row px-4 col-12  mx-0  justify-content-between">
                <div className=" d-flex  flex-column px-sm-0 pr-md-3  col-md-5">
                    <div style={{backgroundColor:"#f1eee8" ,boxShadow: "0 0 10px 1px #4e4e4e47" , borderRadius:"0" , border:"none",minHeight:"290px"}} className="CartItem ">
                        <h5  className="text-left">Your info
                            <hr/>
                        </h5>
                        <div style={{fontFamily:"Arbutus Slab" }} className="Cards-Items">

                            <h6 className="py-2">Name : {Obj.name}</h6>

                            <h6 className="py-2">E-mail : {Obj.email}</h6>
                            <h6 className="py-2">Phone Number : {Obj.phone}</h6>
                            <h6 className="py-2">Address : Amman,Jordan</h6>

                        </div>
                    </div>

                </div>

                <div className="pl-md-3 d-flex px-sm-0 flex-column col">
                    <div style={{backgroundColor:"#f1eee8" ,boxShadow: "0 0 10px 1px #4e4e4e47" , borderRadius:"0",minHeight:"290px" , border:"none"}} className="CartItem">
                        <h5 className="text-left">Your Order
                            <hr/>
                        </h5>
                        <div className="Cards-Items">
                            <div className="row  pl-3 pr-0 col">

                                <img width="208px"  className="rounded" src={Img2}/>
                                <div className="d-flex flex-column col justify-content-between">
<div style={{maxWidth:"max-content"}} className="card-array" >

                                    {Obj.orders.map(i=><h6>{i.dishName} X {i.cost} JOD</h6>)}





                                    {/*<h6>{Obj.orders[0] ? Obj.orders[0].dishName : "NO Orders yet"}</h6>*/}
                                    {/*<h6>{Obj.orders[1] ? Obj.orders[0].dishName : "NO Orders yet"}</h6>*/}
</div>
                                    <h6 className="align-self-end">Total {total} JOD</h6>
                                </div>
                            </div>
                            <hr/>
                            <div className="row justify-content-between px-3">


                            <h6 className=" font-weight-bold">Status : <span style={{fontSize:"16px"}} className="text-success ">Delivery on process</span> </h6>
                            <div className="btn btn-dark ">Cancel</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className="row px-4 mx-0 py-5">
                <div className="CartItem">
                    <h2 className="text-left">Order Again
                        <hr/>
                    </h2>
                    <div className="Cards-Items">

                        {orders}

                    </div>
                </div>


            </div>








        </div>
    )

}


export default Profile;
