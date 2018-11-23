import React, { Component } from 'react';

class ConnectToCoconutComponent extends Component {
  render() {
    return (
      <div id="mainContent" className="column">
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
    );
  }
}

export default ConnectToCoconutComponent;
