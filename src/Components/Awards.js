import React, { Component } from 'react';
import fqlvl1 from '../Assets/fqlvl1.png';
import fqlvl2 from '../Assets/fqlvl2.png';
import ftlvl1 from '../Assets/fasttracklvl1.png';
import ftig from '../Assets/fasttrackig.png';


class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Projet Unity3D : The forgotten quest</h2>
          <ul className="fa-ul mb-0">
          <p>{this.awards.fqdescription}</p>
          <p className="mb-0">{this.awards.fqmsg1}</p>
          <br></br>
          <img className="img-fluid mx-auto mb-2" src={fqlvl1} alt=""></img>
          <img className="img-fluid mx-auto mb-2" src={fqlvl2} alt=""></img>
          <br></br><br></br>
          </ul>
          <h2 className="mb-5">Projet Unreal Engine 4 : Fast Track</h2>
          <ul className="fa-ul mb-0">
          <p>{this.awards.ftdescritpion}</p>
          <p className="mb-0">{this.awards.ftmsg1}</p>
          <br></br>
          <img className="img-fluid mx-auto mb-2" src={ftlvl1} alt=""></img>
          <img className="img-fluid mx-auto mb-2" src={ftig} alt=""></img>
          </ul>
        </div>
      </section>
    );
  }
}

export default Awards;