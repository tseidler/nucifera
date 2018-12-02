import React, { Component } from 'react';
import SplashLogo from '../../images/splash_logo.svg';
import '../assets/stylesheets/components/connectToCoconut.scss';

class ConnectToCoconutComponent extends Component {
  validateAndConnect(event) {
    let coconutApiCode = document.querySelector('#api-code').value;
    coconutApiCode = coconutApiCode.trim().replace('-', '');

    alert('api code: ', coconutApiCode);
  }
  render() {
    return (
      <section className="hero is-fullheight connect-keycode">
        <div className="hero-body">
          <div className="container">
            <figure className="logo">
              <img src={SplashLogo} />
            </figure>
            <p>
              Vraag een code aan op <a href="https://coconut.ogd.nl/mobile">coconut.ogd.nl/mobile</a> om deze app toegang te geven tot je Coconut account.
            </p>
            <br />
            <div className="field">
              <input className="input is-medium" type="text" id="api-code" placeholder="AAAA-BBBB-CCCC" />
            </div>
            <div className="field">
              <button className="button is-fullwidth green" onClick={e => this.validateAndConnect(e)}>
                Koppelen
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ConnectToCoconutComponent;
