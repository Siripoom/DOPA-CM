import React from "react";
import { Card, Typography, Space, Tag, Button, Badge } from "antd";
import {
  FileTextOutlined,
  DownloadOutlined,
  EyeOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons";
import "./DocumentCard.css";

const { Text } = Typography;

const DocumentCard = ({ document, onViewDetails }) => {
  const getFileTypeColor = (type) => {
    switch (type) {
      case "PDF":
        return "#ff4d4f";
      case "XLSX":
        return "#52c41a";
      case "DOCX":
        return "#1890ff";
      case "DOC":
        return "#722ed1";
      default:
        return "#8c8c8c";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ff4d4f";
      case "medium":
        return "#faad14";
      case "low":
        return "#52c41a";
      default:
        return "#8c8c8c";
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case "high":
        return "ด่วนมาก";
      case "medium":
        return "ปกติ";
      case "low":
        return "ไม่เร่งด่วน";
      default:
        return "ปกติ";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "การปกครอง":
        return "💰";
      case "ความมั่นคง":
        return "🏛️";
      case "การเงินและบัญชี":
        return "🔒";
      case "อำนวยความเป็นธรรม":
        return "🏗️";
      default:
        return "📄";
    }
  };

  return (
    <Card
      hoverable
      className="document-card"
      bodyStyle={{ padding: "20px" }}
      actions={[
        <Button
          type="text"
          icon={<EyeOutlined />}
          className="document-action-btn"
          onClick={() => onViewDetails(document)}
        >
          ดูรายละเอียด
        </Button>,
        <Button
          type="text"
          icon={<DownloadOutlined />}
          className="document-action-btn"
        >
          ดาวน์โหลด
        </Button>,
      ]}
    >
      {/* Header Section */}
      <div className="document-header">
        <div className="document-priority-badge">
          <Badge
            dot
            color={getPriorityColor(document.priority)}
            className="priority-badge"
          />
          <Text type="secondary" className="priority-text">
            {getPriorityText(document.priority)}
          </Text>
        </div>
        <Tag
          color={getFileTypeColor(document.fileType)}
          className="file-type-tag"
        >
          <FileOutlined /> {document.fileType}
        </Tag>
      </div>

      {/* Category */}
      <div className="document-category">
        <span className="category-icon">
          {getCategoryIcon(document.category)}
        </span>
        <Tag className="category-tag">{document.category}</Tag>
      </div>

      {/* Title */}
      <div className="document-title">
        <Text strong className="document-title-text">
          {document.title}
        </Text>
      </div>

      {/* Meta Information */}
      <Space direction="vertical" size={8} className="document-meta">
        <div className="meta-item">
          <ClockCircleOutlined className="meta-icon" />
          <Text type="secondary" className="meta-text">
            {new Date(document.date).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            เวลา {document.time} น.
          </Text>
        </div>

        <div className="meta-item">
          <UserOutlined className="meta-icon" />
          <Text type="secondary" className="meta-text">
            โดย: {document.author}
          </Text>
        </div>

        <div className="meta-item">
          <FileOutlined className="meta-icon" />
          <Text type="secondary" className="meta-text">
            ขนาดไฟล์: {document.fileSize}
          </Text>
        </div>
      </Space>

      {/* Description Preview */}
      {document.description && (
        <div className="document-description">
          <Text type="secondary" className="description-text">
            {document.description.length > 100
              ? `${document.description.substring(0, 100)}...`
              : document.description}
          </Text>
        </div>
      )}

      {/* Stats */}
      <div className="document-stats">
        <Space size={16}>
          {document.downloads && (
            <span className="stat-item">
              <DownloadOutlined className="stat-icon" />
              <Text type="secondary">{document.downloads}</Text>
            </span>
          )}
        </Space>
      </div>
    </Card>
  );
};

export default DocumentCard;
