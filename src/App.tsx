import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import NotFound from './components/NotFound/NotFound.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import Home from './pages/Home/Home.tsx';
import Work from './pages/Work/Work.tsx';


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route
              path="/my-site/home"
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
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
