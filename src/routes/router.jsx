import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Home/Authentication/Login/Login";
import Register from "../pages/Home/Authentication/Register/Register";
import Coverage from "../pages/Home/Coverage/Coverage";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/Home/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import Myparcels from "../pages/Home/DashBoard/MyParcels/Myparcels";
import Payment from "../pages/Home/DashBoard/Payment/Payment";


export  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component: Home
        },
        {
          path: 'coverage',
          loader: () => fetch('./services.json'),
          Component: Coverage
        },
        {
          path:'sendParcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
          loader: () => fetch('./serviceCenter.json')
        },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
          path: '/dashboard',
          element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
          children: [
            {
              path: 'myParcels',
              Component: Myparcels
            },
            {
              path: 'payment/:id',
              Component: Payment
            }
          ]
  }
]);
