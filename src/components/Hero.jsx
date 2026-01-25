import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="display-1">Julia Velloso</h1>
        <p className="body">
          Computer science student building thoughtful, human-centered software.
        </p>
      </div>

      <div className="hero-right">
        <p className="small">Currently</p>
        <p className="body">Senior @ University of Michigan</p>
      </div>
    </section>
  );
}
