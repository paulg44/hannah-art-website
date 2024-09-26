import "../css/about.css";
import selfPortrait from "../assets/images/hannah_profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="aboutInfo">
        <h2>A Bio</h2>
        <div className="aboutDescription">
          <div className="aboutText">
            <p>
              Hannah is a talented pencil artist known for her intricate and
              lifelike drawings, capturing emotion and detail with exceptional
              precision.
            </p>
            <p>
              Specializing in portraits and nature-inspired illustrations, her
              work blends realism with a touch of imaginative flair, creating
              pieces that feel both intimate and timeless.
            </p>
            <p>
              With a deep passion for her craft, Hannah has been honing her
              skills for several years, mastering shading techniques and the
              subtle nuances of pencil work. Hannah's dedication and unique
              artistic voice have earned them a feature in the art book [Book
              Title], where her work was showcased alongside other emerging
              artists.
            </p>
            <p>
              Driven by a love for storytelling through imagery, Hannah
              continues to explore the depths of human expression and natural
              beauty through the simplicity of pencil on paper.
            </p>
          </div>
          <div className="aboutImage">
            <img src={selfPortrait} alt="self portrait of the artist" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
