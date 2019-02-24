import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Webdeveloper and Design</h3>
                            <div className="subheading mb-3">TelosGermany</div>
                            <ul>
                                <li>Responsive webdevelopment with HTML, CSS, Bootstrap and JavaScript</li>
                                <li>Media design with Photoshop and Illustrator</li>
                            </ul>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">since 11/2018</span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Fullstack Developer C# .NET</h3>
                            <div className="subheading mb-3">German eForensics GmbH</div>
                            <ul>
                                <li>Programming in C# in the .NET 4.5 Framework under the
                                    usage of current design patterns</li>
                                <li>Analysation and editing of fi ngerprint images and videos of
                                    the visible and infrared spectrum with the EmguCV library</li>
                                <li>GUI design and implementation with WPF</li>
                                <li>Software extension and optimization in respect to directly
                                    communicated client requirements</li>
                                <li>Implementation of customized data export versions in pdf,
                                    xml and various image formats after customer agreements</li>
                                <li>Added i18n standard for multilinguality</li>
                                <li>Definition of legitimate ISO9001 developing processes and
                                    their documentation</li>
                                <li>Execution of softwaretests</li>
                            </ul>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">11/2013 - 09/2018</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Webdeveloper Ruby on Rails</h3>
                            <div className="subheading mb-3">Alphajump GmbH</div>
                            <ul>
                                <li>Analyzation and design of websites for smartphones and
                                    tablets</li>
                                <li>Programming in Ruby in the Rails 3 Framework</li>
                                <li>GUI design with HTML, HAML, CSS and SASS</li>
                                <li>Maintenance of relational database schemas with MySQL</li>
                                <li>Extended data caching</li>
                                <li>Extended i18n standard of the software for multilinguality</li>
                            </ul>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">08/2012 - 07/2013</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Research Assistant</h3>
                            <div className="subheading mb-3">Project 'Chancenbrille' at the University of Koblenz-Landau</div>
                            <ul>
                                <li>Website maintenance and building of extensions with
                                    Drupal</li>
                                <li>Website and public media design</li>
                                <li>Recruitment of contact persons for founders</li>
                            </ul>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">07/2011 - 11/2013</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Object Planner</h3>
                            <div className="subheading mb-3">Fischer-Summerer Architectural Practice</div>

                        </div>
                        <div className="resume-date text-md-right">
                            <span className="date-time-stamp">08/2008 - 09/2010</span>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Experience;