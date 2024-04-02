import './../styles/nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
    const [sliderClass, setSliderClass] = useState('start-about');

    function changeSlider(newClass){ setSliderClass(newClass) }

    return (
        <nav>
                   <Link key={1} to="/" onClick={()=>changeSlider("start-about")}>About</Link>
                   <Link key={2} to="/projects" onClick={()=>changeSlider("start-projects")}>Projects</Link>
                   <Link key={3} to="/contact" onClick={()=>changeSlider("start-contact")}>Contact</Link>
                   <Link key={4} to="/resume" onClick={()=>changeSlider("start-resume")}>Resume</Link>
                   <div className={`animation ${sliderClass}`}></div>  
        </nav>
    )
}

export default Navigation;