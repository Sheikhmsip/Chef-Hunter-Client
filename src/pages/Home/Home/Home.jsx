import React from 'react';
import Marquee from "react-fast-marquee";
import slider1 from '../../../assets/slide01.jpg'
import slider2 from '../../../assets/slide02.jpg'
import slider3 from '../../../assets/slide03.jpg'
import slider4 from '../../../assets/slide04.jpg'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div className='container mx-auto'>
            
            <Marquee speed={200} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider1} className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider2} className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider3} className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slider4} className="w-full h-[70vh]" />
                </div>
            </Marquee>
            <div className='grid grid-cols-3 gap-4 justify-between mt-5'>
            {
                chefs.map(chef => <Chef key={chef.id}
                chef={chef}></Chef>)
            }
            </div>
           
        </div>
    );
};

export default Home;