import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
    this.extracurriculars = props.extracurriculars;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.university}</h3>
                  <div className="subheading mb-3">{data.degree}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                </div>
            
              </div>
            ))
          }
          <h3 className="mb-0"> Clubs and Extracurriculars</h3>
          <div className="subheading mb-3">{"Duke Ethiopian/Eritrean Student Transnational Association (DESTA), current Co-President, former VP and Freshman Liason"}</div>
          <div className="subheading mb-3">{"HackDuke, Planning Committee – Outreach Team"}</div>
          <div className="subheading mb-3">{"Duke Cubing Club, Vice President of Education and Organization"}</div>
          <div className="subheading mb-3">{"National Society of Black Engineers (NSBE), Member"}</div>
          <div className="subheading mb-3">{"The Chanticleer: Duke’s Yearbook, Photographer"}</div>
          {/* {
            this.extracurriculars.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.clubwithpos}</h3>
                  <p>{data.aboutclub}</p>
                </div>
              </div>
            ))
          }       */}
        </div>
      </section>
    );
  }
}

export default Education;