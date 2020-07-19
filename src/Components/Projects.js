import React, { Component } from 'react';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects (past and what I'm currently working on!)</h2>
          {/* <ul className="fa-ul mb-0"> */}
          {
            this.projects.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.title}</h3>
                  <p>{data.projectDetails}</p>
                  <p>{data.techused}</p>
                </div>
              </div>
            ))
          }
          {/* </ul> */}
        </div>
      </section>
    );
  }
}

export default Projects;
