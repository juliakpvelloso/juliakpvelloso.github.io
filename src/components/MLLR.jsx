import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/mllr.png" // change

const title = "MLLR"
const overview = `
Machine Learning for Lyrics is a natural language processing project that predicts the artist of a song based on its lyrics. By leveraging a Bag of Words model and a Log Probability Algorithm, the program analyzes lyrical patterns and styles to classify songs into categories corresponding to five top-streamed artists: Drake, Bad Bunny, Taylor Swift, The Weeknd, and Ed Sheeran.

The project demonstrates the intersection of natural language processing and machine learning, showing how computational methods can capture and analyze artistic styles. Lyrics are represented using a Bag of Words model, which focuses on word presence without considering order or repetition. The prediction algorithm calculates the most likely artist for a song using a logarithmic probability formula, assigning the label with the highest score.

The program was trained on the top 10 most streamed songs from each artist and evaluated on 15 test songs, achieving 67% accuracy by correctly identifying 10 of the 15 songs. Key features include analysis based purely on word content, probabilistic modeling with log probabilities, and the ability to highlight stylistic similarities and differences between artists.

The algorithm performed well distinguishing distinct artists such as Bad Bunny and Drake, but faced challenges with stylistically similar artists like Taylor Swift and Ed Sheeran. Some songs were misclassified due to overlapping vocabulary. Future improvements include incorporating unique “buzzwords” for each artist and extending the model to include musical features such as rhythm, tempo, and instrumentation.

This project builds upon a machine learning assignment from EECS 280 at the University of Michigan, with contributions from Andrew DeOrio, James Juett, and Amir Kamil.
`;

const tools = ["C++"]

export default function MLLR(){
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
            </section>
        </div>
    )
}