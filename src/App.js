import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename={`/public`}>
      <div>
        <Navbar />
        <Wrapper>
         <Route path="/" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
