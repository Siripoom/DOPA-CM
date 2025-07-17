import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Badge,
  Typography,
  Tag,
  Space,
  Carousel,
  Avatar,
} from "antd";
import {
  NotificationOutlined,
  FileTextOutlined,
  CalendarOutlined,
  BulbOutlined,
  UserOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  RightOutlined,
  SafetyOutlined,
  BankOutlined,
  TeamOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  BookOutlined,
  HeartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import "./Home.css"; // Import CSS file
import lead from "../../assets/executives/1.jpg";
import landmark1 from "../../assets/landmark/1.png";
import landmark2 from "../../assets/landmark/2.png";
import landmark3 from "../../assets/landmark/3.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const { Text, Paragraph } = Typography;

const Home = () => {
  // ข้อมูลจำลองสำหรับข่าวประชาสัมพันธ์
  const landMarksData = [
    {
      id: 1,
      title:
        "ประกาศผู้ผ่านการสอบข้าราชการปกครองประเภทพิเศษ ตำแหน่งปกครองอำเภอ สำนักงานปกครองจังหวัดเชียงใหม่ เรียงใหม่ที่ 1",
      date: "2025-05-20",
      time: "09:48:07",
      author: "กลุ่มงานการเจ้าหน้าที่",
      category: "ข่าวประชาสัมพันธ์",
      isNew: true,
      image: landmark1,
      views: 1250,
      likes: 45,
    },
    {
      id: 2,
      title:
        "เชิญชวนเข้าร่วมงานประชุมคณะกรรมการจัดทำแผนพัฒนาท้องถิ่น (แผนพัฒนาท้องถิ่น 4 ปี)",
      date: "2025-05-18",
      time: "14:30:15",
      author: "กลุ่มงานยุทธศาสตร์",
      category: "ข่าวประชาสัมพันธ์",
      isNew: true,
      image: landmark2,
      views: 890,
      likes: 32,
    },
    {
      id: 3,
      title:
        "แจ้งการปิดถนนชั่วคราวเพื่อซ่อมแซมสะพาน บริเวณกิโลเมตรที่ 15 ถนนเชียงใหม่-ฝาง",
      date: "2025-05-15",
      time: "11:22:33",
      author: "กลุ่มงานโครงสร้างพื้นฐาน",
      category: "ข่าวประชาสัมพันธ์",
      isNew: false,
      image: landmark3,
      views: 567,
      likes: 18,
    },
  ];
  const newsData = [
    // {
    //   // id: 1,
    //   // title:
    //   //   "ประกาศผู้ผ่านการสอบข้าราชการปกครองประเภทพิเศษ ตำแหน่งปกครองอำเภอ สำนักงานปกครองจังหวัดเชียงใหม่ เรียงใหม่ที่ 1",
    //   // date: "2025-05-20",
    //   // time: "09:48:07",
    //   // author: "กลุ่มงานการเจ้าหน้าที่",
    //   // category: "ข่าวประชาสัมพันธ์",
    //   // isNew: true,
    //   // // image:
    //   // //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=face",
    //   // views: 1250,
    //   // likes: 45,
    // },
    // {
    //   id: 2,
    //   title:
    //     "เชิญชวนเข้าร่วมงานประชุมคณะกรรมการจัดทำแผนพัฒนาท้องถิ่น (แผนพัฒนาท้องถิ่น 4 ปี)",
    //   date: "2025-05-18",
    //   time: "14:30:15",
    //   author: "กลุ่มงานยุทธศาสตร์",
    //   category: "ข่าวประชาสัมพันธ์",
    //   isNew: true,
    //   image:
    //     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
    //   views: 890,
    //   likes: 32,
    // },
    // {
    //   id: 3,
    //   title:
    //     "แจ้งการปิดถนนชั่วคราวเพื่อซ่อมแซมสะพาน บริเวณกิโลเมตรที่ 15 ถนนเชียงใหม่-ฝาง",
    //   date: "2025-05-15",
    //   time: "11:22:33",
    //   author: "กลุ่มงานโครงสร้างพื้นฐาน",
    //   category: "ข่าวประชาสัมพันธ์",
    //   isNew: false,
    //   image:
    //     "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop",
    //   views: 567,
    //   likes: 18,
    // },
    // {
    //   id: 4,
    //   title:
    //     "แจ้งการปิดถนนชั่วคราวเพื่อซ่อมแซมสะพาน บริเวณกิโลเมตรที่ 15 ถนนเชียงใหม่-ฝาง",
    //   date: "2025-05-15",
    //   time: "11:22:33",
    //   author: "กลุ่มงานโครงสร้างพื้นฐาน",
    //   category: "ข่าวประชาสัมพันธ์",
    //   isNew: false,
    //   image:
    //     "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop",
    //   views: 567,
    //   likes: 18,
    // },
    // {
    //   id: 5,
    //   title:
    //     "แจ้งการปิดถนนชั่วคราวเพื่อซ่อมแซมสะพาน บริเวณกิโลเมตรที่ 15 ถนนเชียงใหม่-ฝาง",
    //   date: "2025-05-15",
    //   time: "11:22:33",
    //   author: "กลุ่มงานโครงสร้างพื้นฐาน",
    //   category: "ข่าวประชาสัมพันธ์",
    //   isNew: false,
    //   image:
    //     "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop",
    //   views: 567,
    //   likes: 18,
    // },
  ];

  // ข้อมูลจำลองสำหรับหนังสือราชการ
  const documentsData = {
    finance: [
      // {
      //   id: 1,
      //   title:
      //     "เอกสารการจัดซื้อจัดจ้างโครงการพัฒนาสวนสาธารณะ ประจำปีงบประมาณ 2568",
      //   date: "2025-04-23",
      //   time: "16:08:22",
      //   author: "กลุ่มงานการเงินและบัญชี",
      //   docNumber: "ชม 0523.04/ว234",
      //   fileType: "PDF",
      //   fileSize: "2.5 MB",
      //   priority: "high",
      // },
      // {
      //   id: 2,
      //   title:
      //     "รายงานการเบิกจ่ายงบประมาณรายจ่ายประจำ ไตรมาสที่ 1 ปีงบประมาณ 2568",
      //   date: "2025-04-20",
      //   time: "09:15:45",
      //   author: "กลุ่มงานการเงินและบัญชี",
      //   docNumber: "ชม 0523.04/ว198",
      //   fileType: "XLSX",
      //   fileSize: "1.8 MB",
      //   priority: "medium",
      // },
    ],
    administration: [
      // {
      //   id: 1,
      //   title:
      //     "ประกาศรายชื่อผู้ได้รับการคัดเลือกเข้าอบรมหลักสูตรการพัฒนาข้าราชการ",
      //   date: "2025-04-03",
      //   time: "09:59:40",
      //   author: "อำเภอฝาง",
      //   docNumber: "ฝง 0408.2/ว156",
      //   fileType: "PDF",
      //   fileSize: "890 KB",
      //   priority: "medium",
      // },
      // {
      //   id: 2,
      //   title: "หนังสือรายงานผลการดำเนินงานโครงการส่งเสริมอาชีพชุมชน",
      //   date: "2025-04-01",
      //   time: "14:22:18",
      //   author: "อำเภอแม่ริม",
      //   docNumber: "มร 0408.2/ว089",
      //   fileType: "DOCX",
      //   fileSize: "1.2 MB",
      //   priority: "low",
      // },
    ],
    security: [
      // {
      //   id: 1,
      //   title: "แผนการรักษาความปลอดภัยงานเทศกาลสงกรานต์ 2568",
      //   date: "2025-04-03",
      //   time: "09:58:23",
      //   author: "อำเภอฝาง",
      //   docNumber: "ฝง 0408.3/ว134",
      //   fileType: "PDF",
      //   fileSize: "3.2 MB",
      //   priority: "high",
      // },
      // {
      //   id: 2,
      //   title: "รายงานสถานการณ์ความปลอดภัยในเขตพื้นที่ จังหวัดเชียงใหม่",
      //   date: "2025-03-28",
      //   time: "16:45:12",
      //   author: "กลุ่มงานความมั่นคง",
      //   docNumber: "ชม 0408.3/ว067",
      //   fileType: "PDF",
      //   fileSize: "2.1 MB",
      //   priority: "medium",
      // },
    ],
  };

  // ข้อมูลจำลองสำหรับกิจกรรม
  const activitiesData = [
    // {
    //   id: 1,
    //   title: "การประชุมคณะผู้บริหารจังหวัดเชียงใหม่ ประจำเดือนพฤษภาคม 2568",
    //   date: "2025-05-25",
    //   time: "09:00",
    //   location: "ห้องประชุมใหญ่ ที่ทำการปกครองจังหวัดเชียงใหม่",
    //   status: "กำลังดำเนินการ",
    //   participants: 45,
    //   image:
    //     "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
    //   tags: ["ประชุม", "ผู้บริหาร"],
    // },
    // {
    //   id: 2,
    //   title: "โครงการอบรมพัฒนาศักยภาพเจ้าหน้าที่ปกครอง",
    //   date: "2025-05-20",
    //   time: "08:30",
    //   location: "โรงแรมเชียงใหม่ แกรนด์ วิว",
    //   status: "เสร็จสิ้น",
    //   participants: 120,
    //   image:
    //     "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=250&fit=crop",
    //   tags: ["อบรม", "พัฒนา"],
    // },
    // {
    //   id: 3,
    //   title: "การตรวจเยี่ยมหน่วยงานในสังกัด อำเภอแม่ริม",
    //   date: "2025-05-15",
    //   time: "10:00",
    //   location: "อำเภอแม่ริม",
    //   status: "เสร็จสิ้น",
    //   participants: 15,
    //   image:
    //     "https://images.unsplash.com/photo-1450101215322-bf5cd27538ff?w=400&h=250&fit=crop",
    //   tags: ["ตรวจเยี่ยม", "อำเภอ"],
    // },
  ];

  // ข้อมูลจำลองสำหรับเรื่องน่ารู้
  const knowledgeData = [
    // {
    //   id: 1,
    //   title: "ขั้นตอนการขอใบอนุญาตก่อสร้างอาคาร",
    //   description:
    //     "แนวทางและขั้นตอนการยื่นขอใบอนุญาตก่อสร้างอาคารที่ถูกต้องตามกฎหมาย พร้อมแบบฟอร์มและเอกสารที่ต้องใช้",
    //   category: "การบริการ",
    //   readTime: "5 นาที",
    //   views: 1250,
    //   image:
    //     "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=200&fit=crop",
    //   rating: 4.8,
    //   comments: 23,
    // },
    // {
    //   id: 2,
    //   title: "สิทธิและหน้าที่ของประชาชนในการมีส่วนร่วมกับท้องถิ่น",
    //   description:
    //     "ความรู้เกี่ยวกับสิทธิการมีส่วนร่วมในการพัฒนาท้องถิ่นของประชาชน รวมถึงกระบวนการการมีส่วนร่วม",
    //   category: "สิทธิประชาชน",
    //   readTime: "8 นาที",
    //   views: 980,
    //   image:
    //     "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop",
    //   rating: 4.6,
    //   comments: 18,
    // },
    // {
    //   id: 3,
    //   title: "การดำเนินการเมื่อเกิดภัยพิบัติธรรมชาติ",
    //   description:
    //     "แผนการรับมือและแนวทางการป้องกันความเสียหายจากภัยพิบัติ พร้อมคู่มือการปฏิบัติเบื้องต้น",
    //   category: "ความปลอดภัย",
    //   readTime: "6 นาที",
    //   views: 756,
    //   image:
    //     "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=200&fit=crop",
    //   rating: 4.9,
    //   comments: 31,
    // },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "กำลังดำเนินการ":
        return "processing";
      case "เสร็จสิ้น":
        return "success";
      default:
        return "default";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "การบริการ":
        return "blue";
      case "สิทธิประชาชน":
        return "green";
      case "ความปลอดภัย":
        return "red";
      default:
        return "default";
    }
  };

  const getFileTypeColor = (type) => {
    switch (type) {
      case "PDF":
        return "red";
      case "XLSX":
        return "green";
      case "DOCX":
        return "blue";
      default:
        return "default";
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}

      <div className="home-content">
        {/* ข่าวประชาสัมพันธ์ */}
        <Card
          className="section-card"
          title={
            <div className="card-title">
              <div className="card-icon card-icon-news">
                <NotificationOutlined
                  style={{ color: "#ffffff", fontSize: "18px" }}
                />
              </div>
              <span className="card-title-text">ข่าวประชาสัมพันธ์</span>
            </div>
          }
          extra={
            <Link
              to="/announcements"
              type="text"
              className="card-extra-button card-extra-news"
            >
              ดูทั้งหมด <RightOutlined />
            </Link>
          }
        >
          <Row gutter={[24, 24]}>
            {/* First column - Mockup Image */}
            <Col xs={24} md={8}>
              <div className="news-mockup-wrapper">
                <img
                  src={lead}
                  alt="Mockup"
                  className="news-mockup-image"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
                <div className="flex flex-col justify-center my-4 items-center">
                  <p className="text-xl font-bold">นายชัยณรงค์ นันตาสาย</p>
                  <p className="text-lg">ปลัดจังหวัดเชียงใหม่</p>
                </div>
              </div>
            </Col>

            {/* Second column - Ant Carousel with mapped news data */}
            <Col xs={24} md={16}>
              <Carousel
                arrows
                infinite
                autoplay
                prevArrow={<div className="custom-arrow custom-prev">‹</div>}
                nextArrow={<div className="custom-arrow custom-next">›</div>}
                autoplaySpeed={3000}
              >
                {landMarksData.map((news) => (
                  <Card
                    key={news.id}
                    hoverable
                    className="news-card"
                    cover={
                      <div
                        className="news-cover"
                        style={{
                          backgroundImage: `url(${news.image})`,
                          height: 400,
                          // backgroundSize: "cover",
                          // backgroundPosition: "center",
                          borderRadius: "8px",
                        }}
                      >
                        {news.isNew && (
                          <Badge count="ใหม่" className="news-badge" />
                        )}
                      </div>
                    }
                    bodyStyle={{ padding: "20px" }}
                  >
                    <div className="news-title">
                      <Text strong>{news.title}</Text>
                    </div>

                    <div className="news-meta">
                      <Space split={<div className="news-meta-separator" />}>
                        <div className="news-meta-item">
                          <ClockCircleOutlined
                            style={{ fontSize: "12px", color: "#8c8c8c" }}
                          />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {news.date}
                          </Text>
                        </div>
                        <div className="news-meta-item">
                          <UserOutlined
                            style={{ fontSize: "12px", color: "#8c8c8c" }}
                          />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {news.author}
                          </Text>
                        </div>
                      </Space>
                    </div>

                    <div className="news-stats">
                      <Space>
                        <div className="news-stat-item">
                          <EyeOutlined
                            style={{ fontSize: "14px", color: "#8c8c8c" }}
                          />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {news.views.toLocaleString()}
                          </Text>
                        </div>
                        <div className="news-stat-item">
                          <HeartOutlined
                            style={{ fontSize: "14px", color: "#ff4d4f" }}
                          />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {news.likes}
                          </Text>
                        </div>
                      </Space>
                      <Button
                        type="link"
                        size="small"
                        className="news-read-more"
                      >
                        อ่านเพิ่มเติม
                      </Button>
                    </div>
                  </Card>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Card>

        <Card
          className="section-card"
          title={
            <div className="card-title">
              <div className="card-icon card-icon-news">
                <NotificationOutlined
                  style={{ color: "#ffffff", fontSize: "18px" }}
                />
              </div>
              <span className="card-title-text">ข่าวประชาสัมพันธ์</span>
            </div>
          }
          extra={
            <Link
              to="/announcements"
              type="text"
              className="card-extra-button card-extra-news"
            >
              ดูทั้งหมด <RightOutlined />
            </Link>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Large card */}
            <div>
              {newsData?.length > 0 && newsData[0] && (
                <Card
                  hoverable
                  className="h-full"
                  cover={
                    <div
                      className="h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url(${newsData[0].image})` }}
                    >
                      {newsData[0].isNew && (
                        <Badge count="ใหม่" className="news-badge" />
                      )}
                    </div>
                  }
                  bodyStyle={{ padding: "20px" }}
                >
                  <Text strong className="block mb-2">
                    {newsData[0].title}
                  </Text>
                  <div className="text-xs text-gray-500">
                    {newsData[0].date} | {newsData[0].author}
                  </div>
                </Card>
              )}
            </div>

            {/* Right: Grid of 4 small cards */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {newsData.slice(1, 5).map((news) => (
                <Card
                  key={news.id}
                  hoverable
                  className="h-full"
                  cover={
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url(${news.image})` }}
                    >
                      {news.isNew && (
                        <Badge count="ใหม่" className="news-badge" />
                      )}
                    </div>
                  }
                  bodyStyle={{ padding: "10px" }}
                >
                  <Text strong className="block mb-1">
                    {news.title}
                  </Text>
                  <div className="text-xs text-gray-500">
                    {news.date} | {news.author}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* หนังสือราชการ */}
        <Row gutter={[24, 24]} style={{ marginBottom: "40px" }}>
          {/* การเงินและบัญชี */}
          <Col xs={24} lg={6}>
            <Card
              className="document-card"
              title={
                <div className="document-title">
                  <div className="card-icon card-icon-finance">
                    <BankOutlined
                      style={{ color: "#ffffff", fontSize: "16px" }}
                    />
                  </div>
                  <div className="p-3">
                    <div className="document-title-text">หนังสือราชการ</div>
                    <Tag color="green" className="document-tag">
                      กลุ่มงานปกครอง
                    </Tag>
                  </div>
                </div>
              }
            >
              {documentsData.finance.map((doc) => (
                <div
                  key={doc.id}
                  className={`document-item document-item-${doc.priority}`}
                >
                  <div className="document-header">
                    <Text strong className="document-title-item">
                      {doc.title}
                    </Text>
                    <Tag
                      color={getFileTypeColor(doc.fileType)}
                      style={{ fontSize: "10px" }}
                    >
                      {doc.fileType}
                    </Tag>
                  </div>

                  <Space
                    direction="vertical"
                    size={2}
                    className="document-meta"
                  >
                    <Text type="secondary" className="document-meta-text">
                      📅 {doc.date} {doc.time}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      👤 {doc.author}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      📄 {doc.docNumber}
                    </Text>
                    <div className="document-footer">
                      <Text type="secondary" className="document-size">
                        📁 {doc.fileSize}
                      </Text>
                      <Space size={8}>
                        <Button
                          type="text"
                          size="small"
                          icon={<DownloadOutlined />}
                        />
                        <Button
                          type="text"
                          size="small"
                          icon={<ShareAltOutlined />}
                        />
                      </Space>
                    </div>
                  </Space>
                </div>
              ))}
              <Button
                type="link"
                className="document-read-more document-read-more-finance"
              >
                ดูเพิ่มเติม <RightOutlined />
              </Button>
            </Card>
          </Col>

          {/* การปกครอง */}
          <Col xs={24} lg={6}>
            <Card
              className="document-card"
              title={
                <div className="document-title">
                  <div className="card-icon card-icon-admin">
                    <TeamOutlined
                      style={{ color: "#ffffff", fontSize: "16px" }}
                    />
                  </div>
                  <div className="p-3">
                    <div className="document-title-text">หนังสือราชการ</div>
                    <Tag color="blue" className="document-tag">
                      กลุ่มงานความมั่นคง
                    </Tag>
                  </div>
                </div>
              }
            >
              {documentsData.administration.map((doc) => (
                <div
                  key={doc.id}
                  className={`document-item document-item-${doc.priority}`}
                >
                  <div className="document-header">
                    <Text strong className="document-title-item">
                      {doc.title}
                    </Text>
                    <Tag
                      color={getFileTypeColor(doc.fileType)}
                      style={{ fontSize: "10px" }}
                    >
                      {doc.fileType}
                    </Tag>
                  </div>

                  <Space
                    direction="vertical"
                    size={2}
                    className="document-meta"
                  >
                    <Text type="secondary" className="document-meta-text">
                      📅 {doc.date} {doc.time}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      👤 {doc.author}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      📄 {doc.docNumber}
                    </Text>
                    <div className="document-footer">
                      <Text type="secondary" className="document-size">
                        📁 {doc.fileSize}
                      </Text>
                      <Space size={8}>
                        <Button
                          type="text"
                          size="small"
                          icon={<DownloadOutlined />}
                        />
                        <Button
                          type="text"
                          size="small"
                          icon={<ShareAltOutlined />}
                        />
                      </Space>
                    </div>
                  </Space>
                </div>
              ))}
              <Button
                type="link"
                className="document-read-more document-read-more-admin"
              >
                ดูเพิ่มเติม <RightOutlined />
              </Button>
            </Card>
          </Col>

          {/* ความมั่นคง */}
          <Col xs={24} lg={6}>
            <Card
              className="document-card"
              title={
                <div className="document-title">
                  <div className="card-icon card-icon-security">
                    <SafetyOutlined
                      style={{ color: "#ffffff", fontSize: "16px" }}
                    />
                  </div>
                  <div className="p-3">
                    <div className="document-title-text">หนังสือราชการ</div>
                    <Tag color="red" className="document-tag">
                      กลุ่มงานการเงินและบัญชี
                    </Tag>
                  </div>
                </div>
              }
            >
              {documentsData.security.map((doc) => (
                <div
                  key={doc.id}
                  className={`document-item document-item-${doc.priority}`}
                >
                  <div className="document-header">
                    <Text strong className="document-title-item">
                      {doc.title}
                    </Text>
                    <Tag
                      color={getFileTypeColor(doc.fileType)}
                      style={{ fontSize: "10px" }}
                    >
                      {doc.fileType}
                    </Tag>
                  </div>

                  <Space
                    direction="vertical"
                    size={2}
                    className="document-meta"
                  >
                    <Text type="secondary" className="document-meta-text">
                      📅 {doc.date} {doc.time}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      👤 {doc.author}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      📄 {doc.docNumber}
                    </Text>
                    <div className="document-footer">
                      <Text type="secondary" className="document-size">
                        📁 {doc.fileSize}
                      </Text>
                      <Space size={8}>
                        <Button
                          type="text"
                          size="small"
                          icon={<DownloadOutlined />}
                        />
                        <Button
                          type="text"
                          size="small"
                          icon={<ShareAltOutlined />}
                        />
                      </Space>
                    </div>
                  </Space>
                </div>
              ))}
              <Button
                type="link"
                className="document-read-more document-read-more-security"
              >
                ดูเพิ่มเติม <RightOutlined />
              </Button>
            </Card>
          </Col>
          {/* ความเป็นธรรม */}
          <Col xs={24} lg={6}>
            <Card
              className="document-card"
              title={
                <div className="document-title">
                  <div className="card-icon card-icon-knowledge">
                    <BookOutlined
                      style={{ color: "#ffffff", fontSize: "16px" }}
                    />
                  </div>
                  <div className="p-3">
                    <div className="document-title-text">หนังสือราชการ</div>
                    <Tag color="yellow" className="document-tag">
                      กลุ่มงานอำนวยความเป็นธรรม
                    </Tag>
                  </div>
                </div>
              }
            >
              {documentsData.security.map((doc) => (
                <div
                  key={doc.id}
                  className={`document-item document-item-${doc.priority}`}
                >
                  <div className="document-header">
                    <Text strong className="document-title-item">
                      {doc.title}
                    </Text>
                    <Tag
                      color={getFileTypeColor(doc.fileType)}
                      style={{ fontSize: "10px" }}
                    >
                      {doc.fileType}
                    </Tag>
                  </div>

                  <Space
                    direction="vertical"
                    size={2}
                    className="document-meta"
                  >
                    <Text type="secondary" className="document-meta-text">
                      📅 {doc.date} {doc.time}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      👤 {doc.author}
                    </Text>
                    <Text type="secondary" className="document-meta-text">
                      📄 {doc.docNumber}
                    </Text>
                    <div className="document-footer">
                      <Text type="secondary" className="document-size">
                        📁 {doc.fileSize}
                      </Text>
                      <Space size={8}>
                        <Button
                          type="text"
                          size="small"
                          icon={<DownloadOutlined />}
                        />
                        <Button
                          type="text"
                          size="small"
                          icon={<ShareAltOutlined />}
                        />
                      </Space>
                    </div>
                  </Space>
                </div>
              ))}
              <Button
                type="link"
                className="document-read-more document-read-more-security"
              >
                ดูเพิ่มเติม <RightOutlined />
              </Button>
            </Card>
          </Col>
        </Row>

        {/* กิจกรรมที่ทำการปกครอง */}
        <Card
          className="section-card"
          title={
            <div className="card-title">
              <div className="card-icon card-icon-activity">
                <CalendarOutlined
                  style={{ color: "#ffffff", fontSize: "18px" }}
                />
              </div>
              <span className="card-title-text">
                กิจกรรมที่ทำการปกครอง จังหวัดเชียงใหม่
              </span>
            </div>
          }
          extra={
            <Link
              to="/activities"
              type="text"
              className="card-extra-button card-extra-news"
            >
              ดูทั้งหมด <RightOutlined />
            </Link>
          }
        >
          <Row gutter={[24, 24]}>
            {activitiesData.map((activity) => (
              <Col xs={24} md={12} lg={8} key={activity.id}>
                <Card
                  hoverable
                  className="activity-card"
                  cover={
                    <div
                      className="activity-cover"
                      style={{
                        backgroundImage: `url(${activity.image})`,
                      }}
                    ></div>
                  }
                  bodyStyle={{ padding: "20px" }}
                >
                  <div className="activity-title">
                    <Text strong>{activity.title}</Text>
                  </div>

                  <Space
                    direction="vertical"
                    size={8}
                    className="activity-meta"
                  >
                    <div className="activity-meta-item">
                      <CalendarOutlined
                        style={{ fontSize: "14px", color: "#722ed1" }}
                      />
                      <Text className="activity-meta-text">
                        {activity.date} เวลา {activity.time}
                      </Text>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* เรื่องน่ารู้กับปกครองจังหวัด */}
        <Card
          className="section-card"
          title={
            <div className="card-title">
              <div className="card-icon card-icon-knowledge">
                <BulbOutlined style={{ color: "#ffffff", fontSize: "18px" }} />
              </div>
              <span className="card-title-text">
                เรื่องน่ารู้กับปกครองจังหวัด
              </span>
            </div>
          }
          extra={
            <Link
              to="/knowledge"
              type="text"
              className="card-extra-button card-extra-news"
            >
              ดูทั้งหมด <RightOutlined />
            </Link>
          }
        >
          <Row gutter={[24, 24]}>
            {knowledgeData.map((knowledge) => (
              <Col xs={24} md={12} lg={8} key={knowledge.id}>
                <Card
                  hoverable
                  className="knowledge-card"
                  cover={
                    <div
                      className="knowledge-cover"
                      style={{
                        backgroundImage: `url(${knowledge.image})`,
                      }}
                    >
                      <div className="knowledge-category">
                        <Tag
                          color={getCategoryColor(knowledge.category)}
                          className="knowledge-category-tag"
                        >
                          {knowledge.category}
                        </Tag>
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: "20px" }}
                >
                  <div className="knowledge-title">
                    <Text strong>{knowledge.title}</Text>
                  </div>

                  <Paragraph type="secondary" className="knowledge-description">
                    {knowledge.description}
                  </Paragraph>

                  <div className="knowledge-footer">
                    <div className="knowledge-stats">
                      <div className="knowledge-stat-item">
                        <ClockCircleOutlined
                          style={{ fontSize: "12px", color: "#8c8c8c" }}
                        />
                        <Text type="secondary" className="knowledge-stat-text">
                          {knowledge.readTime}
                        </Text>
                      </div>
                      <div className="knowledge-stat-item">
                        <EyeOutlined
                          style={{ fontSize: "12px", color: "#8c8c8c" }}
                        />
                        <Text type="secondary" className="knowledge-stat-text">
                          {knowledge.views.toLocaleString()}
                        </Text>
                      </div>
                    </div>
                    <Button
                      type="link"
                      size="small"
                      className="knowledge-read-more"
                    >
                      อ่านเพิ่มเติม
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
