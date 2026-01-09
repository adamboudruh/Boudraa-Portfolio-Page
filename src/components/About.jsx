import portrait1 from './../../assets/images/adam-portrait1.jpg';
import portrait2 from './../../assets/images/adam-portrait2.jpg';
import resume from './../../assets/Adam_Boudraa_Resume.pdf';


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
                    Hello! Thanks for checking out my portfolio. My name is Adam Boudraa. I am a software engineering student at Oregon State University (graduating in June 2026) and currently a software engineer intern at Basys Processing. I am proficient with React, Javascript, C#, Microsoft SQL Server, and more. In my free time I enjoy playing the trumpet, cooking with my girlfriend, modding gaming handhelds, and playing old RPGs. Feel free to check out some of my projects or download <a download="Adam_Boudraa_Resume" href={resume}>my resume</a> to see more about my skills and experience!
                </p>
                <div className="span2"></div>
            </div>
        </div>
    )
}

export default About;