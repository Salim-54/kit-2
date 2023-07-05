import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function CardsHeader({ data }) {
  const totalObjects = data.length;

  // Calculate the total number of subscribers
  const totalSubscribers = data.reduce(
    (total, item) => total + item.subscribers,
    0
  );

  // Calculate the total number of objects with 0 subscribers
  const objectsWithZeroSubscribers = data.filter(
    (item) => item.subscribers === 0
  ).length;

  // Get the current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split("T")[0];

  // Calculate the total number of objects with createdAt of today
  const objectsWithTodayCreatedAt = data.filter((item) =>
    item.createdAt.startsWith(currentDate)
  ).length;

  console.log("Total Subscribers:", totalSubscribers);
  console.log("Total Objects:", totalObjects);
  console.log("Total Objects with 0 Subscribers:", objectsWithZeroSubscribers);
  console.log(
    "Total Objects with createdAt of today:",
    objectsWithTodayCreatedAt
  );

  return (
    <>
      <div className="header bg-info pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 text-white d-inline-block mb-0">Dashboard</h6>
              </Col>
            </Row>

            <Row>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total referrals
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {totalObjects}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total subscribers
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {totalSubscribers}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Today's referrals
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {objectsWithTodayCreatedAt}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                          <i className="ni ni-money-coins" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          inactive referrals
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {objectsWithZeroSubscribers}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                          <i className="ni ni-chart-bar-32" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
