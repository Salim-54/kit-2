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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Progress,
  Media,
  UncontrolledTooltip,
  Badge,
  PaginationItem,
  PaginationLink,
  CardFooter,
  Pagination,
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
        <>
          {/* <SimpleHeader name="Tables" parentName="Tables" /> */}
          <Container className="mt--6" fluid>
            <Row>
              <div className="col">
                <Card>
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Statistics</h3>
                  </CardHeader>

                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th className="sort" data-sort="name" scope="col">
                          Referral links
                        </th>
                        <th className="sort" data-sort="budget" scope="col">
                          phone number
                        </th>
                        <th className="sort" data-sort="status" scope="col">
                          total subscribers
                        </th>

                        <th className="sort" data-sort="completion" scope="col">
                          RECENT SUBSCRIPTION
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
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
              </div>
            </Row>
          </Container>
        </>
      </Container>
    </>
  );
}

export default Dashboard;
