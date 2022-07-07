import { Routes, Route } from "react-router-dom";
import "./app.css";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import CampaignPage from "./pages/CampaignPage/CampaignPage";
import Campaigns from "./pages/Campaigns";
import Home from "./pages/Home";
import Organizations from "./pages/Organizations";

function App() {
  return (
    <div className="app">
      <Cart />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Campaigns" element={<Campaigns />} />
        <Route path="/Organizations" element={<Organizations />} />
        <Route path="/campaign/:id" element={<CampaignPage />} />
      </Routes>
    </div>
  );
}

export default App;
