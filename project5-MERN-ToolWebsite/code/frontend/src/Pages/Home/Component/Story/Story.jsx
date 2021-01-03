
import BgStory from "../../../../Img/body-bg.jpg"
import Item1 from "../../../../Img/menu/item1.jpg"
import Item2 from "../../../../Img/menu/item2.jpg"
import Item3 from "../../../../Img/menu/item3.jpg"
import Item4 from "../../../../Img/menu/item4.jpg"
import { Link } from "react-router-dom"


function Story() {
    return (
        <div style={{ backgroundImage: `url(${BgStory})` }} className="jumbotron rounded-0 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 style={{ fontFamily: "Sacramento", fontSize: "2.5rem" }} className=" text-primary card-title text-center">welcome to Oregano</h2>
                <br />
                <h1 className="my-5 font-weight-bold text-center">We are a modern Italian restaurant in the center of the city</h1>
                <p className="text-primary text-center ">Wood fired Neapolitan pizzas prepared with the purest respect for traditions, fresh handmade <br />
                pasta (do not miss our pasta with the truffles) and over a hundred different wines from the most <br />
                renowned winemakers. <br />
                    Whether you are a foodie and wine connoisseur or simply someone in search of a great location for <br />
                    a family dinner, we welcome you!</p>
                <div className="row d-flex justify-content-center col-10 mt-5" >
                    <div className="col-md-3 col-sm-6 col-6 p-3">

                        <img className="col-12 p-0 " src={Item1} />
                        <Link to="/menu/1">
                            <div className={"itemholder"} >



                                <h3 className="text-light font-weight-bold align-self-end p-1  item ">Traditional
            Italian Antipasti</h3>
                            </div>
                        </Link>

                    </div>
                    <div className="col-md-3 col-sm-6 col-6 p-3">
                        <img className="col-12 p-0 " src={Item2} />
                        <div className={"itemholder"} >

                            <h3 className="text-light font-weight-bold align-self-end p-1 item ">Traditional
                Italian Pasta</h3>
                        </div>
                    </div><div className="col-md-3 col-sm-6 col-6 p-3">
                        <img className="col-12 p-0 " src={Item3} />
                        <div className={"itemholder"} >

                            <h3 className="text-light font-weight-bold align-self-end p-1  item ">
                                Italian Desserts</h3>
                        </div>

                    </div><div className="col-md-3 col-sm-6 col-6 p-3">
                        <img className="col-12 p-0 " src={Item4} />
                        <div className={"itemholder"} >

                            <h3 className="text-light font-weight-bold align-self-end p-1  item ">Traditional
            Neapolitan Pizza</h3>
                        </div>
                    </div>

                </div>
                <a className="pt-5 text-dark more " href="#"><h4 className="mb-0 font-weight-bold">View All Menu</h4></a>
            </div>

        </div>
    )
}

export default Story