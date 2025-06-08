// components/DistrictsStatsCard/DistrictsStatsCard.jsx
import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

const DistrictsStatsCard = ({ totalDistricts, totalPopulation = "1.1M+" }) => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        marginBottom: "40px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <Row gutter={[32, 16]} align="middle">
        <Col xs={24} sm={12}>
          <div style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: "18px", color: "#1f2937" }}>
              จำนวนอำเภอทั้งหมด
            </Text>
            <div
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1890ff",
                margin: "8px 0",
              }}
            >
              {totalDistricts}
            </div>
            <Text style={{ color: "#6b7280" }}>อำเภอ</Text>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: "18px", color: "#1f2937" }}>
              ประชากรรวม
            </Text>
            <div
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#10b981",
                margin: "8px 0",
              }}
            >
              {totalPopulation}
            </div>
            <Text style={{ color: "#6b7280" }}>คน</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DistrictsStatsCard;
