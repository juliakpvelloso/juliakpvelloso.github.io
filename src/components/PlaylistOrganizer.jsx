import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/playlistorganizer.png" // change

const title = "Playlist Organizer"
const overview = `
This project was inspired by my personal experience of spending countless hours creating road trip playlists in Excel, meticulously crafting the perfect flow of energy and mood for each journey. I wanted to automate this process and develop a program that could replicate this kind of playlist curation with precision and creativity.

The program accepts a CSV file (dataset.csv) containing detailed song attributes, including artist, album, track name, popularity, danceability, energy, and more. From this data, a subset of key attributes is used to calculate an energy value for each song, which serves as the foundation for playlist organization.

Key features include energy-based organization, where playlists begin with songs of the highest energy and progressively transition to lower energy levels to create a dynamic listening experience. The program uses probability-driven transitions to determine whether the next song increases, decreases, or maintains the current energy level. At the start, higher energy transitions are more likely, but over time the probability shifts to favor lower energy levels. To ensure variety, consecutive songs by the same artist are avoided unless necessary.

The subset of attributes used in the program includes danceability, energy, loudness, acousticness, valence, tempo, popularity, and mode. These attributes help the program intelligently organize songs to produce a smooth and engaging listening experience.

This project transforms playlist creation into an intelligent and efficient process, combining automation and artistry inspired by a passion for road trips and music curation. Users can provide a CSV dataset, and the program efficiently organizes tracks for a cohesive flow of energy and mood. 

Acknowledgments include Kaggle for providing the dataset.csv file and detailed information on column names, which served as a critical resource for this project.
`;

const tools = ["C++"]
const liveLink = "https://github.com/juliakpvelloso/PlaylistOrganizer"

export default function PlaylistOrganizer(){
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