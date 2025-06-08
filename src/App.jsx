import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ExecutivesPage from "./pages/Executives/ExecutivesPage";
import Activities from "./pages/Activities/Activities";
import Documents from "./pages/Documents/Documents";
import Laws from "./pages/Laws/Laws";
import Knowledge from "./pages/Knowledge/Knowledge";
import Announcements from "./pages/Announcements/Announcements";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/executives" element={<ExecutivesPage />} />
          <Route path="/districts" element={<div>ข้อมูลอำเภอ</div>} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/laws" element={<Laws />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
