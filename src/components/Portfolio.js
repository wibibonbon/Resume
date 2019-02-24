import React, { Component } from "react";
import Card from 'react-bootstrap/Card';


class Portfolio extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
                <div className="my-auto">
                    <h2 className="mb-5">Portfolio</h2>
                    <div className="row">
                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>Python, PyTorch, Multispectral Images</Card.Header>
                            <Card.Body>
                                <Card.Title>Blood Age Estimation</Card.Title>
                                <Card.Img variant="top" src="/MA.jpg" />
                                <Card.Text>
                                    Master Thesis: Investigation on the usability of multispectral images for age estimation of blood stains.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>C#, EmguCV, Infrared Videos</Card.Header>
                            <Card.Body>
                                <Card.Title>Infrared Image/Video Processing</Card.Title>
                                <Card.Img variant="top" src="/BA.jpg" />
                                <Card.Text>
                                    Bachelor Thesis: Comparison of fusion methods for dynamic fingerprint images captured by an infrared camera.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>C++, OpenGL</Card.Header>
                            <Card.Body>
                                <Card.Title>Surface Parametrization</Card.Title>
                                <Card.Img variant="top" src="/FP.jpg" />
                                <Card.Text>
                                    Implementation of Instant Field-Aligned Meshes and the Seamster Graphcut algorithm for parametrization of meshes.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>WebGL, Three.js</Card.Header>
                            <Card.Body>
                                <Card.Title>ShaderOuch</Card.Title>
                                <Card.Img variant="top" src="/Bunny.jpg" />
                                <Card.Text>
                                    ShaderOuch is a web application to learn how to code shaders with WebGL.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>Unreal, Blender, Adobe Suite</Card.Header>
                            <Card.Body>
                                <Card.Title>Voxelmania</Card.Title>
                                <Card.Img variant="top" src="/Movie.jpg" />
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>Unreal</Card.Header>
                            <Card.Body>
                                <Card.Title>Project Omega</Card.Title>
                                <Card.Img variant="top" src="/Game.jpg" />
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="col-md-5 col-lg-3 card">
                            <Card.Header>C++, OpenGL, Oculus Rift</Card.Header>
                            <Card.Body>
                                <Card.Title>Oktopus Riff</Card.Title>
                                <Card.Img variant="top" src="/OktopusRiff.jpg" />
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;