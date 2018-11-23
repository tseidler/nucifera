import React, { Component } from 'react';

class ConnectToCoconutComponent extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <figure className="image is-128x128">
            <img src="./images/splash_logo.svg" />
          </figure>
          <div className="container">
            <h1>Coconutgebruiker koppelen</h1>
            <p>Voordat je de Coconut app kunt gebruiken zal je eerst je coconut account moeten koppelen. Dit doe je als volgt:</p>
            <ol>
              <li>
                Open een browser en ga naar <a href="https://coconut.ogd.nl/mobile">coconut.ogd.nl/mobile</a>
              </li>
              <li>Vul hier een naam voor dit toestel in en klik op 'Vraag code aan'</li>
              <li>Vul die code hieronder in</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default ConnectToCoconutComponent;
