import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./Route/Root";
import './index.css';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import About from './Component/About';
import Search from "./Component/Search"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/> 
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/search",
        element: <Search/>
      }
      
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App

