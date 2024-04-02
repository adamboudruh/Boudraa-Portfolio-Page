import github from './../assets/images/icons/github-icon.png';
import twitter from './../assets/images/icons/twitter-icon.png';
import linkedin from './../assets/images/icons/linkedin-icon.png';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/adamboudruh" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github profile" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter profile" />
            </a>
            <a href="https://www.linkedin.com/in/adam-boudraa-17877525a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin profile" />
            </a>
        </footer>
    )
}

export default Footer;