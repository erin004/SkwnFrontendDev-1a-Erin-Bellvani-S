import "./App.css";
import "flowbite";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Content1 from "./component/Content1";
import Partner from "./component/Partner";
import Categories from "./component/Categories";
import Products from "./component/Products";
import Deals from "./component/Deals";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content1 />
      <Partner />
      <Categories />
      <Products />
      <Deals />
      <Footer />
      <></>
    </>
  );
}

export default App;
