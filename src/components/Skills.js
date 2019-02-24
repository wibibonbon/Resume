import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="skills-item">
                                <div className="subheading mb-3">Technologies</div>
                                <ul>
                                    <li>.Net 4.5, WPF</li>
                                    <li>Drupal</li>
                                    <li>Ruby on Rails</li>
                                    <li>C#, EmguCV</li>
                                    <li>Python, NumPy, Scikit-learn, PyTorch</li>
                                    <li>C++, OpenCV, OpenGL</li>
                                    <li>Java</li>
                                    <li>Photoshop, InDesign, Illustrator</li>
                                    <li>TFS, Git</li>
                                    <li>Cinema 4D, Blender</li>
                                    <li>Unreal Engine</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="skills-item">
                                <div className="subheading mb-3">Programming Focus</div>
                                <ul>
                                    <li>Image Processing</li>
                                    <li>GUI Design</li>
                                    <li>Shader Computing</li>
                                    <li>Data Mining</li>
                                    <li>Machine Learning</li>
                                    <li>i18n Standard</li>
                                    <li>Scalability</li>
                                    <li>Customisation</li>
                                    <li>Object-Oriented Programming</li>
                                    <li>Programming Patterns</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="skills-item">
                                <div className="subheading mb-3">Miscellaneous</div>
                                <ul>
                                    <li>German (Mothertongue)</li>
                                    <li>English (Proficient)</li>
                                    <li>Spanish (Beginner)</li>
                                    <li>Eager to learn</li>
                                    <li>Teamplayer</li>
                                    <li>Proactive</li>
                                    <li>Patient</li>
                                    <li>Thinking outside of the box</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;