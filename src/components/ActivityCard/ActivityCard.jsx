import React from "react";
import { Card, Typography, Space, Tag, Button, Avatar } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  EyeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./ActivityCard.css";

const { Text } = Typography;

const ActivityCard = ({ activity }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "กำลังดำเนินการ":
        return "processing";
      case "เสร็จสิ้น":
        return "success";
      case "กำลังมา":
        return "warning";
      default:
        return "default";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "กำลังดำเนินการ":
        return "🔄 กำลังดำเนินการ";
      case "เสร็จสิ้น":
        return "✅ เสร็จสิ้นแล้ว";
      case "กำลังมา":
        return "📅 กำลังจะมาถึง";
      default:
        return status;
    }
  };

  return (
    <Card
      hoverable
      className="activity-card"
      cover={
        <div className="activity-cover">
          <img
            src={activity.image}
            alt={activity.title}
            className="activity-image"
          />
          <div className="activity-overlay">
            <Tag
              color={getStatusColor(activity.status)}
              className="activity-status-tag"
            >
              {getStatusText(activity.status)}
            </Tag>
          </div>
        </div>
      }
      bodyStyle={{ padding: "20px" }}
      actions={[
        <Button
          type="text"
          icon={<EyeOutlined />}
          className="activity-action-btn"
        >
          ดูรายละเอียด
        </Button>,
        <Button
          type="text"
          icon={<ShareAltOutlined />}
          className="activity-action-btn"
        >
          แชร์
        </Button>,
      ]}
    >
      {/* หมวดหมู่กิจกรรม */}
      <div className="activity-tags">
        {activity.tags.map((tag, index) => (
          <Tag key={index} className="activity-tag">
            {tag}
          </Tag>
        ))}
      </div>

      {/* ชื่อกิจกรรม */}
      <div className="activity-title">
        <Text strong className="activity-title-text">
          {activity.title}
        </Text>
      </div>

      {/* รายละเอียดกิจกรรม */}
      <Space direction="vertical" size={12} className="activity-details">
        <div className="activity-detail-item">
          <CalendarOutlined className="activity-icon activity-icon-date" />
          <Text className="activity-detail-text">
            {new Date(activity.date).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            เวลา {activity.time} น.
          </Text>
        </div>

        <div className="activity-detail-item">
          <EnvironmentOutlined className="activity-icon activity-icon-location" />
          <Text className="activity-detail-text">{activity.location}</Text>
        </div>

        <div className="activity-detail-item">
          <TeamOutlined className="activity-icon activity-icon-participants" />
          <Text className="activity-detail-text">
            ผู้เข้าร่วม {activity.participants} คน
          </Text>
        </div>
      </Space>

      {/* ผู้จัดกิจกรรม */}
      {activity.organizer && (
        <div className="activity-organizer">
          <Avatar size="small" icon={<TeamOutlined />} />
          <Text type="secondary" className="activity-organizer-text">
            จัดโดย: {activity.organizer}
          </Text>
        </div>
      )}

      {/* สถิติการดู */}
      {activity.views && (
        <div className="activity-stats">
          <Space size={16}>
            <span className="activity-stat-item">
              <EyeOutlined className="activity-stat-icon" />
              <Text type="secondary">{activity.views.toLocaleString()}</Text>
            </span>
          </Space>
        </div>
      )}
    </Card>
  );
};

export default ActivityCard;
