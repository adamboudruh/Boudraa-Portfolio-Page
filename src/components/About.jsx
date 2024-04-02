import portrait from './../assets/images/adam-portrait.jpg';

function About() {
    return (
        <div>
            <div id="about-me-header">
                <h3>About Me</h3>
            </div>
            <div id="about-body">
                <div className="span3"></div>
                <div className="span6">
                    <img src={portrait} alt="portrait" id="portrait" />
                </div>
                
                <div className="span2"></div>
                <p id="">
                    Hello! Thanks for checking out my portfolio. My name is Adam Boudraa. I am a learning web developer and software engineer at the moment, soon to be fully fledged. I currently live in Seattle, WA. I like playing the trumpet, cooking, writing descriptive commit messages, and playing old cRPGs. I am well-versed with the MERN stack, Java, and MySQL, and I enjoy writing innovative applications and challenging myself using these technologies.
                </p>
                <div className="span2"></div>
            </div>
            
        </div>
    )
}

export default About;