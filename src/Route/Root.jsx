import Inspx from "inspx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const Root = () => {
  return (
    <Inspx>
      <Navbar />
      <Outlet />
      <Footer/>
      <ScrollRestoration />
    </Inspx>
  );
};
export default Root;