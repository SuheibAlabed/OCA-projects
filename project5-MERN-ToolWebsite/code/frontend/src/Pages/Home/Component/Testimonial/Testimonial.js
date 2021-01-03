      import bg from "../../../../Img/test-bg.jpg"
import Pic from "../../../../Img/testimonial/osama.png"

      function Testimonial(){


    return(
        <div style={{backgroundImage:`url(${bg})`}} className="jumbotron rounded-0 ">

            <div className="row  ">
                <h2 style={{fontFamily:"Sacramento"}} className="text-primary card-title">Testimonials</h2>
        <div className="pt-5 flex-md-row d-inline-flex flex-column-reverse flex-sm-column-reverse justify-content-around d-sm-inline-flex">
            <p className="text-light col-md-9 col-sm-12 p-2  ">
                “ In many ways, the work of a critic is easy. We risk very little, yet enjoy a position over those who offer up their work and their selves to our judgment. We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so. But there are times when a critic truly risks something, and that is in the discovery and defense of the (new). The world is often unkind to new talent, new creations. The new needs friends. Last night, I experienced something new: an extraordinary meal from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef  Oregano's famous motto, "Anyone can cook." But I realize, only now do I truly understand what he meant. Not everyone can become a great artist; but a great artist can come from anywhere. It is difficult to imagine more humble origins than those of the genius now cooking at Oregano's, who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Oregano's soon, hungry for more..”


            </p>

            <div className="d-flex flex-column align-items-center m-2  ">
                <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                <div className="mt-3">

                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Anton Ego</h2>

                <h6 className="text-primary p-0 m-0 text-right">Restaurant critic</h6>
                </div>
            </div>


        </div>
        <ul className=" col-2 d-flex flex-row p-0">
            <li style={{listStyle:"none" , height:"3.5vw" , width:"3.5vw"}}  className="bg-primary  mx-1  rounded-circle"></li>
            <li style={{listStyle:"none" , height:"3.5vw" , width:"3.5vw"}}  className="bg-primary  mx-1  rounded-circle"></li>
            <li style={{listStyle:"none" , height:"3.5vw" , width:"3.5vw"}}  className="bg-primary  mx-1  rounded-circle"></li>


        </ul>
           </div>


        </div>
    )
      };

      export default Testimonial