import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home/Home";
import Notice from "./page/Notice/Notice";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
     
    ],
  },
]);

export default routes;
