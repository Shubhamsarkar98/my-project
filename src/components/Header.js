import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div><section className="main-menu">

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu"> 
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Award Search
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/"><i className="fas fa-sliders-h fa-fw"></i> Advanced Search</Link></li>
                <li><Link className="dropdown-item" to="/">Keyword Search</Link></li>
            
                <li><Link className="dropdown-item" to="/">WIRED</Link></li>
              </ul>
            </li>
               <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/login">Profile</Link></li>
                <li><Link className="dropdown-item" to="/forget">Change Password</Link></li>
                <li><Link className="dropdown-item" to="/">Log Out</Link></li>
              </ul>
            </li>
         </ul>
        </div>
      </div>
    </nav>
    
    </section></div>
  )
}

export default Header