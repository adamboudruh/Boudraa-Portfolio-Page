import portrait1 from './../../assets/images/adam-portrait1.jpg';
import portrait2 from './../../assets/images/adam-portrait2.jpg';


function About() {
    return (
        <div>
            <div className='page-header'>
                <h3 className='h-font'>About Me</h3>
            </div>
            <div id="about-body">
                <div className="span3"></div>
                <div className="span6">
                    <img src={portrait2} alt="portrait" id="portrait" />
                </div>
                <div className="span2"></div>
                <p id="">
                    Hello! Thanks for checking out my portfolio. My name is Adam Boudraa. I am a web developer and software engineer. I currently live in Seattle, WA. I like playing the trumpet, cooking, writing descriptive commit messages, and playing old cRPGs. I am proficient in the MERN stack, Java, and MySQL, and I enjoy writing innovative applications and challenging myself using these technologies.
                </p>
                <div className="span2"></div>
            </div>
        </div>
    )
}

export default About;