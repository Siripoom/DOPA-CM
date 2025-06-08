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
  Rate,
  Avatar,
  Progress,
} from "antd";
import {
  BulbOutlined,
  HeartOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  BookOutlined,
  CloseOutlined,
  CalendarOutlined,
  UserOutlined,
  DownloadOutlined,
  PrinterOutlined,
  StarFilled,
  CommentOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import "./KnowledgeDetail.css";

const { Title, Text, Paragraph } = Typography;

const KnowledgeDetail = ({ knowledge, visible, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  if (!knowledge) return null;

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

  // ข้อมูลจำลองสำหรับไฟล์แนบ
  const attachments = [
    {
      id: 1,
      name: "คู่มือการบริการประชาชน.pdf",
      size: "2.3 MB",
      type: "PDF",
      icon: <FilePdfOutlined />,
      color: "#ff4d4f",
    },
    {
      id: 2,
      name: "แบบฟอร์มการยื่นคำขอ.docx",
      size: "450 KB",
      type: "DOCX",
      icon: <FileTextOutlined />,
      color: "#1890ff",
    },
    {
      id: 3,
      name: "วีดีโอการสาธิต.mp4",
      size: "15.2 MB",
      type: "VIDEO",
      icon: <VideoCameraOutlined />,
      color: "#722ed1",
    },
    {
      id: 4,
      name: "รูปภาพประกอบ.jpg",
      size: "1.8 MB",
      type: "IMAGE",
      icon: <PictureOutlined />,
      color: "#52c41a",
    },
  ];

  // ข้อมูลจำลองสำหรับเนื้อหาบทความ
  const articleContent = `
    ${knowledge.description}
    
    ## รายละเอียดเพิ่มเติม
    
    บทความนี้จะอธิบายถึงขั้นตอนและแนวทางในการ${knowledge.title.toLowerCase()} โดยมีรายละเอียดดังนี้:
    
    ### ขั้นตอนที่ 1: การเตรียมเอกสาร
    - เตรียมเอกสารประกอบการยื่นคำขอ
    - ตรวจสอบความถูกต้องของข้อมูล
    - จัดเตรียมสำเนาเอกสารที่จำเป็น
    
    ### ขั้นตอนที่ 2: การยื่นคำขอ
    - นำเอกสารไปยื่นที่หน่วยงานที่เกี่ยวข้อง
    - ชำระค่าธรรมเนียม (หากมี)
    - รอการตรวจสอบจากเจ้าหน้าที่
    
    ### ขั้นตอนที่ 3: การติดตามผล
    - ติดตามสถานะการพิจารณา
    - รับผลการพิจารณา
    - ดำเนินการตามที่ได้รับอนุมัติ
    
    ## สิ่งที่ควรทราบ
    
    การดำเนินการตามขั้นตอนที่กำหนดจะช่วยให้การบริการเป็นไปอย่างราบรื่นและมีประสิทธิภาพ ประชาชนสามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่หน่วยงานที่เกี่ยวข้อง
    
    ## ติดต่อสอบถาม
    
    หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อได้ที่:
    - โทรศัพท์: 053-123-456
    - อีเมล: info@chiangmai-admin.go.th
    - เว็บไซต์: www.chiangmai-admin.go.th
  `;

  // ข้อมูลจำลองสำหรับความคิดเห็น
  const comments = [
    {
      id: 1,
      author: "นายสมชาย ใจดี",
      content: "ข้อมูลมีประโยชน์มากครับ ขอบคุณสำหรับการแชร์",
      date: "2025-06-01",
      likes: 5,
    },
    {
      id: 2,
      author: "นางสาวสุดา สวยงาม",
      content: "อธิบายได้เข้าใจง่าย ขั้นตอนชัดเจนดีค่ะ",
      date: "2025-05-30",
      likes: 3,
    },
  ];

  // ข้อมูลจำลองสำหรับบทความที่เกี่ยวข้อง
  const relatedArticles = [
    {
      id: 1,
      title: "แนวทางการขอใบอนุญาตประกอบการ",
      views: 890,
      readTime: "4 นาที",
    },
    {
      id: 2,
      title: "สิทธิการเข้าถึงข้อมูลข่าวสารของราชการ",
      views: 656,
      readTime: "6 นาที",
    },
    {
      id: 3,
      title: "การยื่นเรื่องราวร้องทุกข์ต่อหน่วยงานรัฐ",
      views: 445,
      readTime: "5 นาที",
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
      className="knowledge-detail-modal"
      closeIcon={<CloseOutlined className="modal-close-icon" />}
      bodyStyle={{ padding: 0, maxHeight: "90vh", overflow: "hidden" }}
    >
      <div className="knowledge-detail-container">
        {/* Reading Progress */}
        <div className="reading-progress">
          <Progress
            percent={readingProgress}
            showInfo={false}
            strokeColor={{
              "0%": "#722ed1",
              "100%": "#531dab",
            }}
            size="small"
          />
        </div>

        {/* Header Section */}
        <div className="knowledge-detail-header">
          <div
            className="header-background"
            style={{ backgroundImage: `url(${knowledge.image})` }}
          />
          <div className="header-overlay" />
          <div className="header-content">
            <div className="header-meta">
              <Tag
                color={getCategoryColor(knowledge.category)}
                className="category-tag"
              >
                <span className="category-icon">
                  {getCategoryIcon(knowledge.category)}
                </span>
                {knowledge.category}
              </Tag>
              {knowledge.difficulty && (
                <Tag className="difficulty-tag">{knowledge.difficulty}</Tag>
              )}
            </div>

            <Title level={2} className="knowledge-detail-title">
              {knowledge.title}
            </Title>

            <div className="knowledge-meta-info">
              <Space size={24} wrap>
                <span className="meta-item">
                  <CalendarOutlined />
                  <Text>
                    {new Date(knowledge.publishDate).toLocaleDateString(
                      "th-TH",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </Text>
                </span>
                <span className="meta-item">
                  <UserOutlined />
                  <Text>{knowledge.author}</Text>
                </span>
                <span className="meta-item">
                  <ClockCircleOutlined />
                  <Text>{knowledge.readTime}</Text>
                </span>
                <span className="meta-item">
                  <EyeOutlined />
                  <Text>{knowledge.views.toLocaleString()} ครั้ง</Text>
                </span>
                {knowledge.rating && (
                  <span className="meta-item">
                    <StarFilled />
                    <Text>{knowledge.rating}</Text>
                  </span>
                )}
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
                {(knowledge.likes || 0) + (liked ? 1 : 0)})
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
        <div className="knowledge-detail-content" onScroll={handleScroll}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              {/* Main Content */}
              <Card className="content-card">
                <div className="article-content">
                  {articleContent.split("\n").map((paragraph, index) => {
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
              {knowledge.tags && (
                <Card title="หัวข้อที่เกี่ยวข้อง" className="tags-card">
                  <div className="knowledge-tags-detail">
                    {knowledge.tags.map((tag, index) => (
                      <Tag key={index} className="knowledge-tag-detail">
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
              <Card title="ไฟล์ประกอบ" className="attachments-card">
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
                          <div
                            className="attachment-icon"
                            style={{ color: attachment.color }}
                          >
                            {attachment.icon}
                          </div>
                        }
                        title={
                          <Text className="attachment-name">
                            {attachment.name}
                          </Text>
                        }
                        description={
                          <Space>
                            <Tag color={attachment.color} size="small">
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

              {/* Article Stats */}
              <Card title="สถิติบทความ" className="stats-card">
                <div className="article-stats">
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <EyeOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ยอดดู</Text>
                          <br />
                          <Text strong>{knowledge.views.toLocaleString()}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <HeartOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ถูกใจ</Text>
                          <br />
                          <Text strong>{knowledge.likes || 0}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <CommentOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ความคิดเห็น</Text>
                          <br />
                          <Text strong>{knowledge.comments || 0}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <StarFilled className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">คะแนน</Text>
                          <br />
                          <Text strong>{knowledge.rating || "N/A"}</Text>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>

              {/* Related Articles */}
              <Card title="บทความที่เกี่ยวข้อง" className="related-card">
                <List
                  size="small"
                  dataSource={relatedArticles}
                  renderItem={(article) => (
                    <List.Item className="related-item">
                      <List.Item.Meta
                        title={
                          <Button
                            type="link"
                            className="related-title"
                            size="small"
                          >
                            {article.title}
                          </Button>
                        }
                        description={
                          <Space size={12}>
                            <Text type="secondary" className="related-meta">
                              <EyeOutlined /> {article.views}
                            </Text>
                            <Text type="secondary" className="related-meta">
                              <ClockCircleOutlined /> {article.readTime}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              {/* Rating */}
              <Card title="ให้คะแนนบทความ" className="rating-card">
                <div className="rating-section">
                  <div className="current-rating">
                    <Text>คะแนนเฉลี่ย</Text>
                    <br />
                    <Space>
                      <Rate
                        disabled
                        value={knowledge.rating || 0}
                        allowHalf
                        className="rating-stars"
                      />
                      <Text strong>{knowledge.rating || 0} / 5</Text>
                    </Space>
                  </div>
                  <Divider />
                  <div className="user-rating">
                    <Text>ให้คะแนนบทความนี้</Text>
                    <br />
                    <Rate className="user-rating-stars" />
                    <br />
                    <Button
                      type="primary"
                      size="small"
                      className="submit-rating"
                    >
                      ส่งคะแนน
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default KnowledgeDetail;
