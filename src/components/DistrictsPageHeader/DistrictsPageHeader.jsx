// components/DistrictsPageHeader/DistrictsPageHeader.jsx
import React from "react";
import { Typography, Input } from "antd";
import { BankOutlined, SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;

const DistrictsPageHeader = ({ onSearch }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        padding: "60px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, transparent 50%, rgba(6, 182, 212, 0.1) 100%)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="container mx-auto"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <BankOutlined
              style={{
                fontSize: "64px",
                color: "#10b981",
                filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
              }}
            />
          </div>
          <Title
            level={1}
            style={{
              color: "white",
              margin: "0 0 16px 0",
              fontSize: "48px",
              fontWeight: 700,
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            ข้อมูลอำเภอ
          </Title>
          <Text
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              display: "block",
              marginBottom: "32px",
            }}
          >
            อำเภอต่างๆ ในจังหวัดเชียงใหม่
          </Text>

          {/* Search Section */}
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <Search
              placeholder="ค้นหาอำเภอ..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={onSearch}
              style={{
                "& .ant-input": {
                  borderRadius: "12px 0 0 12px",
                  height: "50px",
                  fontSize: "16px",
                },
                "& .ant-btn": {
                  borderRadius: "0 12px 12px 0",
                  height: "50px",
                  background: "linear-gradient(45deg, #10b981, #059669)",
                  borderColor: "#10b981",
                },
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .ant-input-search .ant-input-group .ant-input {
          border-radius: 12px 0 0 12px !important;
        }

        .ant-input-search .ant-input-group .ant-btn {
          border-radius: 0 12px 12px 0 !important;
        }
      `}</style>
    </div>
  );
};

export default DistrictsPageHeader;
