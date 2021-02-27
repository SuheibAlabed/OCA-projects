import Slider from '@bit/akiran.react-slick.slider';
import {Component} from "react"
import Pic from "../../../../Img/testimonial/osama.png";
import Pic2 from "../../../../Img/testimonial/sara.png"
import Pic3 from "../../../../Img/testimonial/saja.png"
import Pic4 from "../../../../Img/testimonial/suhib.png"
import Pic5 from "../../../../Img/testimonial/hiba.png"


export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay:true ,
            responsive: [
                {
                    breakpoint: 1172,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                    }
                },
                {
                    breakpoint: 872,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container justify-content-center ">
                <h3 className='text-center'>Our WebSite Chefs</h3>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>

                <Slider {...settings}>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black",borderRadius:"15px",border:"5px solid #a6a087"}} src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Ahmad E'mar</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black", borderRadius:"15px",border:"5px solid #a6a087"}} src={Pic2}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Sara Eswed</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black", borderRadius:"15px",border:"5px solid #a6a087"}} src={Pic3}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Saja Dahamsheh</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black" ,borderRadius:"15px",border:"5px solid #a6a087"}} src={Pic4}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Suhib Alabed</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black" ,borderRadius:"15px",border:"5px solid #a6a087"}} src={Pic5}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Heba Bilbeisi</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="200px" style={{backgroundColor:"black" ,borderRadius:"15px",border:"5px solid #a6a087"}} src={"https://avatars1.githubusercontent.com/u/71584197?s=460&u=acdb0910edcf720810881c66bea899d5ba4a0a59&v=4"}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Leen Awad</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>




                </Slider>
            </div>
        );
    }
}

const cssstyle = `
.container {
  margin: 0 auto;
 
  width: 85vw;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
`

