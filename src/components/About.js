import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0" >Wibke
                        <span className="text-primary">Baudach</span>
                    </h1>

                    <div className="subheading mb-5">45 Yurong Street, 2010 Darlinghurst · (+61) 452 265 902  ·
                        <a href="mailto:baudach.sw@gmail.com">baudach.sw@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am an enthusiastic and results-focused software
                        developer with 5+ years experience and a passion for
                        image analysation and editing. Confident handling of
                        video and multispectral data with current machine
                        learning algorithms are my favourite subjects.
                        Developing robust software with a great attention to
                        detail and easy maintainability is my goal.
                    <br></br><br></br>
                Working in a Startup company for so long, made me an
                allround talent rather than a specialist. But I am always
                eager to learn new technologies and to grow with the
                challenge.<br></br><br></br>
        For me, teamplay is as important as working independently.
            Being proactive and initiating necessary discussions
        are my way to advance projects.</p>
        </div>
    </section>
        );
    }
}

export default About;