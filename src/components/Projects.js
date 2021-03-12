import React from 'react';
import img2 from './randomquote.png';
import img3 from './video.png';
import img4 from './markdown.png';
import img5 from './widgets.png';

const Projects = () => {

    return (
        <div className="container" id="projects">
            <h1>Projects</h1>
            <div className="row">
                <div className="col-6"> <img src={img2} alt='' id="randomquote"/>
                </div>
                <div className="col-6">
                    <h2>Random Quote Machine</h2>
                    Take a look here at 
                    <button type="button" className="btn btn-link" onClick={() => window.open("https://github.com/itsjohnong/RandomQuote")}>
                        Github!
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>Videos</h2>
                    Take a look here at 
                    <button type="button" className="btn btn-link" onClick={() => window.open("https://github.com/itsjohnong/yt.app")}>
                        Github!
                    </button>
                </div>
                <div className="col-6">
                    <img src={img3} alt='' id="videos" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={img4} alt='' id="markdown"/>
                </div>
                <div className="col-6">
                    <h2>Markdown Text Editor</h2>
                    Take a look here at 
                    <button type="button" className="btn btn-link" onClick={() => window.open("https://github.com/itsjohnong/markdown")}>
                        Github!
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>Widgets</h2>
                    Take a look here at 
                    <button type="button" className="btn btn-link" onClick={() => window.open("https://github.com/itsjohnong/widgets")}>
                        Github!
                    </button>
                </div>
                <div className="col-6">
                    <img src={img5} alt='' id="widgets" />
                </div>
            </div>
        </div>
    )
}

export default Projects;