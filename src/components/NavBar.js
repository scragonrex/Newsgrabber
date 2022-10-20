import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand text-light">News grabber</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to='/' className="nav-link text-light" aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to='/Business' className="nav-link text-light">Business</Link></li>
                <li className="nav-item"><Link to='/Health' className="nav-link text-light">Health</Link></li>
                <li className="nav-item"><Link to='/' className="nav-link text-light">General</Link></li>
                <li className="nav-item"><Link to='/Science' className="nav-link text-light">Science</Link></li>
                <li className="nav-item"><Link to='/Entertainment' className="nav-link text-light">Entertainment</Link></li>
                <li className="nav-item"><Link to='/Technology' className="nav-link text-light">Technology</Link></li>
                <li className="nav-item"><Link to='/Sports' className="nav-link text-light">Sports</Link></li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
