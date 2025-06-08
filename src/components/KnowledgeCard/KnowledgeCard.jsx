import React from "react";
import { Card, Typography, Space, Tag, Button, Rate, Badge } from "antd";
import {
  BulbOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
  BookOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./KnowledgeCard.css";

const { Text, Paragraph } = Typography;

const KnowledgeCard = ({ knowledge, onViewDetails }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "การบริการ":
        return "#1890ff";
      case "สิทธิประชาชน":
        return "#52c41a";
      case "ความปลอดภัย":
        return "#ff4d4f";
      case "กฎหมายและระเบียบ":
        return "#722ed1";
      case "การพัฒนาชุมชน":
        return "#fa8c16";
      case "เทคโนโลยี":
        return "#13c2c2";
      case "สิ่งแวดล้อม":
        return "#52c41a";
      default:
        return "#8c8c8c";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "การบริการ":
        return "🏛️";
      case "สิทธิประชาชน":
        return "⚖️";
      case "ความปลอดภัย":
        return "🛡️";
      case "กฎหมายและระเบียบ":
        return "📋";
      case "การพัฒนาชุมชน":
        return "🏘️";
      case "เทคโนโลยี":
        return "💻";
      case "สิ่งแวดล้อม":
        return "🌱";
      default:
        return "📚";
    }
  };

  const getDifficultyColor = (level) => {
    switch (level) {
      case "เริ่มต้น":
        return "#52c41a";
      case "ปานกลาง":
        return "#faad14";
      case "ขั้นสูง":
        return "#ff4d4f";
      default:
        return "#8c8c8c";
    }
  };

  return (
    <Card
      hoverable
      className="knowledge-card"
      cover={
        <div className="knowledge-cover">
          <img
            src={knowledge.image}
            alt={knowledge.title}
            className="knowledge-image"
          />
          <div className="knowledge-overlay">
            <div className="knowledge-badges">
              <Tag
                color={getCategoryColor(knowledge.category)}
                className="category-badge"
              >
                <span className="category-icon">
                  {getCategoryIcon(knowledge.category)}
                </span>
                {knowledge.category}
              </Tag>
              {knowledge.difficulty && (
                <Tag
                  color={getDifficultyColor(knowledge.difficulty)}
                  className="difficulty-badge"
                >
                  {knowledge.difficulty}
                </Tag>
              )}
            </div>
            {knowledge.rating && (
              <div className="knowledge-rating">
                <StarFilled className="rating-icon" />
                <Text className="rating-text">{knowledge.rating}</Text>
              </div>
            )}
          </div>
        </div>
      }
      bodyStyle={{ padding: "20px" }}
      actions={[
        <Button
          type="text"
          icon={<BookOutlined />}
          className="knowledge-action-btn"
          onClick={() => onViewDetails(knowledge)}
        >
          อ่านบทความ
        </Button>,
        <Button
          type="text"
          icon={<HeartOutlined />}
          className="knowledge-action-btn"
        >
          ถูกใจ ({knowledge.likes || 0})
        </Button>,
        <Button
          type="text"
          icon={<ShareAltOutlined />}
          className="knowledge-action-btn"
        >
          แชร์
        </Button>,
      ]}
    >
      {/* Title */}
      <div className="knowledge-title">
        <Text strong className="knowledge-title-text">
          {knowledge.title}
        </Text>
      </div>

      {/* Description */}
      <Paragraph className="knowledge-description">
        {knowledge.description.length > 120
          ? `${knowledge.description.substring(0, 120)}...`
          : knowledge.description}
      </Paragraph>

      {/* Meta Information */}
      <Space direction="vertical" size={8} className="knowledge-meta">
        <div className="knowledge-stats">
          <Space size={16}>
            <span className="stat-item">
              <ClockCircleOutlined className="stat-icon" />
              <Text type="secondary" className="stat-text">
                {knowledge.readTime}
              </Text>
            </span>
            <span className="stat-item">
              <EyeOutlined className="stat-icon" />
              <Text type="secondary" className="stat-text">
                {knowledge.views.toLocaleString()}
              </Text>
            </span>
            {knowledge.comments && (
              <span className="stat-item">
                <CommentOutlined className="stat-icon" />
                <Text type="secondary" className="stat-text">
                  {knowledge.comments}
                </Text>
              </span>
            )}
          </Space>
        </div>
      </Space>

      {/* Tags */}
      {knowledge.tags && (
        <div className="knowledge-tags">
          {knowledge.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index} className="knowledge-tag">
              {tag}
            </Tag>
          ))}
          {knowledge.tags.length > 3 && (
            <Tag className="knowledge-tag-more">
              +{knowledge.tags.length - 3}
            </Tag>
          )}
        </div>
      )}

      {/* Author Info */}
      {knowledge.author && (
        <div className="knowledge-author">
          <Text type="secondary" className="author-text">
            โดย: {knowledge.author}
          </Text>
          <Text type="secondary" className="publish-date">
            {new Date(knowledge.publishDate).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
        </div>
      )}

      {/* New Badge */}
      {knowledge.isNew && (
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
    </Card>
  );
};

export default KnowledgeCard;
