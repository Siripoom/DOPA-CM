import React from "react";
import { Card, Typography, Space, Tag, Button, Badge } from "antd";
import {
  SafetyOutlined,
  EyeOutlined,
  BookOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  CalendarOutlined,
  FileTextOutlined,
  BankOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./LawCard.css";

const { Text, Paragraph } = Typography;

const LawCard = ({ law, onViewDetails }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "กฎหมายแพ่ง":
        return "#1890ff";
      case "กฎหมายอาญา":
        return "#ff4d4f";
      case "กฎหมายรัฐธรรมนูญ":
        return "#722ed1";
      case "กฎหมายปกครอง":
        return "#52c41a";
      case "กฎหมายแรงงาน":
        return "#fa8c16";
      case "กฎหมายสิ่งแวดล้อม":
        return "#13c2c2";
      case "กฎหมายธุรกิจ":
        return "#eb2f96";
      case "กฎหมายภาษี":
        return "#fadb14";
      default:
        return "#8c8c8c";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "กฎหมายแพ่ง":
        return <TeamOutlined />;
      case "กฎหมายอาญา":
        return <SafetyOutlined />;
      case "กฎหมายรัฐธรรมนูญ":
        return <BankOutlined />;
      case "กฎหมายปกครอง":
        return <FileTextOutlined />;
      case "กฎหมายแรงงาน":
        return <TeamOutlined />;
      case "กฎหมายสิ่งแวดล้อม":
        return <EnvironmentOutlined />;
      case "กฎหมายธุรกิจ":
        return <BankOutlined />;
      case "กฎหมายภาษี":
        return <FileTextOutlined />;
      default:
        return <BookOutlined />;
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case "สูง":
        return "#ff4d4f";
      case "ปานกลาง":
        return "#faad14";
      case "ทั่วไป":
        return "#52c41a";
      default:
        return "#8c8c8c";
    }
  };

  const getImportanceText = (importance) => {
    switch (importance) {
      case "สูง":
        return "⚠️ สำคัญมาก";
      case "ปานกลาง":
        return "📋 สำคัญ";
      case "ทั่วไป":
        return "📖 ทั่วไป";
      default:
        return "📖 ทั่วไป";
    }
  };

  return (
    <Card
      hoverable
      className="law-card"
      bodyStyle={{ padding: "20px" }}
      actions={[
        <Button
          type="text"
          icon={<BookOutlined />}
          className="law-action-btn"
          onClick={() => onViewDetails(law)}
        >
          อ่านรายละเอียด
        </Button>,
        <Button
          type="text"
          icon={<DownloadOutlined />}
          className="law-action-btn"
        >
          ดาวน์โหลด
        </Button>,
        <Button
          type="text"
          icon={<ShareAltOutlined />}
          className="law-action-btn"
        >
          แชร์
        </Button>,
      ]}
    >
      {/* Header Section */}
      <div className="law-header">
        <div className="law-importance">
          <Badge
            dot
            color={getImportanceColor(law.importance)}
            className="importance-badge"
          />
          <Text type="secondary" className="importance-text">
            {getImportanceText(law.importance)}
          </Text>
        </div>
        <Tag
          color={getCategoryColor(law.category)}
          className="law-category-tag"
          icon={getCategoryIcon(law.category)}
        >
          {law.category}
        </Tag>
      </div>

      {/* Law Code */}
      <div className="law-code">
        <Text code className="law-code-text">
          {law.lawCode}
        </Text>
      </div>

      {/* Title */}
      <div className="law-title">
        <Text strong className="law-title-text">
          {law.title}
        </Text>
      </div>

      {/* Description */}
      <Paragraph className="law-description">
        {law.description.length > 150
          ? `${law.description.substring(0, 150)}...`
          : law.description}
      </Paragraph>

      {/* Meta Information */}
      <Space direction="vertical" size={8} className="law-meta">
        <div className="law-meta-row">
          <Space size={16}>
            <span className="meta-item">
              <CalendarOutlined className="meta-icon" />
              <Text type="secondary" className="meta-text">
                มีผล:{" "}
                {new Date(law.effectiveDate).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </span>
            <span className="meta-item">
              <EyeOutlined className="meta-icon" />
              <Text type="secondary" className="meta-text">
                {law.views.toLocaleString()}
              </Text>
            </span>
          </Space>
        </div>
      </Space>

      {/* Tags */}
      {law.tags && (
        <div className="law-tags">
          {law.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index} className="law-tag">
              #{tag}
            </Tag>
          ))}
          {law.tags.length > 3 && (
            <Tag className="law-tag-more">+{law.tags.length - 3}</Tag>
          )}
        </div>
      )}

      {/* Status */}
      {law.status && (
        <div className="law-status">
          <Tag
            color={
              law.status === "ใช้บังคับ"
                ? "green"
                : law.status === "ยกเลิก"
                ? "red"
                : "orange"
            }
            className="status-tag"
          >
            {law.status}
          </Tag>
        </div>
      )}

      {/* New/Updated Badge */}
      {law.isNew && (
        <Badge
          count="ใหม่"
          className="new-badge"
          style={{
            backgroundColor: "#ff4d4f",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      )}
      {law.isUpdated && (
        <Badge
          count="อัปเดต"
          className="updated-badge"
          style={{
            backgroundColor: "#faad14",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      )}
    </Card>
  );
};

export default LawCard;
