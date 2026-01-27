import TopNav from "../assets/TopNav/TopNav"; 
import {projectSummaries} from "../data/ProjectSummaries";
import Button from "../assets/Button/Button";
import "./Projects.css"

export default function Projects() {
    return (
        <div>
            <TopNav />
            <section className="vertical-container">
                <h1 className="heading-1">Projects</h1>
                <h1 className="heading-4">
                    A collection of my personal, academic and professional projects.
                </h1>

                <section className="vertical-container larger-gap">
                    {projectSummaries.map((project) => (
                        <section key={project.id} className="horizontal-container">
                             <img
                                src={project.photo}
                                style={{ width: "600px", height: "auto" }}
                                alt={project.title}
                            />
                            <section className="description-container">
                                <h1 className="heading-2">{project.title}</h1>
                                <p className="body">{project.summary}</p>
                                <Button text="Learn More" fill={true} href={project.link} />
                            </section>
                        </section>
                    ))}
                </section>
            </section>
        </div>
    );
}

