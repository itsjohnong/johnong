import React from 'react';
import email from './email.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

const Contact = () => {
    return (
        <div id="contacts">
            <h1>Contact</h1>
            <p>Interested? I'd love to hear from you.</p>
            <div className="container">
                <div className="row">
                    <div className="col-3 border border-2 contact" onClick={() => window.open('mailto:itsjohnong@gmail.com?subject=Possible Job Offer')}>
                        <h4><img src={email} alt='' /> Email</h4>
                    </div>
                    <div className="col-3 border border-2 contact" onClick={() => window.open("https://github.com/itsjohnong?tab=repositories")}>
                        <h4><img src={github} alt='' /> Github</h4>
                    </div>
                    <div className="col-3 border border-2 contact" onClick={() => window.open("https://www.linkedin.com/in/john-ong-07091b208/")}>
                        <h4><img src={linkedin} alt='' /> LinkedIn</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;