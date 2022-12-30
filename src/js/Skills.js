import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/skills.css';
import { meta } from '../meta';

function Skills() {
    const [web, setWeb] = useState("");
    const [software, setSoftware] = useState("");
    const [languages, setLanguages] = useState("");

    useEffect(()=>{
        axios.get(meta.skills.web).then(({data})=>setWeb(data));
        axios.get(meta.skills.software).then(({data})=>setSoftware(data));
        axios.get(meta.skills.languages).then(({data})=>setLanguages(data));
    },[])

    return (
        <section id='skills' className='background4 color1 section'>
            <h2>Skills and Expertise</h2>

            <div id="skillbar">
                <span className='skill'>
                    <i className="fa fa-code"></i>
                    <h4>Web/App Development</h4>
                    <div>{web}</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-tv color1"></i>
                    <h4>Software Development</h4>
                    <div>{software}</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-pencil"></i>
                    <h4>Languages</h4>
                    <div>{languages}</div>
                </span>
            </div>
        </section>  
    );
};

export default Skills;
