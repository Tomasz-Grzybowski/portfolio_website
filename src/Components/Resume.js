import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const certs = this.props.data.certs.map(function (cert) {
      return (
        <div key={cert.name}>
          <div className="row">

            <div className="nine columns main-col">
              <h2>{cert.name}</h2>

              <p className="info">{cert.issuer}<br />
                <em className="date">Expires on: {cert.exp}</em>
              </p>


            </div>
            <div className="three columns">
              <img
                className={"profile-pic"}
                src={cert.picture}
                alt="cert_image"
              />
            </div>
          </div>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = "orange";
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <script type='text/javascript' async src='//cdn.credly.com/assets/utilities/embed.js'></script>
          <div className="row certification">
            <div className="three columns header-col">
              <h1>
                <span>Certification</span>
              </h1>
            </div>

            <div className="nine columns main-col">{certs}</div>
            <div data-iframe-width='150' data-iframe-height='270' data-share-badge-id='0d528179-0d19-44a8-ac42-d674672b5344' data-share-badge-host='https://www.credly.com'></div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
