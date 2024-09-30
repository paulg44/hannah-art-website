import "../css/contact.css";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid>
      <section id="contact" className="contact">
        <h2>Contact & Customs</h2>
        <p className="contactText">
          If you would like a custom drawing, or for any other correspondence
          please contact me using the email address below. I will get back to
          you as soon as possible.
        </p>
        <a href="spannerh90@hotmail.com" className="emailElement">
          spannerh90@hotmail.com
        </a>
        <div className="box boxOne"></div>
        <div className="box boxTwo"></div>
        <div className="box boxThree"></div>
      </section>
    </Container>
  );
}

export default Contact;
