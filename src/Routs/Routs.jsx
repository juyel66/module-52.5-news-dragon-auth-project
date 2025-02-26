import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRout from "./PrivetRout/PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/news.json'),
            },
            {
                path: "/news/:id",
                element: <PrivetRout><News></News></PrivetRout>

            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            }
        ]
    },
]);
export default router;

