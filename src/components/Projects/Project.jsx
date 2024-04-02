function Project({project}) {
    <div className="container card">
        <img src={project.imagePath} alt="screenshot of project" />
        <h4 href={project.deployedLink}>{project.title}</h4>
        <a href={project.githubLink}></a>
    </div>
}

export default Project;