/* eslint-disable jsx-a11y/anchor-is-valid */ // href #
import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../index.css";
import logo from "./logo.svg";


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container h-flex">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" /> {/* <img></img>  !!! */}
          </Link>
          <nav className="links">
            <ul>
              <li>
                <Link to="/" className="menu__links">Лента</Link>
              </li>
              <li>
                <Link to="/Profile" className="menu__links">Профиль</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}