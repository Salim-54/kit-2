import React from "react";

import Chart from "chart.js";

import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import CardsHeader from "components/Headers/CardsHeader.js";

import { chartOptions, parseOptions } from "variables/charts.js";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("bearerToken");
        const response = await fetch(
          "https://hara.smolleys.com/subscribe/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.data);
        console.log(responseData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("bearerToken");
    navigate("/");
  };

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
  };
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  return (
    <>
      <CardsHeader data={data} name="Default" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader className="border-0 "></CardHeader>
              <Table className="align-items-center table-flush responsive ">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral links</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Total subscribers</th>
                    <th scope="col">Last recent subscription</th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                      50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />
                      46,53%
                    </td>
                  </tr>
                </tbody> */}

                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <a
                          href={`https://hara.smolleys.com/api/auth/io?referral=${item.referralKey}`}
                        >
                          Referral link
                        </a>
                      </th>
                      <td>{item.phone}</td>
                      <td>{item.subscribers}</td>
                      <td>{item.updatedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
