import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">M.Sc. in Computervisualistics</h3>
                            <div className="subheading mb-3">University of Koblenz-Landau, German Grade 1.4</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">10/2015 - 09/2018</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">B.Sc. in Computervisualistics</h3>
                            <div className="subheading mb-3">University of Koblenz-Landau, German Grade 2.0</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">10/2010 - 09/2015</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">B.A. in Architecture</h3>
                            <div className="subheading mb-3">University of Applied Sciences Koblenz, German Grade 2.3</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">10/2006 - 02/2010</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;