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
import Alternative from "views/pages/dashboards/Alternative.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import ReferralDashboard from "views/pages/dashboards/ReferralDashboard";

import Lock from "views/pages/examples/Lock.js";
import Login from "views/pages/examples/Login.js";
import Pricing from "views/pages/examples/Pricing.js";
import Profile from "views/pages/examples/Profile.js";
import Register from "views/pages/examples/Register.js";
import RTLSupport from "views/pages/examples/RTLSupport.js";

import Timeline from "views/pages/examples/Timeline.js";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: <Dashboard />,
        layout: "/admin",
      },
      {
        path: "/referral",
        name: "Dashboard",
        miniName: "D",
        component: <ReferralDashboard />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        component: <Register />,
        layout: "/auth",
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: <Login />,
        layout: "/auth",
      },
    ],
  },
];

export default routes;
