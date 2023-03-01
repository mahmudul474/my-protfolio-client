import { createBrowserRouter } from "react-router-dom"
import Notfound from "../Components/NAvbar/Eroorpage/Notfound"
import Dettails from "../Components/Projects/ProjectDettails/Dettails";
 
import Home from "../Pages/Home/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/project/:id",
    loader: async ({params}) => fetch(`http://localhost:5000/dettails/${params.id}`),
    element: <Dettails></Dettails>
  }
]);



export default router



