import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import Tasks from "../Pages/Tasks";
import Chat from "../Pages/Chat";
import Settings from "../Pages/Settings";
import Profile from "../Pages/Profile";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            index:true,
            element:<Tasks></Tasks>
        },
        {
            path:"chat",
            element:<Chat></Chat>
        },
        {
            path:"settings",
            element:<Settings></Settings>
        },
        {
            path:"profile",
            element:<Profile></Profile>
        }
      ]
    },
  ]);
  export default routes