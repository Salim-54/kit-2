/*!

=========================================================
* Argon Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-dark navbar-transparent"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <NavbarBrand to="#" tag={Link}>
            <img alt="..." src={require("assets/img/logo.png")} />
          </NavbarBrand>
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/admin/dashboard">
                    <img alt="..." src={require("assets/img/logo.png")} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </Col>
              </Row>
            </div>

            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="#"
                  id="tooltip601201423"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip601201423">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="#"
                  id="tooltip871243015"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip871243015">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="#"
                  id="tooltip366258619"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Twitter
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip366258619">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
