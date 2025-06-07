import React from "react";
import {
  Modal,
  Typography,
  Space,
  Tag,
  Button,
  Divider,
  Row,
  Col,
  Badge,
  Card,
  List,
} from "antd";
import {
  FileTextOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
  UserOutlined,
  FileOutlined,
  EyeOutlined,
  PrinterOutlined,
  CloseOutlined,
  CalendarOutlined,
  BankOutlined,
  SafetyOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./DocumentDetail.css";

const { Title, Text, Paragraph } = Typography;

const DocumentDetail = ({ document, visible, onClose }) => {
  if (!document) return null;

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
      case "การเงินและบัญชี":
        return <BankOutlined />;
      case "การปกครอง":
        return <TeamOutlined />;
      case "ความมั่นคง":
        return <SafetyOutlined />;
      case "โครงสร้างพื้นฐาน":
        return <BankOutlined />;
      case "ยุทธศาสตร์":
        return <FileTextOutlined />;
      case "การเจ้าหน้าที่":
        return <TeamOutlined />;
      default:
        return <FileTextOutlined />;
    }
  };

  // ข้อมูลจำลองสำหรับไฟล์แนบ
  const attachments = [
    {
      id: 1,
      name: "เอกสารหลัก.pdf",
      size: "2.5 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "เอกสารประกอบ.xlsx",
      size: "890 KB",
      type: "XLSX",
    },
    {
      id: 3,
      name: "รูปภาพประกอบ.jpg",
      size: "1.2 MB",
      type: "IMAGE",
    },
  ];

  // ข้อมูลจำลองสำหรับประวัติการดำเนินการ
  const actionHistory = [
    {
      id: 1,
      action: "สร้างเอกสาร",
      user: "นายสมชาย ใจดี",
      date: "2025-04-23",
      time: "09:15",
      status: "completed",
    },
    {
      id: 2,
      action: "ส่งเพื่อพิจารณา",
      user: "นางสาวสุดา สวยงาม",
      date: "2025-04-23",
      time: "14:30",
      status: "completed",
    },
    {
      id: 3,
      action: "อนุมัติเอกสาร",
      user: "นายผู้อำนวยการ",
      date: "2025-04-23",
      time: "16:08",
      status: "completed",
    },
  ];

  const getActionStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "processing";
      case "rejected":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={900}
      className="document-detail-modal"
      closeIcon={<CloseOutlined className="modal-close-icon" />}
    >
      <div className="document-detail-container">
        {/* Header Section */}
        <div className="document-detail-header">
          <div className="header-top">
            <div className="document-badges">
              <Badge
                dot
                color={getPriorityColor(document.priority)}
                className="priority-badge"
              />
              <Text className="priority-text">
                {getPriorityText(document.priority)}
              </Text>
              <Tag
                color={getFileTypeColor(document.fileType)}
                className="file-type-tag"
              >
                <FileOutlined /> {document.fileType}
              </Tag>
            </div>
            <div className="action-buttons">
              <Button type="primary" icon={<DownloadOutlined />}>
                ดาวน์โหลด
              </Button>
              <Button icon={<ShareAltOutlined />}>แชร์</Button>
              <Button icon={<PrinterOutlined />}>พิมพ์</Button>
            </div>
          </div>

          <Title level={3} className="document-detail-title">
            {document.title}
          </Title>

          <div className="document-info-row">
            <Space size={24} wrap>
              <span className="info-item">
                {getCategoryIcon(document.category)}
                <Text strong className="date-text">
                  {document.category}
                </Text>
              </span>
              <span className="info-item">
                <CalendarOutlined />
                <Text className="date-text">
                  {new Date(document.date).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </span>
              <span className="info-item">
                <ClockCircleOutlined />
                <Text className="date-text">{document.time} น.</Text>
              </span>
              <span className="info-item">
                <UserOutlined />
                <Text className="date-text">{document.author}</Text>
              </span>
            </Space>
          </div>

          <div className="document-number-detail">
            <FileTextOutlined className="doc-number-icon" />
            <Text code className="doc-number-text">
              เลขที่หนังสือ: {document.docNumber}
            </Text>
          </div>
        </div>

        <Divider />

        {/* Content Section */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            {/* Document Content */}
            <Card title="รายละเอียดเอกสาร" className="content-card">
              <Paragraph className="document-description">
                {document.description ||
                  `นี่คือรายละเอียดของเอกสาร "${document.title}" ที่ออกโดย ${
                    document.author
                  } 
                  เป็นเอกสารที่มีความสำคัญในระดับ ${getPriorityText(
                    document.priority
                  )} 
                  และจัดอยู่ในหมวดหมู่ ${document.category}
                  
                  เอกสารนี้ประกอบด้วยข้อมูลที่สำคัญต่อการดำเนินงานของหน่วยงาน 
                  และได้ผ่านการพิจารณาอนุมัติตามขั้นตอนที่กำหนดไว้แล้ว
                  
                  สำหรับรายละเอียดเพิ่มเติม สามารถดาวน์โหลดไฟล์เอกสารฉบับเต็มได้จากส่วนไฟล์แนบด้านล่าง`}
              </Paragraph>

              {/* Document Stats */}
              <div className="document-stats-detail">
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="stat-card">
                      <DownloadOutlined className="stat-icon" />
                      <div>
                        <Text type="secondary">ดาวน์โหลด</Text>
                        <br />
                        <Text strong>{document.downloads || 89}</Text>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="stat-card">
                      <FileOutlined className="stat-icon" />
                      <div>
                        <Text type="secondary">ขนาดไฟล์</Text>
                        <br />
                        <Text strong>{document.fileSize}</Text>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

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
                      >
                        ดาวน์โหลด
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Tag color={getFileTypeColor(attachment.type)}>
                          {attachment.type}
                        </Tag>
                      }
                      title={attachment.name}
                      description={`ขนาด: ${attachment.size}`}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            {/* Action History */}
            <Card title="ประวัติการดำเนินการ" className="history-card">
              <List
                dataSource={actionHistory}
                renderItem={(action) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Badge
                          status={getActionStatusColor(action.status)}
                          className="action-badge"
                        />
                      }
                      title={action.action}
                      description={
                        <Space direction="vertical" size={2}>
                          <Text type="secondary">{action.user}</Text>
                          <Text type="secondary" className="action-date">
                            {action.date} เวลา {action.time} น.
                          </Text>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>

            {/* Related Documents */}
            <Card title="เอกสารที่เกี่ยวข้อง" className="related-card">
              <List
                size="small"
                dataSource={[
                  "รายงานการเงิน ไตรมาส 1",
                  "แผนงบประมาณ ปี 2568",
                  "มติการประชุม วันที่ 20 เม.ย.",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" size="small" className="related-link">
                      {item}
                    </Button>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default DocumentDetail;
