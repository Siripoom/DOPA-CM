// components/DistrictCard/DistrictCard.jsx
import React from "react";
import { Card, Typography, Row, Col, Space, Avatar } from "antd";
import {
  BankOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const DistrictCard = ({ district, onClick }) => {
  return (
    <Card
      className="district-card"
      hoverable
      onClick={() => onClick(district)}
      style={{
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e8f4fd",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      bodyStyle={{ padding: "24px" }}
    >
      <div className="district-card-content">
        <div className="district-header">
          <div className="district-icon">
            <Avatar
              size={64}
              style={{
                background: "linear-gradient(45deg, #1890ff, #40a9ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BankOutlined style={{ fontSize: "28px", color: "white" }} />
            </Avatar>
          </div>
          <div className="district-title">
            <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
              {district.name}
            </Title>
            <Text style={{ color: "#6b7280", fontSize: "14px" }}>
              <EnvironmentOutlined /> {district.area}
            </Text>
          </div>
        </div>

        <div className="district-motto" style={{ margin: "16px 0" }}>
          <Text
            style={{
              fontStyle: "italic",
              color: "#4f46e5",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            "{district.motto}"
          </Text>
        </div>

        <div className="district-stats" style={{ marginBottom: "16px" }}>
          <Row gutter={16}>
            <Col span={12}>
              <div className="stat-item">
                <Text strong style={{ color: "#1f2937" }}>
                  ประชากร
                </Text>
                <br />
                <Text
                  style={{
                    color: "#059669",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {district.population}
                </Text>
              </div>
            </Col>
            <Col span={12}>
              <div className="stat-item">
                <Text strong style={{ color: "#1f2937" }}>
                  ตำบล
                </Text>
                <br />
                <Text
                  style={{
                    color: "#dc2626",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {district.subdistricts} ตำบล
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <div className="district-contact">
          <Space>
            <PhoneOutlined style={{ color: "#1890ff" }} />
            <Text style={{ color: "#4b5563" }}>{district.phone}</Text>
          </Space>
        </div>

        <div className="district-officer" style={{ marginTop: "12px" }}>
          <Space>
            <UserOutlined style={{ color: "#059669" }} />
            <Text style={{ color: "#4b5563", fontSize: "14px" }}>
              {district.headOfficer}
            </Text>
          </Space>
        </div>
      </div>

      <style jsx>{`
        .district-card {
          transition: all 0.3s ease;
        }

        .district-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.15) !important;
        }

        .district-card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .district-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .district-icon {
          flex-shrink: 0;
        }

        .district-title {
          flex: 1;
        }

        .stat-item {
          text-align: center;
          padding: 8px;
          background: #f8fafc;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .district-header {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </Card>
  );
};

export default DistrictCard;
