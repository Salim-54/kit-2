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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function TimelineHeader({ name, parentName }) {
  return (
    <>
      <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div>
    </>
  );
}

TimelineHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default TimelineHeader;
