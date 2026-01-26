import TopNav from "./TopNav"; 
import nextdoorPhoto from "../assets/nextdoor.png";
import seerPhoto from "../assets/seer.png"
import Button from "./Button";
import "./Projects.css"
import "./ProjectSummaries"
import { nextdoorShort } from "./ProjectSummaries";
export default function Projects() {
    return(
        <div>
            <TopNav></TopNav>
            <section className="vertical-container">
                <h1 className="heading-1">Projects</h1>
                <h1 className="heading-4"> A collection of my personal, academic and professional projects. </h1>

                <section className="vertical-container">
                    <section className="horizontal-container">
                        <div className="item center-photo">
                            <img
                              src={nextdoorPhoto}
                              style={{ width: "600px", height: "auto" }}
                            />
                        </div>
                         <section className="description-container">
                            <h1 className="heading-2">Nextdoor</h1>
                            <p className="body">{nextdoorShort}</p>
                            <Button text="Learn More" fill={true} />
                         </section>
                    </section>
                    <section className="horizontal-container">
                        <div className="item center-photo">
                            <img
                              src={seerPhoto}
                              style={{ width: "600px", height: "auto" }}
                            />
                        </div>
                         <section className="description-container">
                            <h1 className="heading-2">SEER</h1>
                            <p className="body">{nextdoorShort}</p>
                            <Button text="Learn More" fill={true} />
                         </section>
                    </section>
                </section>
            </section>
        </div>
    )
}
