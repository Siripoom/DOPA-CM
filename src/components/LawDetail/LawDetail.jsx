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
  Collapse,
  Timeline,
  Progress,
} from "antd";
import {
  SafetyOutlined,
  BookOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  PrinterOutlined,
  CloseOutlined,
  CalendarOutlined,
  BankOutlined,
  TeamOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  HistoryOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./LawDetail.css";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const LawDetail = ({ law, visible, onClose }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  if (!law) return null;

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

  // ข้อมูลจำลองสำหรับเนื้อหากฎหมาย
  const lawSections = [
    {
      title: "หมวดที่ 1 บทบัญญัติทั่วไป",
      articles: [
        {
          number: "มาตรา 1",
          content: 'กฎหมายนี้เรียกว่า "' + law.title + '"',
        },
        {
          number: "มาตรา 2",
          content:
            "กฎหมายนี้ให้ใช้บังคับตั้งแต่วันที่ " +
            new Date(law.effectiveDate).toLocaleDateString("th-TH"),
        },
        {
          number: "มาตรา 3",
          content:
            "ในกฎหมายนี้ นิยามและความหมายของคำต่างๆ ให้เป็นไปตามที่กำหนดไว้ในบทบัญญัตินี้",
        },
      ],
    },
    {
      title: "หมวดที่ 2 ขอบเขตการบังคับใช้",
      articles: [
        {
          number: "มาตรา 4",
          content: "กฎหมายนี้ใช้บังคับกับบุคคลทุกคนที่อยู่ในราชอาณาจักร",
        },
        {
          number: "มาตรา 5",
          content:
            "การดำเนินการใดๆ ที่เกี่ยวข้องกับเรื่องที่กำหนดในกฎหมายนี้ ต้องปฏิบัติตามบทบัญญัติที่กำหนดไว้",
        },
      ],
    },
    {
      title: "หมวดที่ 3 สิทธิและหน้าที่",
      articles: [
        {
          number: "มาตรา 6",
          content: "บุคคลมีสิทธิและหน้าที่ตามที่กำหนดไว้ในกฎหมายนี้",
        },
        {
          number: "มาตรา 7",
          content:
            "การใช้สิทธิต้องไม่ขัดต่อกฎหมาย ศีลธรรม และความสงบเรียบร้อยของประชาชน",
        },
      ],
    },
  ];

  // ข้อมูลจำลองสำหรับไฟล์เกี่ยวข้อง
  const relatedFiles = [
    {
      id: 1,
      name: "ฉบับเต็มของกฎหมาย.pdf",
      size: "3.2 MB",
      type: "PDF",
      description: "เอกสารกฎหมายฉบับสมบูรณ์",
    },
    {
      id: 2,
      name: "คำอธิบายประกอบ.pdf",
      size: "1.8 MB",
      type: "PDF",
      description: "คำอธิบายและตัวอย่างการใช้",
    },
    {
      id: 3,
      name: "แบบฟอร์มที่เกี่ยวข้อง.docx",
      size: "450 KB",
      type: "DOCX",
      description: "แบบฟอร์มสำหรับการยื่นคำขอ",
    },
  ];

  // ข้อมูลจำลองสำหรับประวัติการแก้ไข
  const revisionHistory = [
    {
      date: "2025-01-15",
      version: "ฉบับที่ 3",
      description: "แก้ไขเพิ่มเติมมาตรา 15 และ 16 เรื่องการบังคับใช้",
      status: "ใช้บังคับ",
    },
    {
      date: "2024-08-20",
      version: "ฉบับที่ 2",
      description: "ปรับปรุงหมวดที่ 2 เพื่อให้สอดคล้องกับกฎหมายใหม่",
      status: "ยกเลิกแล้ว",
    },
    {
      date: "2024-01-10",
      version: "ฉบับที่ 1",
      description: "ประกาศใช้ครั้งแรก",
      status: "ยกเลิกแล้ว",
    },
  ];

  // ข้อมูลจำลองสำหรับกฎหมายที่เกี่ยวข้อง
  const relatedLaws = [
    {
      id: 1,
      title: "พระราชบัญญัติการบริหารราชการแผ่นดิน",
      lawCode: "พ.ร.บ. 2534",
      relevance: "เกี่ยวข้องโดยตรง",
    },
    {
      id: 2,
      title: "ประกาศกระทรวงมหาดไทย เรื่องหลักเกณฑ์การปฏิบัติ",
      lawCode: "ประกาศ 2567",
      relevance: "ใช้ประกอบ",
    },
    {
      id: 3,
      title: "ระเบียบสำนักนายกรัฐมนตรี ว่าด้วยการบริหารจัดการ",
      lawCode: "ระเบียบ 2566",
      relevance: "อ้างอิง",
    },
  ];

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
      className="law-detail-modal"
      closeIcon={<CloseOutlined className="modal-close-icon" />}
      bodyStyle={{ padding: 0, maxHeight: "90vh", overflow: "hidden" }}
    >
      <div className="law-detail-container">
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
        <div className="law-detail-header">
          <div className="header-content">
            <div className="header-meta">
              <Tag
                color={getCategoryColor(law.category)}
                className="category-tag"
                icon={getCategoryIcon(law.category)}
              >
                {law.category}
              </Tag>
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

            <div className="law-code-header">
              <Text code className="law-code-text">
                {law.lawCode}
              </Text>
            </div>

            <Title level={2} className="law-detail-title">
              {law.title}
            </Title>

            <div className="law-meta-info">
              <Space size={24} wrap>
                <span className="meta-item">
                  <CalendarOutlined />
                  <Text>
                    มีผลตั้งแต่:{" "}
                    {new Date(law.effectiveDate).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Text>
                </span>
                <span className="meta-item">
                  <EyeOutlined />
                  <Text>{law.views.toLocaleString()} ครั้ง</Text>
                </span>
                <span className="meta-item">
                  <HistoryOutlined />
                  <Text>
                    อัปเดตล่าสุด:{" "}
                    {new Date(
                      law.lastUpdate || law.effectiveDate
                    ).toLocaleDateString("th-TH")}
                  </Text>
                </span>
              </Space>
            </div>

            <div className="header-actions">
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                className="action-btn"
              >
                ดาวน์โหลด PDF
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
        <div className="law-detail-content" onScroll={handleScroll}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              {/* Law Description */}
              <Card className="content-card">
                <Title level={4} className="section-title">
                  <ExclamationCircleOutlined /> ประเด็นสำคัญ
                </Title>
                <Paragraph className="law-description">
                  {law.description}
                </Paragraph>

                <Divider />

                <Title level={4} className="section-title">
                  <BookOutlined /> เนื้อหากฎหมาย
                </Title>

                <Collapse
                  defaultActiveKey={["0"]}
                  className="law-sections"
                  expandIconPosition="right"
                >
                  {lawSections.map((section, sectionIndex) => (
                    <Panel
                      header={
                        <Text strong className="section-header">
                          {section.title}
                        </Text>
                      }
                      key={sectionIndex}
                      className="section-panel"
                    >
                      {section.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="article-item">
                          <div className="article-header">
                            <Text strong className="article-number">
                              {article.number}
                            </Text>
                          </div>
                          <Paragraph className="article-content">
                            {article.content}
                          </Paragraph>
                        </div>
                      ))}
                    </Panel>
                  ))}
                </Collapse>
              </Card>

              {/* Tags */}
              {law.tags && (
                <Card title="หัวข้อที่เกี่ยวข้อง" className="tags-card">
                  <div className="law-tags-detail">
                    {law.tags.map((tag, index) => (
                      <Tag key={index} className="law-tag-detail">
                        #{tag}
                      </Tag>
                    ))}
                  </div>
                </Card>
              )}
            </Col>

            <Col xs={24} lg={8}>
              {/* Related Files */}
              <Card title="เอกสารที่เกี่ยวข้อง" className="files-card">
                <List
                  dataSource={relatedFiles}
                  renderItem={(file) => (
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
                          <div className="file-icon">
                            <FileTextOutlined />
                          </div>
                        }
                        title={<Text className="file-name">{file.name}</Text>}
                        description={
                          <Space direction="vertical" size={2}>
                            <Text type="secondary" className="file-size">
                              {file.size}
                            </Text>
                            <Text type="secondary" className="file-description">
                              {file.description}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              {/* Revision History */}
              <Card title="ประวัติการแก้ไข" className="history-card">
                <Timeline className="revision-timeline">
                  {revisionHistory.map((revision, index) => (
                    <Timeline.Item
                      key={index}
                      dot={
                        revision.status === "ใช้บังคับ" ? (
                          <CheckCircleOutlined style={{ color: "#52c41a" }} />
                        ) : (
                          <HistoryOutlined style={{ color: "#8c8c8c" }} />
                        )
                      }
                      color={revision.status === "ใช้บังคับ" ? "green" : "gray"}
                    >
                      <div className="revision-item">
                        <Text strong className="revision-version">
                          {revision.version}
                        </Text>
                        <br />
                        <Text type="secondary" className="revision-date">
                          {new Date(revision.date).toLocaleDateString("th-TH")}
                        </Text>
                        <br />
                        <Text className="revision-description">
                          {revision.description}
                        </Text>
                        <br />
                        <Tag
                          color={
                            revision.status === "ใช้บังคับ"
                              ? "green"
                              : "default"
                          }
                          size="small"
                          className="revision-status"
                        >
                          {revision.status}
                        </Tag>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>

              {/* Related Laws */}
              <Card title="กฎหมายที่เกี่ยวข้อง" className="related-laws-card">
                <List
                  size="small"
                  dataSource={relatedLaws}
                  renderItem={(relatedLaw) => (
                    <List.Item className="related-law-item">
                      <List.Item.Meta
                        title={
                          <Button
                            type="link"
                            className="related-law-title"
                            size="small"
                          >
                            {relatedLaw.title}
                          </Button>
                        }
                        description={
                          <Space direction="vertical" size={2}>
                            <Text code className="related-law-code">
                              {relatedLaw.lawCode}
                            </Text>
                            <Tag
                              size="small"
                              color="blue"
                              className="relevance-tag"
                            >
                              {relatedLaw.relevance}
                            </Tag>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              {/* Law Stats */}
              <Card title="สถิติการเข้าชม" className="stats-card">
                <div className="law-stats">
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <EyeOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ยอดดู</Text>
                          <br />
                          <Text strong>{law.views.toLocaleString()}</Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="stat-item-detail">
                        <DownloadOutlined className="stat-icon-detail" />
                        <div>
                          <Text type="secondary">ดาวน์โหลด</Text>
                          <br />
                          <Text strong>{law.downloads || 0}</Text>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default LawDetail;
