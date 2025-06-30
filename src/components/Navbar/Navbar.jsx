import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  BankOutlined,
  SoundOutlined,
  CalendarOutlined,
  FileTextOutlined,
  BookOutlined,
  SafetyOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../assets/logo.svg";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css"; // Import the external CSS file

import landmark1 from "../../assets/landmark/1.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // ตรวจสอบขนาดหน้าจอ
  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false); // ปิดเมนูมือถือเมื่อเปลี่ยนเป็นหน้าจอใหญ่
      }
    };

    handleResize(); // เรียกครั้งแรก
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // เมนูรายการ
  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "หน้าแรก",
      path: "/",
    },
    {
      key: "/executives",
      icon: <TeamOutlined />,
      label: "ทำเนียบผู้บริหาร",
      path: "/executives",
    },
    {
      key: "/districts",
      icon: <BankOutlined />,
      label: "ข้อมูลอำเภอ",
      path: "/districts",
    },
    {
      key: "/announcements",
      icon: <SoundOutlined />,
      label: "ประชาสัมพันธ์",
      path: "/announcements",
    },
    {
      key: "/activities",
      icon: <CalendarOutlined />,
      label: "กิจกรรม",
      path: "/activities",
    },
    {
      key: "/documents",
      icon: <FileTextOutlined />,
      label: "หนังสือราชการ",
      path: "/documents",
    },
    {
      key: "/knowledge",
      icon: <BookOutlined />,
      label: "สาระและความรู้",
      path: "/knowledge",
    },
    {
      key: "/laws",
      icon: <SafetyOutlined />,
      label: "กฎหมายน่ารู้",
      path: "/laws",
    },
    {
      key: "/login",
      icon: <LoginOutlined />,
      label: "เข้าสู่ระบบ",
      path: "/login",
    },
  ];

  // สร้าง items สำหรับ Ant Design Menu
  const antMenuItems = menuItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: (
      <Link to={item.path} className="navbar-menu-link">
        {item.label}
      </Link>
    ),
  }));

  return (
    <>
      {/* Header Bar */}

      <header
        className="navbar-header"
        style={{
          backgroundImage: `url(${landmark1})`,
        }}
      >
        {/* Top Bar */}
        <div className="navbar-top-bar">
          <div className="container mx-auto px-4">
            <div className="navbar-top-content">
              <div className="navbar-contact-info">
                <span className="navbar-contact-icon">📞</span>
                <span>โทร: 053-112607 , 0553-112617</span>
              </div>
              <div className="navbar-date-info">
                <span className="navbar-date-icon">📅</span>
                <span>
                  วันที่:{" "}
                  {new Date().toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto navbar-main-content">
          {/* Mobile Layout */}
          {isMobile && (
            <div>
              <div className="navbar-mobile-header">
                <div className="navbar-mobile-logo-section">
                  <div className="navbar-mobile-logo-container justify-center items-center">
                    <div className="navbar-mobile-logo-glow"></div>
                    <div className="flex gap-2 items-center justify-center ">
                      <img
                        src={logo1}
                        alt="Logo"
                        className="navbar-mobile-logo"
                      />
                      <img
                        src={logo2}
                        alt="Logo2"
                        className="navbar-mobile-logo"
                      />
                    </div>
                    <div>
                      <h1 className="navbar-mobile-title">
                        ที่ทำการปกครองจังหวัดเชียงใหม่
                      </h1>
                    </div>
                  </div>
                </div>
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="navbar-mobile-menu-button"
                  size="large"
                />
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="navbar-mobile-menu">
                  <div className="navbar-mobile-menu-grid">
                    {menuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`navbar-mobile-menu-item ${
                          location.pathname === item.path ? "active" : ""
                        }`}
                      >
                        <span className="navbar-mobile-menu-icon">
                          {item.icon}
                        </span>
                        <span className="navbar-mobile-menu-label">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Desktop Layout */}
          {!isMobile && (
            <div className="navbar-desktop-container">
              {/* Logo และชื่อหน่วยงาน - ด้านบน */}
              <div className="navbar-desktop-logo-section">
                <Link to="/" className="navbar-desktop-logo-link">
                  <div className="navbar-desktop-logo-container">
                    <div className="navbar-desktop-logo-glow"></div>
                    <div className="navbar-desktop-logo-group">
                      <div className="navbar-desktop-logo-bg">
                        <img
                          src={logo1}
                          alt="Logo"
                          className="navbar-desktop-logo"
                        />
                      </div>
                      <div className="navbar-desktop-logo-bg">
                        <img
                          src={logo2}
                          alt="Logo"
                          className="navbar-desktop-logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="navbar-desktop-text-section">
                    <h1 className="navbar-desktop-title">
                      ที่ทำการปกครองจังหวัดเชียงใหม่
                    </h1>
                    <p className="navbar-desktop-subtitle">
                      Provincial Administration Office Chiang Mai
                    </p>
                  </div>
                </Link>
              </div>

              {/* Menu - ด้านล่าง */}
              <div className="navbar-desktop-menu-section">
                <div className="navbar-desktop-menu-container">
                  <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={antMenuItems}
                    className="navbar-menu"
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
