// import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:product_id" element={<ProductDetails />} />
          <Route>404 Not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
