import Slider from '@bit/akiran.react-slick.slider';
import {Component} from "react"
import Pic from "../../../../Img/testimonial/osama.png";


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
                <h3 className='text-center'>Our Team</h3>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>

                <Slider {...settings}>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

                                <h5 className="text-primary p-0 m-0 text-right">24 years</h5>
                            </div>
                        </div>
                    </div>


                    <div className="pt-5 d-inline-flex flex-column  justify-content-center">
                        <div className="d-flex flex-column align-items-center m-2  ">
                            <img width="180px" height="180px" className="rounded-circle" src={Pic}/>
                            <div className="mt-3">

                                <h2 style={{fontFamily:"Sacramento"}} className="text-primary font-italic font-weight-bold m-0  ">Osama Aburabi'e</h2>

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

