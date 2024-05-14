import React from 'react'
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/router';

function LeftNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className='slickArrowRight'
            onClick={onClick}
        >
            <FaAngleRight />

        </div>
    );
}

function RightNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className='slickArrow'
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftNavButton />,
    prevArrow: <RightNavButton />,
};

export default function PortfolioSlider() {
    const router = useRouter()

    return (
        <div className='my-5 p-3  portfolioMain' >
            <div className="slider-container p-lg-5">
                <Slider {...settings} >
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Commercial </h1>
                            <hr/>
                            <h2>Explore Our Comprehensive Commercial Portfolio with Detailed Plans</h2>
                            <p>Dive into our extensive collection of commercial design projects that showcase our mastery across various formats. From the dynamic and engaging animations that bring design concepts to life to detailed PDF files outlining architectural specifics, our portfolio is designed to provide a full spectrum view of our capabilities.</p>

                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='row'>
                                <div className='col-6'> <img src='/images/interior.png' style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img src='/images/Group - 1.png' style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img src='/images/Group - 1 (1).png' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img src='/images/Group - 1 (2).png' style={{ width: '100%' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Residential </h1>
                            <hr/>
                            <h2>Discover Elegance and Innovation in Our Residential Portfolio</h2>
                            <p> Our portfolio spans a range of styles, offering everything from serene interior spaces to bold exterior designs, brought to life through vivid animations and meticulously prepared PDF files. Experience how our thoughtful designs transform living spaces into personalized sanctuaries that echo the unique tastes and lifestyles of our clients, all while maintaining the highest standards of quality and creativity.</p>

                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='row'>
                                <div className='col-6'> <img src='/images/4.png' style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img src='/images/3.png' style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img src='/images/1.png' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img src='/images/Group - 1 (2).png' style={{ width: '100%' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Landscape </h1>
                            <hr/>
                            <h2>Immerse Yourself in Nature with Our Landscape Design </h2>
                            <p>Explore the art of outdoor living through our landscape design portfolio, which highlights our expertise in creating harmonious environments that blend form, function, and sustainability. Each project, whether a tranquil garden, a robust outdoor entertainment area, or an innovative green space, is showcased through detailed PDF files and engaging animations that capture the essence of our designs.</p>

                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='row'>
                                <div className='col-6'> <img src='/images/5.png' style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img src='/images/3.png' style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img src='/images/2.png' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img src='/images/Group - 1 (2).png' style={{ width: '100%' }} /></div>
                            </div>
                        </div>

                    </div>
                </Slider>
                <div className='portfolioFooter '>

                    <button className='order-lg-1 order-md-1' onClick={() => router.push('/ArchitecturePlans')}>See All Projects <FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    )
}
