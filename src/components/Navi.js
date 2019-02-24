import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, NavItem, Form, FormControl, Button} from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';

class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#about">Wibke Baudach</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem><Scrollchor to="#about" className="nav-link">About</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#experience" className="nav-link">Experience</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#education" className="nav-link">Education</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#skills" className="nav-link">Skills</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#portfolio" className="nav-link">Portfolio</Scrollchor></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        );
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
}

export default Navi;