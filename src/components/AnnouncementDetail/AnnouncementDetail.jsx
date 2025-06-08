import React, { useState } from "react";
import {
  Modal,
  Typography,
  Space,
  Tag,
  Button,
  Divider,
  Row,
  Col,
  Card,
  List,
  Avatar,
  Progress,
  Timeline,
} from "antd";
import {
  SoundOutlined,
  HeartOutlined,
  ShareAltOutlined,
  CloseOutlined,
  CalendarOutlined,
  UserOutlined,
  DownloadOutlined,
  PrinterOutlined,
  EyeOutlined,
  CommentOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./AnnouncementDetail.css";

const { Title, Text, Paragraph } = Typography;

const AnnouncementDetail = ({ announcement, visible, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  if (!announcement) return null;

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

  // ข้อมูลจำลองสำหรับเนื้อหาประชาสัมพันธ์
  const fullContent = `
    ${announcement.description || announcement.title}
    
    ## รายละเอียดการประชาสัมพันธ์
    
    การประชาสัมพันธ์นี้มีความสำคัญต่อประชาชนในพื้นที่ โดยมีรายละเอียดดังนี้:
    
    ### วัตถุประสงค์
    - เพื่อแจ้งข้อมูลข่าวสารที่สำคัญให้ประชาชนทราบ
    - เพื่อส่งเสริมการมีส่วนร่วมของประชาชน
    - เพื่อสร้างความโปร่งใสในการดำเนินงาน
    
    ### กลุ่มเป้าหมาย
    - ประชาชนในเขตจังหวัดเชียงใหม่
    - หน่วยงานที่เกี่ยวข้อง
    - สื่อมวลชน
    
    ### ช่องทางการประชาสัมพันธ์
    - เว็บไซต์ราชการ
    - สื่อสังคมออนไลน์
    - หอกระจายข่าว
    - สื่อท้องถิ่น
    
    ## ข้อมูลเพิ่มเติม
    
    หากต้องการข้อมูลเพิ่มเติม ประชาชนสามารถติดต่อสอบถามได้ที่หน่วยงานที่เกี่ยวข้อง หรือผ่านช่องทางต่างๆ ที่ได้จัดเตรียมไว้
    
    ## ติดต่อสอบถาม
    
    - โทรศัพท์: 053-123-456
    - อีเมล: pr@chiangmai-admin.go.th
    - เว็บไซต์: www.chiangmai-admin.go.th
    - Facebook: ที่ทำการปกครองจังหวัดเชียงใหม่
  `;

  // ข้อมูลจำลองสำหรับความคิดเห็น
  const comments = [
    {
      id: 1,
      author: "นายอนุชา ดีใจ",
      content: "ข้อมูลชัดเจนดีครับ ขอบคุณสำหรับการแจ้ง",
      date: "2025-06-08",
      likes: 8,
    },
    {
      id: 2,
      author: "นางสาวมาลี สวยดี",
      content: "ดีค่ะที่มีการแจ้งให้ทราบล่วงหน้า",
      date: "2025-06-07",
      likes: 5,
    },
  ];

  // ข้อมูลจำลองสำหรับประชาสัมพันธ์ที่เกี่ยวข้อง
  const relatedAnnouncements = [
    {
      id: 1,
      title: "ประกาศการปิดถนนเพื่อจัดงานเทศกาล",
      date: "2025-06-06",
      views: 567,
    },
    {
      id: 2,
      title: "เชิญร่วมงานประชุมประชาคม",
      date: "2025-06-05",
      views: 345,
    },
    {
      id: 3,
      title: "แจ้งการให้บริการในวันหยุดราชการ",
      date: "2025-06-04",
      views: 789,
    },
  ];

  // ข้อมูลจำลองสำหรับไฟล์แนบ
  const attachments = [
    {
      id: 1,
      name: "แผนที่สถานที่จัดงาน.pdf",
      size: "1.2 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "โปรแกรมการดำเนินงาน.docx",
      size: "650 KB",
      type: "DOCX",
    },
    {
      id: 3,
      name: "รูปภาพประกอบ.jpg",
      size: "2.1 MB",
      type: "IMAGE",
    },
  ];

  // ข้อมูลจำลองสำหรับไทม์ไลน์
  const timeline = [
    {
      date: "2025-06-08",
      action: "เผยแพร่ประชาสัมพันธ์",
      status: "completed",
    },
    {
      date: "2025-06-07",
      action: "จัดเตรียมข้อมูล",
      status: "completed",
    },
    {
      date: "2025-06-06",
      action: "อนุมัติการประชาสัมพันธ์",
      status: "completed",
    },
  ];

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleScroll = (e) => {
    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setReadingProgress(Math.min(progress, 100));
  };

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={1000}
      className="announcement-detail-modal"
      closeIcon={<CloseOutlined className="modal-close-icon" />}
      bodyStyle={{ padding: 0, maxHeight: "90vh", overflow: "hidden" }}
    >
      <div className="announcement-detail-container">
        {/* Reading Progress */}
        <div className="reading-progress">
          <Progress
            percent={readingProgress}
            showInfo={false}
            strokeColor={{
              "0%": "#1890ff",
              "100%": "#096dd9",
            }}
            size="small"
          />
        </div>

        {/* Header Section */}
        <div className="announcement-detail-header">
          <div
            className="header-background"
            style={{ backgroundImage: `url(${announcement.image})` }}
          />
          <div className="header-overlay" />
          <div className="header-content">
            <div className="header-meta">
              <Tag
                color={getCategoryColor(announcement.category)}
                className="category-tag"
              >
                <span className="category-icon">
                  {getCategoryIcon(announcement.category)}
                </span>
                {announcement.category}
              </Tag>
              {announcement.priority !== "normal" && (
                <Tag
                  color={
                    announcement.priority === "urgent" ? "#ff4d4f" : "#faad14"
                  }
                  className="priority-tag"
                >
                  <ExclamationCircleOutlined />
                  {announcement.priority === "urgent" ? "ด่วนมาก" : "สำคัญ"}
                </Tag>
              )}
            </div>

            <Title level={2} className="announcement-detail-title">
              {announcement.title}
            </Title>

            <div className="announcement-meta-info">
              <Space size={24} wrap>
                <span className="meta-item">
                  <CalendarOutlined />
                  <Text>
                    {new Date(announcement.date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Text>
                </span>
                <span className="meta-item">
                  <ClockCircleOutlined />
                  <Text>{announcement.time} น.</Text>
                </span>
                <span className="meta-item">
                  <UserOutlined />
                  <Text>{announcement.author}</Text>
                </span>
                <span className="meta-item">
                  <EyeOutlined />
                  <Text>{announcement.views.toLocaleString()} ครั้ง</Text>
                </span>
              </Space>
            </div>

            <div className="header-actions">
              <Button
                type={liked ? "primary" : "default"}
                icon={<HeartOutlined />}
                onClick={handleLike}
                className="action-btn"
              >
                {liked ? "ถูกใจแล้ว" : "ถูกใจ"} (
                {(announcement.likes || 0) + (liked ? 1 : 0)})
              </Button>
              <Button icon={<ShareAltOutlined />} className="action-btn">
                แชร์
              </Button>
              <Button icon={<PrinterOutlined />} className="action-btn">
                พิมพ์
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="announcement-detail-content" onScroll={handleScroll}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              {/* Main Content */}
              <Card className="content-card">
                <div className="article-content">
                  {fullContent.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("##")) {
                      return (
                        <Title level={4} key={index} className="section-title">
                          {paragraph.replace("##", "").trim()}
                        </Title>
                      );
                    } else if (paragraph.startsWith("###")) {
                      return (
                        <Title
                          level={5}
                          key={index}
                          className="subsection-title"
                        >
                          {paragraph.replace("###", "").trim()}
                        </Title>
                      );
                    } else if (paragraph.trim().startsWith("-")) {
                      return (
                        <li key={index} className="article-list-item">
                          {paragraph.replace("-", "").trim()}
                        </li>
                      );
                    } else if (paragraph.trim()) {
                      return (
                        <Paragraph key={index} className="article-paragraph">
                          {paragraph.trim()}
                        </Paragraph>
                      );
                    }
                    return null;
                  })}
                </div>
              </Card>

              {/* Tags */}
              {announcement.tags && (
                <Card title="หัวข้อที่เกี่ยวข้อง" className="tags-card">
                  <div className="announcement-tags-detail">
                    {announcement.tags.map((tag, index) => (
                      <Tag key={index} className="announcement-tag-detail">
                        #{tag}
                      </Tag>
                    ))}
                  </div>
                </Card>
              )}

              {/* Comments */}
              <Card
                title={`ความคิดเห็น (${comments.length})`}
                className="comments-card"
                extra={
                  <Button type="primary" size="small">
                    แสดงความคิดเห็น
                  </Button>
                }
              >
                <List
                  dataSource={comments}
                  renderItem={(comment) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title={
                          <Space>
                            <Text strong>{comment.author}</Text>
                            <Text type="secondary" className="comment-date">
                              {new Date(comment.date).toLocaleDateString(
                                "th-TH"
                              )}
                            </Text>
                          </Space>
                        }
                        description={comment.content}
                      />
                      <div className="comment-actions">
                        <Button
                          type="text"
                          size="small"
                          icon={<HeartOutlined />}
                        >
                          {comment.likes}
                        </Button>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              {/* Attachments */}
              <Card title="ไฟล์แนบ" className="attachments-card">
                <List
                  dataSource={attachments}
                  renderItem={(attachment) => (
                    <List.Item
                      actions={[
                        <Button
                          type="link"
                          icon={<DownloadOutlined />}
                          key="download"
                          className="download-btn"
                        >
                          ดาวน์โหลด
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <div className="attachment-icon">
                            <FileTextOutlined />
                          </div>
                        }
                        title={
                          <Text className="attachment-name">
                            {attachment.name}
                          </Text>
                        }
                        description={
                          <Space>
                            <Tag color="#1890ff" size="small">
                              {attachment.type}
                            </Tag>
                            <Text type="secondary" className="attachment-size">
                              {attachment.size}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              {/* Timeline */}
              <Card title="ไทม์ไลน์การดำเนินงาน" className="timeline-card">
                <Timeline className="announcement-timeline">
                  {timeline.map((item, index) => (
                    <Timeline.Item
                      key={index}
                      dot={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
                      color="green"
                    >
                      <div className="timeline-item">
                        <Text strong className="timeline-action">
                          {item.action}
                        </Text>
                        <br />
                        <Text type="secondary" className="timeline-date">
                          {new Date(item.date).toLocaleDateString("th-TH")}
                        </Text>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>

              {/* Stats */}
              <Card title="สถิติการเข้าชม" className="stats-card">
                <div className="announcement-stats">
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <EyeOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ยอดดู</Text>
                          <br />
                          <Text strong>
                            {announcement.views.toLocaleString()}
                          </Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <HeartOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ถูกใจ</Text>
                          <br />
                          <Text strong>{announcement.likes || 0}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <CommentOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ความคิดเห็น</Text>
                          <br />
                          <Text strong>{comments.length}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <DownloadOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ดาวน์โหลด</Text>
                          <br />
                          <Text strong>{attachments.length}</Text>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>

              {/* Related Announcements */}
              <Card title="ประชาสัมพันธ์ที่เกี่ยวข้อง" className="related-card">
                <List
                  size="small"
                  dataSource={relatedAnnouncements}
                  renderItem={(item) => (
                    <List.Item className="related-item">
                      <List.Item.Meta
                        title={
                          <Button
                            type="link"
                            className="related-title"
                            size="small"
                          >
                            {item.title}
                          </Button>
                        }
                        description={
                          <Space size={12}>
                            <Text type="secondary" className="related-meta">
                              <CalendarOutlined />{" "}
                              {new Date(item.date).toLocaleDateString("th-TH")}
                            </Text>
                            <Text type="secondary" className="related-meta">
                              <EyeOutlined /> {item.views}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default AnnouncementDetail;
