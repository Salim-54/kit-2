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
  UncontrolledAlert,
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialData = {
    phone: "",
    password: "",
  };

  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  let navigate = useNavigate();

  const [data, setData] = React.useState(initialData);
  const [pass, setPass] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [alert, setalert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [generated, setGenerated] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  function handleResponse(response) {
    // Handle the response here
    console.log(response);
    console.log(response);
    localStorage.setItem("bearerToken", response.token);
    localStorage.setItem("role", response.role);

    if (response.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin/referral");
    }
  }

  async function loginUser(data1) {
    try {
      const response = await fetch("https://hara.smolleys.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      });

      const responseData = await response.json();
      handleResponse(responseData);

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <AuthHeader title="Welcome again" lead="" />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>welcome again!</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        onChange={handleChange}
                        type="number"
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={() => loginUser(data)}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
