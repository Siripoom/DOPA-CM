import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<div>หน้าแรก</div>} />
          <Route path="/executives" element={<div>ทำเนียบผู้บริหาร</div>} />
          <Route path="/districts" element={<div>ข้อมูลอำเภอ</div>} />
          <Route path="/announcements" element={<div>ประชาสัมพันธ์</div>} />
          <Route path="/activities" element={<div>กิจกรรม</div>} />
          <Route path="/documents" element={<div>หนังสือราชการ</div>} />
          <Route path="/knowledge" element={<div>สาระและความรู้</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
