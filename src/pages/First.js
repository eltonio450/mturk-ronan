import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ehess from '../images/Logo_ehess.svg.png';
import ens from '../images/logo_ens.png';
import CNRS from '../images/image_preview.png';

const imStyle = {
  height: '100px',
  width: '100px',
};
class First extends Component {
  render() {
    return (
      <Fragment>
        <div className="slide" id="introduction" align="center">

          <img src={ehess} style={imStyle} alt="EHESS" />
          <img src={ens} style={imStyle} alt="ENS" />
          <img src={CNRS} style={imStyle} alt="CNRS" />
        </div>
        <p id="logo-text">
Laboratoire de Sciences Cognitives et Psycholinguistique
        </p>
        <p className="block-text">
                        This is an experiment that tests aspects of intuitive physics learning. The experiment involves
                        watching video sequences. You will not be asked to listen to anything, but please make sure to
                        watch every video entirely.
          {' '}
          <br />
          <br />
          {' '}
The experiment lasts approximately 7 minutes.
        </p>

        <Link to="/instruction_1">
Start
        </Link>


        <p className="block-text" id="legal">
By answering the following questions, you are participating in
                        a study being performed by researchers at the LSCP. If you have questions about this research,
                        please contact us at
          <a href="mailto://emmanuel.dupoux@gmail.com">
emmanuel.dupoux@gmail.com
          </a>
.
                        You must be at least 18 years old to participate. Your participation in this research is
                        voluntary. You may decline to answer any or all of the following questions. You may decline
                        further participation, at any time, without adverse consequences. Your anonymity is assured; the
                        researchers who have requested your participation will not receive any personal information
                        about you. Note however that we have recently been made aware that your public Amazon.com
                        profile can be accessed via your worker ID if you do not choose to opt out. If you would like to
                        opt out of this feature, you may follow instructions available
          <a
            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=16465241"
          >
here
          </a>
.
        </p>
      </Fragment>


    );
  }
}

export default First;
