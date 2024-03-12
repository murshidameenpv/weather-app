import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/Home";
// import PrivateRouter from "./pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRouter>
        <Home />
      // </PrivateRouter>
    )
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
