import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img className="logo" src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span>Meu Perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}
