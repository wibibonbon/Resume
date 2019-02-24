import React, { Component } from "react";
import Particles from 'react-particles-js';
import './Overview.css'

class Overview extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="over">
                <div className="my-auto">
            <h1 className="mb-0" >
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 70,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10
                        },
                        "line_linked": {
                            "enable": false
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 6,
                                "distance": 40
                            }
                        }
                    }
                }} />Wibke
                <span className="text-primary">Baudach</span></h1></div></section>
                );
    }
}

export default Overview;