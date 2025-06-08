import React from "react";
import { Card, Typography, Space, Tag, Button, Badge, Avatar } from "antd";
import {
  SoundOutlined,
  EyeOutlined,
  ShareAltOutlined,
  HeartOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CommentOutlined,
  BookOutlined,
  ExclamationCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import "./AnnouncementCard.css";

const { Text, Paragraph } = Typography;

const AnnouncementCard = ({ announcement, onViewDetails }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "ข่าวประชาสัมพันธ์":
        return "#1890ff";
      case "ประกาศ":
        return "#ff4d4f";
      case "แจ้งเตือน":
        return "#faad14";
      case "เชิญชวน":
        return "#52c41a";
      case "แจ้งปิดถนน":
        return "#722ed1";
      case "ประมวล":
        return "#13c2c2";
      case "สำคัญ":
        return "#eb2f96";
      default:
        return "#8c8c8c";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "ข่าวประชาสัมพันธ์":
        return "📢";
      case "ประกาศ":
        return "📋";
      case "แจ้งเตือน":
        return "⚠️";
      case "เชิญชวน":
        return "🎉";
      case "แจ้งปิดถนน":
        return "🚧";
      case "ประมวล":
        return "📰";
      case "สำคัญ":
        return "🔥";
      default:
        return "📄";
    }
  };

  const getPriorityLevel = (priority) => {
    switch (priority) {
      case "urgent":
        return { text: "ด่วนมาก", color: "#ff4d4f" };
      case "high":
        return { text: "สำคัญ", color: "#faad14" };
      case "normal":
        return { text: "ปกติ", color: "#52c41a" };
      default:
        return { text: "ปกติ", color: "#8c8c8c" };
    }
  };

  const priority = getPriorityLevel(announcement.priority);

  return (
    <Card
      hoverable
      className="announcement-card"
      cover={
        <div className="announcement-cover">
          <img
            src={announcement.image}
            alt={announcement.title}
            className="announcement-image"
          />
          <div className="announcement-overlay">
            <div className="announcement-badges">
              <Tag
                color={getCategoryColor(announcement.category)}
                className="category-badge"
              >
                <span className="category-icon">
                  {getCategoryIcon(announcement.category)}
                </span>
                {announcement.category}
              </Tag>
              {announcement.priority !== "normal" && (
                <Tag color={priority.color} className="priority-badge">
                  <ExclamationCircleOutlined />
                  {priority.text}
                </Tag>
              )}
            </div>
            {announcement.isNew && (
              <div className="new-indicator">
                <BellOutlined className="new-icon" />
                <Text className="new-text">ใหม่</Text>
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
          className="announcement-action-btn"
          onClick={() => onViewDetails(announcement)}
        >
          อ่านเพิ่มเติม
        </Button>,
        <Button
          type="text"
          icon={<HeartOutlined />}
          className="announcement-action-btn"
        >
          ถูกใจ ({announcement.likes || 0})
        </Button>,
        <Button
          type="text"
          icon={<ShareAltOutlined />}
          className="announcement-action-btn"
        >
          แชร์
        </Button>,
      ]}
    >
      {/* Title */}
      <div className="announcement-title">
        <Text strong className="announcement-title-text">
          {announcement.title}
        </Text>
      </div>

      {/* Description */}
      <Paragraph className="announcement-description">
        {announcement.description?.length > 120
          ? `${announcement.description.substring(0, 120)}...`
          : announcement.description || announcement.title}
      </Paragraph>

      {/* Meta Information */}
      <Space direction="vertical" size={8} className="announcement-meta">
        <div className="announcement-stats">
          <Space size={16}>
            <span className="stat-item">
              <CalendarOutlined className="stat-icon" />
              <Text type="secondary" className="stat-text">
                {new Date(announcement.date).toLocaleDateString("th-TH", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
            </span>
            <span className="stat-item">
              <ClockCircleOutlined className="stat-icon" />
              <Text type="secondary" className="stat-text">
                {announcement.time}
              </Text>
            </span>
            <span className="stat-item">
              <EyeOutlined className="stat-icon" />
              <Text type="secondary" className="stat-text">
                {announcement.views.toLocaleString()}
              </Text>
            </span>
            {announcement.comments && (
              <span className="stat-item">
                <CommentOutlined className="stat-icon" />
                <Text type="secondary" className="stat-text">
                  {announcement.comments}
                </Text>
              </span>
            )}
          </Space>
        </div>
      </Space>

      {/* Author Info */}
      <div className="announcement-author">
        <Avatar size="small" icon={<UserOutlined />} />
        <Text type="secondary" className="author-text">
          {announcement.author}
        </Text>
        <Text type="secondary" className="publish-time">
          {new Date(`${announcement.date} ${announcement.time}`).toLocaleString(
            "th-TH",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}{" "}
          น.
        </Text>
      </div>

      {/* Tags */}
      {announcement.tags && (
        <div className="announcement-tags">
          {announcement.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index} className="announcement-tag">
              #{tag}
            </Tag>
          ))}
          {announcement.tags.length > 3 && (
            <Tag className="announcement-tag-more">
              +{announcement.tags.length - 3}
            </Tag>
          )}
        </div>
      )}

      {/* Urgent indicator */}
      {announcement.priority === "urgent" && (
        <div className="urgent-indicator">
          <ExclamationCircleOutlined className="urgent-icon" />
          <Text strong className="urgent-text">
            ข่าวด่วน
          </Text>
        </div>
      )}
    </Card>
  );
};

export default AnnouncementCard;
