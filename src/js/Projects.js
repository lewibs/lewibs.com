import '../css/projects.css';
import Project from './Project';
import React,{ useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';
import { meta } from '../meta';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 985,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
                autoplay: false
            }
        }
    ]
};

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axios.get(meta.projects).then((res)=>{
            setProjects(res.data);
        });
    },[])

    return (
        <section className='background2 section'>
            <div id='projects'>
                <h2>Projects</h2>

                <div className='slider'>
                    <Slider {...settings}>
                        {
                            projects.map(({
                                image,
                                title,
                                link,
                                info,
                            }, i)=>{
                                console.log(image, title, link, info);
                                return (
                                    <div key={i}>
                                        <Project 
                                            image={image}
                                            title={title}
                                            link={link}
                                            info={info}
                                        />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}