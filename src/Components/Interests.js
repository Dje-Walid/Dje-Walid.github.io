import React, { Component } from 'react';

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Stage 1ère année</h2>
          <ul className="fa-ul mb-0">
          <p>{this.interests.paragraphOne}<a href="https://www.monkey-locky.com/">https://www.monkey-locky.com/</a></p>
          <p className="mb-0">{this.interests.paragraphTwo}</p>
          <br></br><br></br>
          </ul>
          <h2 className="mb-5">Stage 2ème année</h2>
          <ul className="fa-ul mb-0">
          <p>{this.interests.paragraphThree}</p>
          <p className="mb-0">{this.interests.paragraphFour}</p>
          </ul>
        </div>
      </section>
    );
  }
}

export default Interests;