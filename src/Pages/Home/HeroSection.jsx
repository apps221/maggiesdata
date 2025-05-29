import { Link } from "react-scroll";

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
          <p className="hero--section-description">I'm a data analyst with a frontend development background who thrives on uncovering the <span class='spancolor'>WHY</span> behind the data. With skills in Excel, SQL, Tableau, Power BI, Python, and R, I turn complex data into clear, actionable insights.</p>
        </div>
        <div class='hero-btns'>
        <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
> Get in Touch</Link>
  <a class='resume-btn' href='../maggiehongdataresume.pdf' target='_blank'><button className='btn btn-primary'>Resume</button></a>
</div>
      </div>
      <div className="hero--section--img">
        <img class='roundedcorners' src="./img/maggie-2.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
