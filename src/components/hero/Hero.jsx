import React from "react";
import "./Hero.css";
import heroImg from "../../assets/phone.svg";

const Hero = ({myTheme}) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit villa Shop Landing Page. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae blanditiis officiis enim ullam error rem vitae neque
            repellendus recusandae, nam eum ad animi commodi.
          </p>
          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={heroImg} alt="phone" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
