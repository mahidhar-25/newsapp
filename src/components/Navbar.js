import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Cat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                //   onClick={this.props.toggleCategory("general", "/")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                //   onClick={this.props.toggleCategory("general", "/")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Business"
                //   onClick={this.props.toggleCategory("business", "/Business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  href="/Entertainment"
                //   onClick={this.props.toggleCategory(
                //     "entertainment",
                //     "/Entertainment"
                //   )}
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/General"
                //   onClick={this.props.toggleCategory("general", "/General")}
                >
                  General
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/Sports"
                //   onClick={this.props.toggleCategory("sports", "/Sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/Business"
                //   onClick={this.props.toggleCategory("business", "/Business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Health"
                //   onClick={this.props.toggleCategory("health", "/Health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  href="/Science"
                //   onClick={this.props.toggleCategory("science", "/Science")}
                >
                  Science
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/Technology"
                //   onClick={this.props.toggleCategory(
                //     "technology",
                //     "/Technology"
                //   )}
                >
                  Technology
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
