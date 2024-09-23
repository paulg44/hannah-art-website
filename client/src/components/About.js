import "../css/about.css";
import selfPortrait from "../assets/images/harley_hannah.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="aboutInfo">
        <h2>A Bio</h2>
        <p>
          Hannah is a talented pencil artist known for their intricate and
          lifelike drawings, capturing emotion and detail with exceptional
          precision. Specializing in portraits and nature-inspired
          illustrations, their work blends realism with a touch of imaginative
          flair, creating pieces that feel both intimate and timeless. With a
          deep passion for the craft, Hannah has been honing her skills for
          several years, mastering shading techniques and the subtle nuances of
          pencil work. Their dedication and unique artistic voice have earned
          them a feature in the art book [Book Title], where their work was
          showcased alongside other emerging artists. Driven by a love for
          storytelling through imagery, Hannah continues to explore the depths
          of human expression and natural beauty through the simplicity of
          pencil on paper.
        </p>
      </div>
      <img src={selfPortrait} alt="self portrait of the artist" />
    </section>
  );
}

export default About;
