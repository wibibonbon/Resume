import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import {Br as Router, Route, Link, Switch} from "react-router-dom";
import Navi from './components/Navi'
import Overview from './components/Overview'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'


class App extends Component {


    render() {
        return (
            <div>

                <Navi/>
                <Overview/>
                <About/>
                <hr className="m-0"/>
                <Experience/>
                <hr className="m-0"/>

                <Education/>
                <hr className="m-0"/>

                <Skills/>
                <hr className="m-0"/>

                <Portfolio/>

            </div>
        );
    }

}

export default App;
