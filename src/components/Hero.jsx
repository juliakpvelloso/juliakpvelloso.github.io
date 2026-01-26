import "./Hero.css";
import "./Nav.css"
import juliaPhoto from "../assets/julia.png";

export default function Hero() {
  return (
    <div>
      <header className="top-nav">
  <nav>
    <button className="nav-button nav-bar active">About</button>
    <button className="nav-button nav-bar">Projects</button>
  </nav>
</header>

      <section className="horizontal-container">
  {/* Left text */}
  <div className="item left-right">
    <h1 className="display-1">I'm Julia,</h1>
    <h1 className="display-1">
      a <span className="display-blue">software engineer</span>
    </h1>
  </div>

  {/* Center photo */}
  <div className="item center-photo">
    <img
      src={juliaPhoto}
      alt="Portrait of Julia"
      style={{ width: "700px", height: "auto" }}
    />
  </div>

  {/* Right text */}
  <div className="item left-right">
    <p className="heading-4">About Me</p>
    <p className="body">I’m currently a senior at the University of Michigan studying computer science. Outside of class, you’ll usually find me reading, playing guitar, listening to music, or watching a Michigan football game — go blue!</p>
    <p className="heading-4">My Work</p> 
    <p className="body">I’ve worked end to end across backend, frontend, and iOS, and I’m particularly interested in using machine learning to build smarter, better products.</p>
 
  </div>
</section>
    </div>
  );
}
