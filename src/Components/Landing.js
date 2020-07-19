import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5 bold">{"Gaithersburg, MD | Durham, NC"}</div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={"mailto:caleb.getahun@duke.edu"}>
              <FontAwesomeIcon icon={faInbox} />
            </a>
            <a href={"Tel: 3018280305"}>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
