// components/OrganizationChart/OrganizationChart.jsx
import React from "react";
import { Card, Typography, Row, Col } from "antd";
import logo from "../../assets/logo.svg";
import {
  UserOutlined,
  TeamOutlined,
  ClusterOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const OrganizationChart = ({ districtName }) => {
  return (
    <div
      className="org-chart-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <Title level={4} style={{ marginBottom: "24px" }}>
        แผนผังองค์กร{districtName}
      </Title>

      {/* หัวหน้าส่วนราชการ */}
      <div className="org-level-1" style={{ marginBottom: "30px" }}>
        <Card
          style={{
            width: "250px",
            margin: "0 auto",
            background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
            color: "white",
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} width={50} alt="mockup" />
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>นายอำเภอ</div>
            <div style={{ fontSize: "14px", opacity: 0.9 }}>
              หัวหน้าส่วนราชการ
            </div>
          </div>
        </Card>
      </div>

      {/* เส้นเชื่อม */}
      <div
        style={{
          height: "30px",
          width: "2px",
          background: "#d1d5db",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      ></div>

      {/* รองหัวหน้าส่วนราชการ */}
      <div className="org-level-2" style={{ marginBottom: "30px" }}>
        <Row gutter={24} justify="center">
          <Col>
            <Card
              style={{
                width: "200px",
                background: "linear-gradient(45deg, #10b981, #059669)",
                color: "white",
                border: "none",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <TeamOutlined
                  style={{ fontSize: "20px", marginBottom: "6px" }}
                />
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  รองนายอำเภอ
                </div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>
                  รองหัวหน้าส่วนราชการ
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* เส้นเชื่อม */}
      <div
        style={{
          height: "30px",
          width: "2px",
          background: "#d1d5db",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      ></div>

      {/* หัวหน้าฝ่าย */}
      <div className="org-level-3">
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{
                width: "180px",
                background: "linear-gradient(45deg, #f59e0b, #d97706)",
                color: "white",
                border: "none",
                marginBottom: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <ClusterOutlined
                  style={{ fontSize: "18px", marginBottom: "4px" }}
                />
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  ฝ่ายอำนวยการ
                </div>
                <div style={{ fontSize: "11px", opacity: 0.9 }}>
                  หัวหน้าฝ่าย
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{
                width: "180px",
                background: "linear-gradient(45deg, #8b5cf6, #7c3aed)",
                color: "white",
                border: "none",
                marginBottom: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <BranchesOutlined
                  style={{ fontSize: "18px", marginBottom: "4px" }}
                />
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  ฝ่ายปกครอง
                </div>
                <div style={{ fontSize: "11px", opacity: 0.9 }}>
                  หัวหน้าฝ่าย
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{
                width: "180px",
                background: "linear-gradient(45deg, #ef4444, #dc2626)",
                color: "white",
                border: "none",
                marginBottom: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <TeamOutlined
                  style={{ fontSize: "18px", marginBottom: "4px" }}
                />
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  ฝ่ายพัฒนาชุมชน
                </div>
                <div style={{ fontSize: "11px", opacity: 0.9 }}>
                  หัวหน้าฝ่าย
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{
                width: "180px",
                background: "linear-gradient(45deg, #06b6d4, #0891b2)",
                color: "white",
                border: "none",
                marginBottom: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <UserOutlined
                  style={{ fontSize: "18px", marginBottom: "4px" }}
                />
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  ฝ่ายทะเบียน
                </div>
                <div style={{ fontSize: "11px", opacity: 0.9 }}>
                  หัวหน้าฝ่าย
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .org-chart-container .ant-card {
          cursor: default;
        }

        .org-chart-container .org-level-1,
        .org-chart-container .org-level-2,
        .org-chart-container .org-level-3 {
          position: relative;
        }

        @media (max-width: 768px) {
          .org-chart-container .ant-card {
            width: 100% !important;
            max-width: 200px;
            margin: 0 auto 12px auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OrganizationChart;
