import projects from "../../assets/projectList";
import Project from "./Project";

function ProjectPage() {
    return (
        <div>
            <div className="page-header">
                <h3>Projects</h3>
            </div>
            <div className="project-body">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectPage;