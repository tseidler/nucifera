import React, { Component } from 'react';

class MenuBar extends Component {
  render() {
    return (
      <div className="column is-narrow" id="menubar">
        <ul className="fa-ul">
          <li className="menu-item news">
            Nieuws
            <span className="fa-li">
              <i className="far fa-newspaper" />
            </span>
          </li>
          <li className="menu-item stream">
            Netwerkverkeer
            <span className="fa-li">
              <i className="far fa-comments" />
            </span>
          </li>
          <li className="menu-item groups">
            Groepen
            <span className="fa-li">
              <i className="far fa-hdd" />
            </span>
          </li>
          <li className="menu-item users">
            Gebruikers
            <span className="fa-li">
              <i className="far fa-users" />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
