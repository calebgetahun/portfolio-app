import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faHtml5, faCss3, faSwift, faMatlab, faFlask, faPytorch } from "@fortawesome/free-brands-svg-icons";
import {faPython, faJava, faC, faJavascript} from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <h3 className="ml-3">{data.proficient}</h3>
                  <h3 className="ml-3">{data.familiar}</h3>
                </p>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Skills;
