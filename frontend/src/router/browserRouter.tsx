import { createBrowserRouter } from "react-router-dom";
import Map from "../pages/Map/Map";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Map />,
  },
]);

export default browserRouter;
