import React, { useState } from "react";
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
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  BookOutlined,
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
const executivesData = {
  governor: {
    id: 1,
    name: "นายชิษณุภณ์",
    surname: "นำลาลาย",
    position: "ปลัดจังหวัด",
    fullPosition: "ปลัดจังหวัดเชียงใหม่",
    level: "บริหาร",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
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
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face",
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
    {
      id: 4,
      name: "นางดิศย์สินี",
      surname: "เอี่ยมโอษฐ์",
      position: "รองปลัดจังหวัด กลุ่มงานสังคมและความมั่นคง",
      fullPosition: "รองปลัดจังหวัดเชียงใหม่ กลุ่มงานสังคมและความมั่นคง",
      level: "รอง",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c2a45075?w=300&h=400&fit=crop&crop=face",
      phone: "053-112610",
      email: "deputy3@chiangmai.go.th",
      startDate: "10 มกราคม 2567",
      education: [
        "ปริญญาตรี สังคมศาสตร์ มหาวิทยาลัยเชียงใหม่",
        "ปริญญาโท การจัดการภาครัฐ สถาบันบัณฑิตพัฒนบริหารศาสตร์",
      ],
      experience: [
        "ผู้อำนวยการสำนักงานจังหวัดน่าน (2563-2567)",
        "รองผู้อำนวยการสำนักงานจังหวัดพะเยา (2560-2563)",
        "หัวหน้าฝ่ายสังคม สำนักงานจังหวัดเชียงใหม่ (2557-2560)",
      ],
      responsibilities: [
        "งานรักษาความปลอดภัย",
        "งานป้องกันและบรรเทาสาธารณภัย",
        "งานส่งเสริมสวัสดิการสังคม",
        "งานประสานหน่วยงานความมั่นคง",
      ],
    },
  ],
};
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const Default = () => {
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
        <Title level={1} className="executives-main-title">
          ฝ่ายเลขานิการผู้บังคับบัญชา
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
