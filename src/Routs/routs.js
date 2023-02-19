import { createBrowserRouter } from "react-router-dom"
import Notfound from "../Components/NAvbar/Eroorpage/Notfound"
import Home from "../Pages/Home/Home"
const router=createBrowserRouter([{
    path:"/",
    element:<Home></Home>,
    errorElement:<Notfound></Notfound>,
    children:[
        {
            path:"/home",
            element:<Home></Home>,
        }
    ]
}])



export default router



