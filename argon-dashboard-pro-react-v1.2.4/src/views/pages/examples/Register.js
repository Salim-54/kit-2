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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  UncontrolledAlert,
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// core components
import AuthHeader from "components/Headers/AuthHeader.js";

function Register() {
  const initialData = {
    phone: "",
  };

  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [data, setData] = React.useState(initialData);
  const [pass, setPass] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [alert, setalert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [generated, setGenerated] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ phone: value });

    // setData(value);
  };

  function handleResponse(response) {
    // Handle the response here
    console.log(response);
    const referralLink = response.data;
    const pas = response.password;
    const telphone = response.phone;
    setGenerated(referralLink);
    setTel(telphone);
    setPass(pas);
    successInfo();
  }

  const infoAlert = () => {
    setTimeout(function () {
      setalert(
        <UncontrolledAlert color="danger">
          <span className="alert-text ml-1">
            <strong>Phone number required!</strong>
          </span>
        </UncontrolledAlert>
      );
    }, 1000);
    setalert(false);
  };

  const successInfo = () => {
    setTimeout(function () {
      setSuccess(
        <UncontrolledAlert color="success">
          <span className="alert-text ml-1">
            <strong>Congratulations!</strong> your referral link has been
            generated successfully
          </span>
        </UncontrolledAlert>
      );
    }, 1000);
    setSuccess(false);
  };

  function registerUser(data1) {
    if (data.phone.length < 4) {
      infoAlert();
      return;
    }
    console.log(data1);
    fetch("https://hara.smolleys.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
      .then((response) => response.json())
      .then((responseData) => {
        handleResponse(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <AuthHeader title="YouTube Referral link" />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">
              <CardBody>
                {alert}

                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/profile.jpg")}
                    style={{ width: "120px" }}
                  />
                </a>

                <h2 className="text-black text-center pt-1">SHoNgxBоNg</h2>

                <hr />
                {generated === "" && (
                  <div className="text-center text-muted mb-4">
                    <small>
                      Add your phone number to get your referral link
                    </small>
                  </div>
                )}

                <div className="text-center text-muted mb-5"></div>
                {generated === "" ? (
                  <Form role="form">
                    <FormGroup
                      className={classnames({
                        focused: focusedEmail,
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone number"
                          type="tel"
                          name="phone"
                          onClick={handleChange}
                          onFocus={() => setfocusedEmail(true)}
                          onBlur={() => setfocusedEmail(false)}
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="info"
                        type="button"
                        onClick={() => registerUser(data)}
                      >
                        Generate referral link
                      </Button>
                    </div>
                  </Form>
                ) : (
                  <CardBody>
                    {/**https://hara.smolleys.com/api/auth/io?referral=fc7tBvz1mI */}
                    {success}
                    <CardText className="mb-4">
                      <span className="font-weight-bold">your login:</span>
                      {tel}
                    </CardText>
                    <CardText className="mb-4">
                      <span className="font-weight-bold">your password: </span>
                      {pass}
                    </CardText>
                    <CardText className="mb-4">
                      <span className="font-weight-bold">
                        your referral link:
                      </span>
                      {generated}
                    </CardText>
                    <Button
                      color="primary"
                      href={"#"}
                      onClick={(e) => e.preventDefault()}
                    >
                      My dashboard
                    </Button>
                  </CardBody>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
