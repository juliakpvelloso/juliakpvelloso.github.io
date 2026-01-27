import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/ems.png" // change

const title = "EMS"
const overview = `
This is a prototype I created entirely in Excel during my internship at EMS Pharmaceuticals in Brazil in the summer of 2023. Despite Excel not being designed to create a high-performance user experience, I was able to create a navigable prototype.

The challenge I was working to overcome was that pharmaceutical sales reps at EMS have little time during visits with medical professionals, making it difficult to efficiently advertise products. My goal was to create an algorithm that would use data about medical professionals to generate messages that would help a pharmaceutical sales rep decide the best course of action when promoting medications.

The algorithm uses three statistics about doctors to generate the messages: AUDIT (the quantity of prescriptions made by the doctor), UNIT (the amount of investment made by EMS on the doctor), and CAT (the prescriptive relevance of the doctor). Doctors are then categorized into six different groups based on whether they received investment and whether they increased, decreased, or maintained their prescriptions of EMS products.

The prototype allows sales reps to type in the name of a doctor and see an interface filled with data about the doctor, alongside a personalized message. The message guides the sales rep on the best way to interact with the doctor based on the data. The algorithm was created with the help of top pharmaceutical sales reps in the company, who shared their best practices for each type of doctor.

After creating the prototype, I deployed it with seven of the top sales reps at EMS and asked them to test it. All representatives agreed that the interface was incredibly useful and stated they would use it if it were available on OneDoc, the platform used by reps to track doctor visits.
`;

const tools = ["Microsoft Excel"]

export default function EMS(){
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