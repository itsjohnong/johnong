import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">John Ong</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/projects" className="nav-link" aria-current="page" href="#">
                        <div className="btn-group">
                        <div href="#" data-toggle="collapse" data-target=".navbar-collapse.show" id="projectsBtn">Projects</div>
                            <button className="btn dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => window.open("https://randomquote-seven.vercel.app/")}>
                                    Random Quote Machine
                                </a>
                                <a className="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => window.open("https://videos-hooks-peach-kappa.vercel.app/")}>
                                    Videos
                                </a>
                                <a className="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => window.open("https://markdown-lake.vercel.app/")}>
                                    Markdown Editor
                                </a>
                                <a className="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => window.open("https://widgets-eight-gules.vercel.app/")}>
                                    Widgets
                                </a>
                            </div>
                        </div>
                        </Link>
                        <Link to="/about" className="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">About</Link>
                        <Link to="/contact" className="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</Link>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;