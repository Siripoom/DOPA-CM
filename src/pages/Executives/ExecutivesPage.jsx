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
import HR from "./component/HR";

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
  if (section === "hr") ComponentToRender = <HR />;

  return (
    <div className="executives-page">
      <div className="executives-container">
        <Card
          className="section-card"
          style={{ padding: "15px" }}
          title={
            <div className="card-title">
              <div className="card-icon card-icon-news">
                <TeamOutlined style={{ color: "#ffffff", fontSize: "18px" }} />
              </div>
              <span className="card-title-text">ผู้บริหาร</span>
            </div>
          }
        >
          {/* Loading spinner */}
          {loading ? (
            <div className="executives-loading">
              <Spin size="large" />
              <Text>กำลังโหลดข้อมูล...</Text>
            </div>
          ) : (
            ComponentToRender
          )}

          <div className="deputies-section">
            <Title level={2} className="section-title">
              <TeamOutlined className="section-title-icon" />
              ขอบเขตงานที่รับผิดชอบ
            </Title>
            <div className="deputies-links p-3 flex ">
              <Space direction="vertical ">
                <Link to="/executives/hr">
                  <DoubleRightOutlined />
                  ฝ่ายบริหารงานบุคคล
                </Link>
                <Link to="/executives/general">
                  <DoubleRightOutlined />
                  ฝ่ายบริหารงานทั่วไป
                </Link>
                <Link to="/executives/register">
                  <DoubleRightOutlined />
                  ฝ่ายทะเบียนและบัตร
                </Link>
                <Link to="/executives/management">
                  <DoubleRightOutlined />
                  ฝ่ายปกครองและพัฒนา
                </Link>
                <Link to="/executives/law">
                  <DoubleRightOutlined />
                  ฝ่ายกฎหมายและอำนวยความ เป็นธรรม
                </Link>
                <Link to="/executives/policy">
                  <DoubleRightOutlined />
                  ฝ่ายนโยบายและยุทธศาสตร์
                </Link>
                <Link to="/executives/inspection">
                  <DoubleRightOutlined />
                  ฝ่ายกำกับและตรวจการทะเบียน
                </Link>
                <Link to="/executives/secretary">
                  <DoubleRightOutlined />
                  ฝ่ายเลขานิการผู้บังคับบัญชา
                </Link>
              </Space>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExecutivesPage;
