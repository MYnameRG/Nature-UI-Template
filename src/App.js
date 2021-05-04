import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Banner from "./Banner";
import Header from "./Header";
import About from "./About";
import Feature from "./Feature";
import Nature from "./Nature";
import Footer from "./Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <br />
      <About />
      <Feature />
      <Nature />
      <Footer />
    </Fragment>
  );
}
