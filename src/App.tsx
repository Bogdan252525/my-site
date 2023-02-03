import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/my-site/"
            element={<Home />}
          />
          <Route
            path="/my-site/about"
            element={<About />}
          />
          <Route
            path="/my-site/work"
            element={<Work />}
          />
          <Route
            path="/my-site/contacts"
            element={<Contact />}
          />
          <Route
            path="/my-site/*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
