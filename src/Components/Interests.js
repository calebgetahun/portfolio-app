import React, { Component } from 'react';
import cubes from '../Assets/rubikscubes.jpeg';
import origami from '../Assets/origami.jpeg';

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>{this.interests.paragraphOne}</p>
          <p>{this.interests.paragraphTwo}</p>
          <p> {this.interests.paragraphThree}</p>
            <div className="col-12">
              <img className="img-centered" src={cubes} alt="cubes"></img>
              <img className="img-centered" src={origami} alt="origami"></img>
            </div>
        </div>
      </section>
    );
  }
}

export default Interests;
