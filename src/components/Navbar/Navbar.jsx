import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
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
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      label: "กฎหมายหน้ารู้",
      path: "/laws",
    },
  ];

  // สร้าง items สำหรับ Ant Design Menu
  const antMenuItems = menuItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: (
      <Link to={item.path} className="text-white hover:text-blue-200">
        {item.label}
      </Link>
    ),
  }));

  return (
    <>
      {/* Header Bar */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
        {/* Top Bar */}
        <div className="bg-blue-900 py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-4">
                <span>📞 โทร: 053-000-000</span>
                <span>📧 email@dopacm.go.th</span>
              </div>
              <div className="flex items-center space-x-2">
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo และชื่อหน่วยงาน */}
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-full">
                <img
                  src="/api/placeholder/60/60"
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl lg:text-2xl font-bold">
                  ที่ทำการปกครองจังหวัดเชียงใหม่
                </h1>
                <p className="text-blue-200 text-sm lg:text-base">
                  Department of Provincial Administration Chiang Mai
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <Menu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={antMenuItems}
                className="bg-transparent border-none"
                theme="dark"
              />
            </nav>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white border-white hover:bg-blue-700"
              size="large"
            />
          </div>
        </div>

        {/* Navigation Bar สำหรับหน้าจอใหญ่ */}
        <div className="hidden lg:block bg-blue-800 border-t border-blue-700">
          <div className="container mx-auto px-4">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={antMenuItems}
              className="bg-transparent border-none text-white"
              theme="dark"
            />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="text-blue-800">
            <h3 className="font-bold">เมนูหลัก</h3>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={300}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: (
              <Link
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ),
          }))}
          className="border-none"
        />
      </Drawer>
    </>
  );
};

export default Navbar;
