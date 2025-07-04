import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Card,
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Spin,
  Button,
  Modal,
  Divider,
  Avatar,
  Tabs,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  BookOutlined,
  DoubleRightOutlined,
  TeamOutlined,
  StarOutlined,
  NotificationOutlined,
  TrophyOutlined,
  BankOutlined,
  SafetyOutlined,
  RightOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./ExecutivesPage.css";
import Default from "./component/Default";
import General from "./component/General";
import Register from "./component/Register";
import Management from "./component/Management";
import Law from "./component/Law";

import Footer from "../../components/Footer/Footer";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const ExecutivesPage = () => {
  const { section } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulate loading time (e.g. API or dynamic import delay)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // adjust as needed

    return () => clearTimeout(timer);
  }, [section]);

  let ComponentToRender = <Default />;
  if (section === "general") ComponentToRender = <General />;
  if (section === "register") ComponentToRender = <Register />;
  if (section === "management") ComponentToRender = <Management />;
  if (section === "law") ComponentToRender = <Law />;

  return (
    <>
      <div className="executives-page">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Sidebar */}
            <div className="md:col-span-1 deputies-section sticky  top-6 self-start">
              <Card
                style={{ borderRadius: "5%", marginBottom: "8px" }}
                className="shadow-xl"
              >
                <Title level={2} className="section-title p-2">
                  <TeamOutlined className="section-title-icon" />
                  ทำเนียบผู้บริหาร
                </Title>
                <div className="deputies-links p-3">
                  <Space direction="vertical">
                    <Link to="/executives/management">
                      <DoubleRightOutlined /> กลุ่มงานปกครอง
                    </Link>
                    <Link to="/executives/general">
                      <DoubleRightOutlined /> กลุ่มงานความมั่นคง
                    </Link>
                    <Link to="/executives/register">
                      <DoubleRightOutlined /> กลุ่มงานการเงินและบัญชี
                    </Link>
                    <Link to="/executives/law">
                      <DoubleRightOutlined /> กลุ่มงานอำนวยความเป็นธรรม
                    </Link>
                  </Space>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3 executives-container">
              <Card
                className="section-card"
                style={{ padding: "15px" }}
                title={
                  <div className="card-title">
                    <div className="card-icon card-icon-news">
                      <TeamOutlined
                        style={{ color: "#ffffff", fontSize: "18px" }}
                      />
                    </div>
                    <span className="card-title-text">ผู้บริหาร</span>
                  </div>
                }
              >
                {loading ? (
                  <div className="executives-loading text-center py-6">
                    <Spin size="large" />
                    <Text>กำลังโหลดข้อมูล...</Text>
                  </div>
                ) : (
                  ComponentToRender
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExecutivesPage;
