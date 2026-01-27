import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/spinsync.png" // change

const title = "SpinSync"
const overview = `
Spin Sync is a personal project focused on creating an intelligent cycling class application. The app draws on my experience as a cycle instructor, including understanding how long it typically takes to create engaging and effective classes.

The application is hosted on Render and integrates the Spotify API with OAuth, allowing users to log in and access personalized music-driven workouts. Song features are analyzed to determine the type of drill and appropriate RPM for each segment of a class, making every session dynamically tailored to the music.

I use my own cycling classes as training data for the system, which allows the app to learn from real-world examples. I experimented with multiple machine learning algorithms and ultimately implemented a boosting approach for optimal performance in predicting class structure based on song features.

The frontend of the app is built with TypeScript and React, providing a responsive and interactive user experience while showcasing the integration of music analytics with fitness programming.
`;


const tools = ["Render", "Spotify API", "TypeScript", "OAuth", "React"]
const liveLink = "https://github.com/juliakpvelloso/SpinSync"

export default function SpinSync(){
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