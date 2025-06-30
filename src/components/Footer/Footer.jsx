import React from "react";
import { Typography, Space } from "antd"; // Import Typography and Space from antd
import logo from "../../assets/logo.svg";
import "./Footer.css"; // Import the external CSS file

const { Title, Text } = Typography; // Destructure Title and Text from Typography

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="group-contract flex gap-4 flex-col items-center">
              <img src={logo} alt="logo" className="w-[140px] md:w-[120px]" />
              <p className="text-white">ที่ทำการปกครองจังหวัดเชียงใหม่</p>
            </div>
            <div className="group-contract text-end">
              <Title
                level={4}
                style={{ color: "white" }}
                className="text-white !mb-2"
              >
                ติดต่อเรา
              </Title>
              <Space direction="vertical" size={8}>
                {/* Applied inline style for text color */}
                <Text className="footer-contact" style={{ color: "white" }}>
                  ที่ทำการปกครองจังหวัดเชียงใหม่
                </Text>
                <Text className="footer-contact" style={{ color: "white" }}>
                  📍 123 ถนนช้างเผือก ตำบลช้างเผือก อำเภอเมือง จังหวัดเชียงใหม่
                  50300
                </Text>
                <Text className="footer-contact" style={{ color: "white" }}>
                  📞 โทร: 053-123-456 | 📠 แฟกซ์: 053-123-457
                </Text>
                <Text className="footer-contact" style={{ color: "white" }}>
                  📧 อีเมล: info@chiangmai-admin.go.th
                </Text>
              </Space>
              <div className="footer-divider" />
              <Text className="footer-copyright" style={{ color: "white" }}>
                © 2025 ที่ทำการปกครองจังหวัดเชียงใหม่ | Provincial
                Administration Office Chiang Mai
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
