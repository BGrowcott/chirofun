import doc from "../../images/vecteezy_doctor-high-quality-4k-ultra-hd-hdr_30666538.jpg";
import "./about.css";

function About() {
  return (
    <section>
      <h1>team</h1>
      <div className="team container">
        <div className="row">
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default About;
