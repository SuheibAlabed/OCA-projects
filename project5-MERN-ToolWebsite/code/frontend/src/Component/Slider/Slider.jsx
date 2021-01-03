import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImg from "../../Img/home-img-1.jpg"
import "../../Style/Style.css"
import HomeImg2 from "../../Img/home-img-2.jpg"
import HomeImg3 from "../../Img/home-img-3.jpg"
import HomeImg4 from "../../Img/home-img-4.jpg"




function Slider(props){



    return(
        <div>
            <Carousel controls={false}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={props.img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="col-12">
                        <h3>Fresh Basil</h3>
                        <p className="mb-0">Mixed Greens, peppers, Anchoivies, Mozzarella, Artichokes</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="col-12">
                        <h3>Second slide label</h3>
                        <p className="mb-0">Onion, Carrot, Stick of Celery, Unsalted Butter, Beef</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="col-12">
                        <h3>Third slide label</h3>
                        <p className="mb-0">Bulb of Fennel, Peas, Flour, Eggs, Chicken stock</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>

    );
}

export default Slider;