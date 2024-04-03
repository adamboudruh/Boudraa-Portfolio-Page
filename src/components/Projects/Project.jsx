import github from './../../assets/images/icons/github-icon.png';

function Project({ project: { title, deployedLink, githubLink, imgPath }}) {
    const titleConcat = `${title}`;
    console.log(imgPath);
    return (
        <div className="project-container">
            <img src={imgPath} className='ss' alt="screenshot of project" />
            <div className='project-header'>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer" >{titleConcat}</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className='gitlink'>
                    <img src={github} alt="github profile" />
                </a>
            </div>
            
        </div>
    )
    
}

export default Project;