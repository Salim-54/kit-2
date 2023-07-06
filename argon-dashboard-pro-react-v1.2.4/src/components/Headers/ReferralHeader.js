import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function ReferralDashboard({ data }) {
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
                          Total subscribers
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {data.subscribers}
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
                          <a
                            href={`https://hara.smolleys.com/api/auth/io/referral=${data.referralKey}`}
                          >
                            My Link
                          </a>
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          <a
                            href={`https://hara.smolleys.com/api/auth/io/referral=${data.referralKey}`}
                          >
                            My link
                          </a>
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
                          <a href="https://www.youtube.com/@SHoNgxxBoNg?sub_confirmation=1">
                            Channel
                          </a>
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          <a href="https://www.youtube.com/@SHoNgxxBoNg?sub_confirmation=1">
                            SHoNgxBоNg
                          </a>
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
                          Recent subscription
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {data.updatedAt}
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

ReferralDashboard.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default ReferralDashboard;
