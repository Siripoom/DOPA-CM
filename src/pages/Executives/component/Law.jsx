import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Button,
  Modal,
  Divider,
  Avatar,
  Tabs,
  Breadcrumb,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  BookOutlined,
  HomeOutlined,
  DoubleRightOutlined,
  TeamOutlined,
  StarOutlined,
  NotificationOutlined,
  TrophyOutlined,
  BankOutlined,
  SafetyOutlined,
  RightOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const sectionLabels = {
  hr: "ฝ่ายบริหารงานบุคคล",
  general: "ฝ่ายบริหารงานทั่วไป",
  register: "กลุ่มงานการเงินและบัญชี",
  management: "กลุ่มงานปกครอง",
  law: "กลุ่มงานอำนวยความเป็นธรรม",
  policy: "ฝ่ายนโยบายและยุทธศาสตร์",
  inspection: "ฝ่ายกำกับและตรวจการทะเบียน",
  secretary: "ฝ่ายเลขานิการผู้บังคับบัญชา",
};

import pic from "../../../assets/executives/law/1.png";
import pic2 from "../../../assets/executives/law/2.png";
import pic3 from "../../../assets/executives/law/3.png";

const executivesData = {
  governor: {
    id: 1,
    name: "ว่าที่ร้อยตรีสมชาย",
    surname: "กะหลู่",
    position: "ปลัดจังหวัด",
    fullPosition: "ปลัดจังหวัดเชียงใหม่",
    level: "บริหาร",
    image: pic,
    phone: "053-112607",
    email: "governor@chiangmai.go.th",
    startDate: "1 ตุลาคม 2566",
    education: [
      "ปริญญาตรี รัฐศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
      "ปริญญาโท รัฐประศาสนศาสตร์ สถาบันบัณฑิตพัฒนบริหารศาสตร์",
    ],
    experience: [
      "รองปลัดจังหวัดเชียงราย (2563-2566)",
      "ผู้อำนวยการสำนักงานจังหวัดลำปาง (2560-2563)",
      "หัวหน้าฝ่ายปกครอง สำนักงานจังหวัดเชียงใหม่ (2557-2560)",
    ],
    responsibilities: [
      "บริหารงานทั่วไปของจังหวัด",
      "ควบคุมดูแลการปฏิบัติงานของหน่วยงานในสังกัด",
      "ประสานงานกับหน่วยงานภายนอก",
      "นำเสนอนโยบายและแผนงานจังหวัด",
    ],
  },
  deputies: [
    {
      id: 2,
      name: "นายสมชาย",
      surname: "กะหลู",
      position: "รองปลัดจังหวัด กลุ่มงานบริหารทั่วไป",
      fullPosition: "รองปลัดจังหวัดเชียงใหม่ กลุ่มงานบริหารทั่วไป",
      level: "รอง",
      image: pic2,
      phone: "053-112608",
      email: "deputy1@chiangmai.go.th",
      startDate: "15 พฤศจิกายน 2566",
      education: [
        "ปริญญาตรี บริหารธุรกิจ มหาวิทยาลัยเชียงใหม่",
        "ปริญญาโท รัฐประศาสนศาสตร์ มหาวิทยาลัยเชียงใหม่",
      ],
      experience: [
        "ผู้อำนวยการสำนักงานจังหวัดแม่ฮ่องสอน (2562-2566)",
        "รองผู้อำนวยการสำนักงานจังหวัดเชียงใหม่ (2559-2562)",
        "หัวหน้าฝ่ายธุรการ สำนักงานจังหวัดเชียงใหม่ (2556-2559)",
      ],
      responsibilities: [
        "บริหารงานบุคคล",
        "งานการเงินและบัญชี",
        "งานพัสดุและครุภัณฑ์",
        "งานธุรการทั่วไป",
      ],
    },
    {
      id: 3,
      name: "นายศดนัย",
      surname: "สมศักดิ์",
      position: "รองปลัดจังหวัด กลุ่มงานยุทธศาสตร์",
      fullPosition: "รองปลัดจังหวัดเชียงใหม่ กลุ่มงานยุทธศาสตร์และแผนงาน",
      level: "รอง",
      image: pic3,
      phone: "053-112609",
      email: "deputy2@chiangmai.go.th",
      startDate: "1 ธันวาคม 2566",
      education: [
        "ปริญญาตรี เศรษฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        "ปริญญาโท นโยบายสาธารณะ มหาวิทยาลัยธรรมศาสตร์",
      ],
      experience: [
        "ผู้อำนวยการสำนักงานจังหวัดลำพูน (2561-2566)",
        "รองผู้อำนวยการสำนักงานจังหวัดเชียงราย (2558-2561)",
        "หัวหน้าฝ่ายแผนงาน สำนักงานจังหวัดเชียงใหม่ (2555-2558)",
      ],
      responsibilities: [
        "วางแผนยุทธศาสตร์จังหวัด",
        "ติดตามและประเมินผลการดำเนินงาน",
        "ประสานแผนงานกับหน่วยงานต่างๆ",
        "จัดทำรายงานผลการดำเนินงาน",
      ],
    },
  ],
};
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const Default = () => {
  const { section } = useParams();

  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (executive) => {
    setSelectedExecutive(executive);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedExecutive(null);
  };
  const ExecutiveCard = ({ executive, isGovernor = false }) => (
    <Card
      className={`executive-card ${
        isGovernor ? "governor-card" : "deputy-card"
      }`}
      hoverable
      onClick={() => openModal(executive)}
      cover={
        <div className="executive-image-container">
          <img
            alt={`${executive.name} ${executive.surname}`}
            src={executive.image}
            className="executive-image"
          />
          {isGovernor && (
            <div className="governor-badge">
              <StarOutlined style={{ color: "#ffd700" }} />
            </div>
          )}
        </div>
      }
    >
      <div className="executive-info">
        <Title level={4} className="executive-name">
          {executive.name} {executive.surname}
        </Title>
        <Text strong className="executive-position">
          {executive.position}
        </Text>
        <Divider style={{ margin: "12px 0" }} />
        <Space
          direction="vertical"
          size="small"
          className="executive-contact-list"
        >
          <div className="executive-contact">
            <PhoneOutlined style={{ color: "#1890ff" }} />
            <Text className="contact-text">{executive.phone}</Text>
          </div>
          <div className="executive-contact">
            <MailOutlined style={{ color: "#1890ff" }} />
            <Text className="contact-text">{executive.email}</Text>
          </div>
          <div className="executive-contact">
            <CalendarOutlined style={{ color: "#52c41a" }} />
            <Text className="contact-text">
              เข้ารับตำแหน่ง {executive.startDate}
            </Text>
          </div>
        </Space>
      </div>
    </Card>
  );

  return (
    <>
      <div className="executives-header">
        <Breadcrumb style={{ marginBottom: "16px" }}>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/executives">ผู้บริหาร</Breadcrumb.Item>
          {section && (
            <Breadcrumb.Item>
              {sectionLabels[section] || "ไม่พบข้อมูล"}
            </Breadcrumb.Item>
          )}
        </Breadcrumb>

        <Title level={1} className="executives-main-title">
          {sectionLabels[section] || "กลุ่มงานผู้บริหาร"}
        </Title>
        <Title level={3} className="executives-sub-title">
          ที่ทำการปกครองจังหวัดเชียงใหม่
        </Title>
        <div className="executives-title-divider"></div>
      </div>
      {/* ปลัดจังหวัด */}
      <div className="governor-section">
        <Title level={2} className="section-title">
          <TrophyOutlined className="section-title-icon" />
          ปลัดจังหวัด
        </Title>
        <Row justify="center">
          <Col xs={24} sm={18} md={12} lg={8}>
            <ExecutiveCard
              executive={executivesData.governor}
              isGovernor={true}
            />
          </Col>
        </Row>
      </div>

      {/* รองปลัดจังหวัด */}
      <div className="deputies-section">
        <Title level={2} className="section-title">
          <TeamOutlined className="section-title-icon" />
          รองปลัดจังหวัด
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {executivesData.deputies.map((deputy) => (
            <Col key={deputy.id} xs={24} sm={12} lg={8}>
              <ExecutiveCard executive={deputy} />
            </Col>
          ))}
        </Row>
      </div>
      {/* Modal สำหรับแสดงรายละเอียด */}
      <Modal
        title={null}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
        className="executive-modal"
      >
        {selectedExecutive && (
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-image-container">
                <img
                  src={selectedExecutive.image}
                  alt={`${selectedExecutive.name} ${selectedExecutive.surname}`}
                  className="modal-image"
                />
              </div>
              <div className="modal-info">
                <Title level={2} className="modal-name">
                  {selectedExecutive.name} {selectedExecutive.surname}
                </Title>
                <Title level={4} className="modal-position">
                  {selectedExecutive.fullPosition}
                </Title>

                <Space
                  direction="vertical"
                  size="middle"
                  className="modal-contact-list"
                >
                  <div className="modal-contact-item">
                    <PhoneOutlined className="modal-contact-icon phone" />
                    <Text strong className="modal-contact-label">
                      โทรศัพท์:
                    </Text>
                    <Text className="modal-contact-text">
                      {selectedExecutive.phone}
                    </Text>
                  </div>
                  <div className="modal-contact-item">
                    <MailOutlined className="modal-contact-icon email" />
                    <Text strong className="modal-contact-label">
                      อีเมล:
                    </Text>
                    <Text className="modal-contact-text">
                      {selectedExecutive.email}
                    </Text>
                  </div>
                  <div className="modal-contact-item">
                    <CalendarOutlined className="modal-contact-icon calendar" />
                    <Text strong className="modal-contact-label">
                      เข้ารับตำแหน่ง:
                    </Text>
                    <Text className="modal-contact-text">
                      {selectedExecutive.startDate}
                    </Text>
                  </div>
                </Space>
              </div>
            </div>

            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <BookOutlined className="tab-icon" />
                    วุฒิการศึกษา
                  </span>
                }
                key="1"
              >
                <div className="tab-content">
                  <ul className="list-unstyled">
                    {selectedExecutive.education.map((edu, index) => (
                      <li key={index} className="list-item">
                        <div className="list-bullet education"></div>
                        <Text className="list-text">{edu}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <BankOutlined className="tab-icon" />
                    ประสบการณ์การทำงาน
                  </span>
                }
                key="2"
              >
                <div className="tab-content">
                  <ul className="list-unstyled">
                    {selectedExecutive.experience.map((exp, index) => (
                      <li key={index} className="list-item">
                        <div className="list-bullet experience"></div>
                        <Text className="list-text">{exp}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <FileTextOutlined className="tab-icon" />
                    หน้าที่ความรับผิดชอบ
                  </span>
                }
                key="3"
              >
                <div className="tab-content">
                  <ul className="list-unstyled">
                    {selectedExecutive.responsibilities.map((resp, index) => (
                      <li key={index} className="list-item">
                        <div className="list-bullet responsibility"></div>
                        <Text className="list-text">{resp}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPane>
            </Tabs>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Default;
