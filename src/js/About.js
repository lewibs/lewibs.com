import Button from './Button';
import '../css/about.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {meta} from "../meta";

function About() {
    const [about, setAbout] = useState("");

    useEffect(async ()=>{
        axios.get(meta.about)
        .then((res)=>{
            setAbout(res.data);
        })
    },[])

    return (
        <section className='section background2 aboutMe' >
            <div className='before' />
            <div id="aboutMe">
                <div className='grid background2'>
                    <img src='../images/BenjaminLewis.PNG' alt="Benjamin Lewis" />
                    <h1 className='gridItem'>Hey, I'm Benjamin</h1>
                    <h4 className='gridItem color3'>I Make Stuff</h4>
                    <div className='about gridItem'>
                       {about}
                    </div>
                    <Button className='resume gridItem background5 color1' text='Resume' href='benjamin_resume.pdf' />
                </div>
            </div>
        </section>
    );
}

export default About;