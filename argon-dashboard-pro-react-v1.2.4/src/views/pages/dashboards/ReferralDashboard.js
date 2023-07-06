import React from "react";

import Chart from "chart.js";

import { Button, Card, CardHeader, Container, Row } from "reactstrap";

import CardsHeader from "components/Headers/CardsHeader.js";

import { chartOptions, parseOptions } from "variables/charts.js";
import { useNavigate } from "react-router-dom";
import ReferralDashboard from "components/Headers/ReferralHeader";

function Dashboard() {
  let navigate = useNavigate();

  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("bearerToken");
        const response = await fetch("https://hara.smolleys.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

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
      <ReferralDashboard data={data} name="Default" parentName="Dashboards" />
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
