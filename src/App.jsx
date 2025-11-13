import { Routes, Route, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Home from "./Pages/Home"
import Header  from "./Pages/Header";
import Footer from "./Pages/Footer";
import Certificates from "./Component/Certificates";
import Contact from "./Component/Contact";
import Partners from "./Component/Partners";
import Puducts from "./Component/products"

function App() {
  return (
    <>
      {/* Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/products" element={<Puducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
