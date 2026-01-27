import TopNav from "../assets/TopNav/TopNav";
import Button from "../assets/Button/Button";
import "./Projects.css"
import mainPhoto from "../assets/images/seer.png" // change

const title = "SEER"
const overview = `
SEER is a patent-pending computational tool designed to accurately quantify error rates in long-read DNA sequencing data. Its primary purpose is to enable the refinement of base-calling algorithms, improving the accuracy of quality scores and ensuring more reliable sequencing results. Central to the project is the application of Artificial Intelligence across multiple research activities. AI supports the development and expansion of the mathematical framework that underlies SEER, enhancing both research efficiency and the precision of pharmacogenomic technologies.

The design of SEER began with a focus on mathematical exploration. The initial goal was to develop a method for calculating confusion matrices based on sequencing reads and their corresponding ground truth sequences. Using DNA sequences obtained from Oxford Nanopore base-callers alongside reference sequences determined through Sanger Sequencing, SEER computes key metrics such as true positive rates, error rates, and sequence-to-sequence miscalculation rates. This step involved the derivation and implementation of equations that systematically quantify the accuracy and reliability of sequencing experiments.

Following the mathematical foundation, the team developed the software architecture of SEER. The program is organized into two primary classes. The experiment class represents individual sequencing experiments, each containing a reference major sequence and an array of sequencing reads. The determinator class manages multiple experiments, aggregating data to generate comprehensive confusion matrices and calculate error rates, true positive rates, and sequence-to-sequence miscalculation rates across all experiments. Extensive testing was conducted using custom-generated FastQ files to verify the program's ability to handle diverse scenarios and edge cases.

Current development efforts focus on extending SEER’s capabilities to further automate error rate calculations. The goal is to create a fully automated pipeline that can process raw sequencing signals and produce the same detailed error metrics as existing outputs. In parallel, a user-friendly interface is being designed to allow other research laboratories that use Nanopore technology to easily adopt SEER. This interface will provide an accessible solution for a problem that currently lacks an accurate standard for evaluating base-calling performance.

Finally, the team is preparing a research publication to document SEER’s methodology, results, and applications in sequencing accuracy assessment. This publication aims to contribute to the broader scientific community by offering a validated tool for understanding and improving the reliability of long-read sequencing experiments.
`;


const tools = ["Python", "C++", "Oxford Nanopore"]

export default function SEER(){
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