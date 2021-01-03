import Slider from "../../Component/Slider/Slider"
import Event from "./Component/Event/Event"
import Story from "./Component/Story/Story"
import Testimonial from "./Component/Testimonial/Testimonial"
import Team from "./Component/Team/Team"
import bg from "../../Img/body-bg.jpg"
import Newspaper from "../../Component/Newspaper/Newspaper"
import HomeImg2 from "../../Img/home-img-2.jpg"
import HomeImg3 from "../../Img/home-img-3.jpg"
import HomeImg4 from "../../Img/home-img-4.jpg"

function Home() {
    document.title = "Oregano | Home Page";
    document.getElementsByTagName("META")[3].content = "website for ordering elegant italian food with high quality and standards pf cooking and making. You can order main italian dishes, pizzas and sweets";

    return (
        <div style={{ backgroundImage: `url(${bg})` }}>

            <Slider img1={HomeImg3} img2={HomeImg2} img3={HomeImg4} />
            <Event />
            <Story />
            <Testimonial />
            <div className="jumbotron justify-content-center bg-transparent" >

                <Team />
            </div>
            <Newspaper />
        </div>
    )
}

export default Home;