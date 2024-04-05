import './../styles/nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
    const [sliderClass, setSliderClass] = useState('about');

    function changeSlider(newClass){ setSliderClass(newClass) }

    return (
        <nav>
                   <Link key={1} to="/" onClick={()=>changeSlider("about")}>About</Link>
                   <Link key={2} to="/projects" onClick={()=>changeSlider("projects")}>Projects</Link>
                   <Link key={3} to="/contact" onClick={()=>changeSlider("contact")}>Contact</Link>
                   <Link key={4} to="/resume" onClick={()=>changeSlider("resume")}>Resume</Link>
                   <div className={`animation ${sliderClass}`}></div>  
        </nav>
    )
}

export default Navigation;