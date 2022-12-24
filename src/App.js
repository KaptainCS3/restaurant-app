import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Main/Welcome";
import About from "./components/Main/About";
import CardContainer from "./components/Main/CardContainer";
import Discover from "./components/Main/Discover";
// import GalleryMenu from "./components/Main/GalleryMenu";
import Customer from "./components/Main/Customer";
import BookMeal from "./components/Main/BookMeal";
const App = () => (
  
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <Welcome />
            <About />
            <CardContainer />
            <Discover />
            {/* <GalleryMenu /> */}
            <Customer />
            <BookMeal />
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
