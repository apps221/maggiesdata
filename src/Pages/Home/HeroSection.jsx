import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Maggie</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data</span>{" "}
            <br />
            Analyst
          </h1>
          <p className="hero--section-description">
            I'm a data analyst with a background in <br />frontend development that loves to figure out <br></br>the <span class='spancolor'>WHY</span>.
           
          </p>
        </div>
        <Link to='Contact' smooth={true}><button className="btn btn-primary">Get In Touch</button></Link>
      </div>
      <div className="hero--section--img">
        <img class='roundedcorners' src="./img/hong-7.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
