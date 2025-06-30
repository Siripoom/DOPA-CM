// components/OrganizationChart/OrganizationChart.jsx
import React from "react";
import { Card, Typography, Row, Col } from "antd";
import "./OrganizationChart.css";
import logo from "../../assets/logo.svg"; // <--- Make sure this import is present and correct!
import {
  UserOutlined,
  TeamOutlined,
  ClusterOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

// Import your new organization chart details data
import organizationChartDetails from "./OrganizationChartDetails";

const { Title } = Typography;

const OrganizationChart = ({ districtName }) => {
  // Get the data for the current district from the new detailed structure
  const currentOrgData = organizationChartDetails[districtName] || {
    chief: { name: "ไม่พบข้อมูล", title: "ไม่พบข้อมูล", photo: "" },
    deputyChief: { name: "ไม่พบข้อมูล", title: "ไม่พบข้อมูล", photo: "" },
    departments: [],
  };

  // Helper for rendering the default logo image
  const renderDefaultLogo = (width, marginBottom) => (
    <img
      src={logo} // Use the imported logo here
      alt="Default Logo"
      width={width}
      style={{ borderRadius: "50%", marginBottom: marginBottom }}
    />
  );

  return (
    <div
      className="org-chart-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <Title level={4} style={{ marginBottom: "24px" }}>
        แผนผังองค์กร{districtName}
      </Title>

      {/* หัวหน้าส่วนราชการ (Chief) */}
      <div className="org-level-1" style={{ marginBottom: "30px" }}>
        <Card
          style={{
            width: "250px",
            margin: "0 auto",
            background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            {currentOrgData.chief.photo ? (
              <img
                className="w-20 h-20"
                src={currentOrgData.chief.photo}
                alt={currentOrgData.chief.name}
                style={{ borderRadius: "50%", marginBottom: "8px" }}
              />
            ) : (
              renderDefaultLogo(80, "8px") // Fallback to default logo
            )}
            <div
              style={{ fontWeight: "bold", fontSize: "16px", marginTop: "8px" }}
            >
              {currentOrgData.chief.title}
            </div>
            <div style={{ fontSize: "14px", opacity: 0.9 }}>
              {currentOrgData.chief.name}
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

      {/* รองหัวหน้าส่วนราชการ (Deputy Chief) */}
      {currentOrgData.deputyChief &&
        currentOrgData.deputyChief.name !== "ไม่พบข้อมูล" && (
          <>
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
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {currentOrgData.deputyChief.photo ? (
                        <img
                          className="w-20 h-20"
                          src={currentOrgData.deputyChief.photo}
                          alt={currentOrgData.deputyChief.name}
                          // Adjust size as needed
                          style={{
                            borderRadius: "50%",
                            marginBottom: "6px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      ) : (
                        renderDefaultLogo(60, "6px") // Fallback to default logo
                      )}
                      <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                        {currentOrgData.deputyChief.title}
                      </div>
                      <div style={{ fontSize: "12px", opacity: 0.9 }}>
                        {currentOrgData.deputyChief.name}
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>

            {/* เส้นเชื่อม for Deputy */}
            <div
              style={{
                height: "30px",
                width: "2px",
                background: "#d1d5db",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            ></div>
          </>
        )}

      {/* หัวหน้าฝ่าย (Department Heads - dynamic rendering) */}
      <div className="org-level-3">
        <Row gutter={16} justify="center">
          {currentOrgData.departments.map((dept, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card
                style={{
                  width: "180px",
                  background: dept.gradient,
                  color: "white",
                  border: "none",
                  marginBottom: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {dept.photo ? (
                    <img
                      className="w-15 h-15"
                      src={dept.photo}
                      alt={dept.head}
                      style={{ borderRadius: "50%", marginBottom: "4px" }}
                    />
                  ) : (
                    renderDefaultLogo(50, "4px") // Fallback to default logo
                  )}
                  <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                    {dept.name}
                  </div>
                  <div style={{ fontSize: "11px", opacity: 0.9 }}>
                    {dept.head}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
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
