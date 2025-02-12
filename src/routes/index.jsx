import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../layouts/appLayout";
import { CartDetail, ProductCard, ProductPage } from "../pages";


export const router=createBrowserRouter([
    { path:'/', element:<RootPage/>, children:
        [
            { path:'/', element:<ProductPage/>},
            { path:'/detail/:id/:clientID', element:<ProductCard/>},
            { path:'/cartDetail/:clientID', element:<CartDetail/>},
        ],
    }
])
