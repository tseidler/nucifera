import React, { Component } from 'react';
import SplashLogo from '../../images/splash_logo.svg';

class ConnectToCoconutComponent extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <figure className="image is-square">
              <img src={SplashLogo} />
            </figure>
            <p>
              Vraag een code aan op <a href="https://coconut.ogd.nl/mobile">coconut.ogd.nl/mobile</a> om deze app toegang te geven tot je Coconut account.
            </p>
            <br />
            <div className="field">
              <input className="input is-medium" type="text" placeholder="AAAA-BBBB-CCCC" />
            </div>
            <div className="field">
              <button className="button is-fullwidth green">Koppelen</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ConnectToCoconutComponent;
