import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./componenets/RootLayout";
import Register from "./componenets/Register";
import Login from "./componenets/Login";
import Technologies from "./componenets/Technologies";
import Home from "./componenets/Home";
import Java from "./componenets/Java";
import Nodejs from "./componenets/Nodejs";
import Vue from "./componenets/Vue";

function App() {

  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "nodejs",
              element: <Nodejs />
            },
            {
              path: "java",
              element: <Java />
            },
            {
              path: "vue",
              element: <Vue />
            },
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={routingObj} />;
}

export default App;