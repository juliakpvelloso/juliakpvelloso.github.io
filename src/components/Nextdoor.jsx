import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/nextdoor.png" // change

const title = "Nextdoor"
const overview = `
During my internship at Nextdoor, I led a project aimed at increasing user engagement and fostering a stronger sense of community by encouraging users to complete their profiles with photos, bios, and other personal details. I collaborated closely with the design team to develop multiple iterations of the visual interface, discussing the pros and cons of each option with both iOS and Android leads. We ultimately landed on a carousel design featuring buttons for different profile tasks and a profile completion percentage meter. This design also incorporated a celebratory confetti animation to reward users for completing their profiles.

I created a detailed engineering requirements document and a comprehensive timeline to ensure all work stayed on track. On the web frontend, I implemented the feature using TypeScript and React, navigating a large existing codebase while striving to maintain consistency with existing patterns and reuse as much code as possible. On the backend, I built a GraphQL schema in Python to serve the necessary data, carefully deciding whether to reuse existing schemas or create new ones, and determining the most efficient way to organize and send data to the frontend. I also developed a custom React hook to fetch and utilize this data in the frontend.

One of the biggest challenges was ensuring the profile completion tracker behaved correctly: it needed to disappear for users who had completed their profiles while still allowing confetti to display once upon completion. This required carefully managing multiple variables within the codebase. After experimenting with different approaches and consulting with my mentor, I utilized the 'isSeen' variable, normally used to display content only once, to control whether the tracker appeared. Additionally, I implemented a 'handleUnload' function to manage tracker disappearance after page closure, ensuring a smooth user experience.

For the iOS implementation, I learned Swift for the first time and worked within a large codebase, producing comprehensive documentation so a coworker could complete the feature after I finished my internship.

The results were measurable and impactful: a 3% increase in 3-day active retention and a 218% increase in completed profiles. This project strengthened my skills in cross-platform engineering, frontend-backend integration, collaborative design iteration, and problem-solving in complex codebases.
`;

const tools = ["Python", "React", "TypeScript", "Swift", "GraphQL"]
const liveLink = "https://nextdoor.com/profile/"

export default function Nextdoor(){
    return (
        <div>
            <TopNav></TopNav>
            <section className="vertical-container project-page">
                <h1 className="heading-1">{title}</h1>
                <img
                    src={mainPhoto}
                    style={{ width: "600px", height: "auto" }}
                />
                <h1 className="heading-2">Project Overview</h1>
                <p className="body">{overview}</p>
                <h1 className="heading-2">Tools Used</h1>
                <section className="horizontal-container">
                    {tools.map((tool) => (
                        <Button text={tool} fill={false}/>
                    ))}
                </section>
                <h1 className="heading-2">See It Live</h1>
                <Button text="Project Link" fill={true} href={liveLink} large={true}/>
            </section>
        </div>
    )
}