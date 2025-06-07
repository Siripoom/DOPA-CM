import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Typography,
  Input,
  Select,
  Space,
  Pagination,
  Empty,
  Spin,
} from "antd";
import {
  CalendarOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import "./Activities.css";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const Activities = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 9;

  // ข้อมูลจำลองสำหรับกิจกรรม
  const activitiesData = [
    {
      id: 1,
      title: "การประชุมคณะผู้บริหารจังหวัดเชียงใหม่ ประจำเดือนมิถุนายน 2568",
      date: "2025-06-15",
      time: "09:00",
      location: "ห้องประชุมใหญ่ ที่ทำการปกครองจังหวัดเชียงใหม่",
      status: "กำลังมา",
      participants: 45,
      organizer: "สำนักงานปกครองจังหวัดเชียงใหม่",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      tags: ["ประชุม", "ผู้บริหาร"],
      views: 234,
    },
    {
      id: 2,
      title: "โครงการอบรมพัฒนาศักยภาพเจ้าหน้าที่ปกครอง รุ่นที่ 2",
      date: "2025-06-10",
      time: "08:30",
      location: "โรงแรมเชียงใหม่ แกรนด์ วิว",
      status: "กำลังมา",
      participants: 120,
      organizer: "กลุ่มงานการเจ้าหน้าที่",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=250&fit=crop",
      tags: ["อบรม", "พัฒนา"],
      views: 456,
    },
    {
      id: 3,
      title: "การตรวจเยี่ยมหน่วยงานในสังกัด อำเภอแม่ริม",
      date: "2025-05-25",
      time: "10:00",
      location: "อำเภอแม่ริม",
      status: "เสร็จสิ้น",
      participants: 15,
      organizer: "ผู้ว่าราชการจังหวัดเชียงใหม่",
      image:
        "https://images.unsplash.com/photo-1450101215322-bf5cd27538ff?w=400&h=250&fit=crop",
      tags: ["ตรวจเยี่ยม", "อำเภอ"],
      views: 189,
    },
    {
      id: 4,
      title: "งานแสดงผลงานการพัฒนาท้องถิ่น ประจำปี 2568",
      date: "2025-05-20",
      time: "13:00",
      location: "ศูนย์ประชุมนานาชาติ เชียงใหม่",
      status: "เสร็จสิ้น",
      participants: 250,
      organizer: "กลุ่มงานยุทธศาสตร์",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      tags: ["แสดงผลงาน", "พัฒนา"],
      views: 678,
    },
    {
      id: 5,
      title: "การประชุมประชาคมท้องถิ่น เพื่อรับฟังความคิดเห็นโครงการพัฒนา",
      date: "2025-05-18",
      time: "14:00",
      location: "โรงเรียนบ้านแม่แตง",
      status: "เสร็จสิ้น",
      participants: 80,
      organizer: "อำเภอแม่แตง",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
      tags: ["ประชาคม", "รับฟังความคิดเห็น"],
      views: 345,
    },
    {
      id: 6,
      title: "โครงการฝึกอบรมการป้องกันและบรรเทาสาธารณภัย",
      date: "2025-05-15",
      time: "09:00",
      location: "ศูนย์ฝึกอบรมจังหวัดเชียงใหม่",
      status: "เสร็จสิ้น",
      participants: 150,
      organizer: "กลุ่มงานป้องกันและบรรเทาสาธารณภัย",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop",
      tags: ["อบรม", "ป้องกันภัย"],
      views: 567,
    },
    {
      id: 7,
      title: "การสัมมนาเชิงปฏิบัติการ การบริหารจัดการงบประมาณ",
      date: "2025-06-25",
      time: "08:00",
      location: "โรงแรมดุสิตดีทู เชียงใหม่",
      status: "กำลังมา",
      participants: 75,
      organizer: "กลุ่มงานการเงินและบัญชี",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      tags: ["สัมมนา", "งบประมาณ"],
      views: 123,
    },
    {
      id: 8,
      title: "โครงการส่งเสริมการท่องเที่ยวชุมชน จังหวัดเชียงใหม่",
      date: "2025-05-10",
      time: "10:30",
      location: "ศาลากลางจังหวัดเชียงใหม่",
      status: "เสร็จสิ้น",
      participants: 200,
      organizer: "กลุ่มงานส่งเสริมการท่องเที่ยว",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      tags: ["ท่องเที่ยว", "ส่งเสริม"],
      views: 789,
    },
    {
      id: 9,
      title: "การประชุมหัวหน้าส่วนราชการ ประจำเดือนพฤษภาคม 2568",
      date: "2025-05-05",
      time: "09:30",
      location: "ห้องประชุมศรี เชียงใหม่",
      status: "เสร็จสิ้น",
      participants: 35,
      organizer: "ผู้ว่าราชการจังหวัดเชียงใหม่",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=250&fit=crop",
      tags: ["ประชุม", "หัวหน้าส่วน"],
      views: 234,
    },
  ];

  // กรองข้อมูลตามเงื่อนไข
  const filteredActivities = activitiesData.filter((activity) => {
    const matchesSearch = activity.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || activity.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // เรียงลำดับข้อมูล
  const sortedActivities = [...filteredActivities].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "participants":
        return b.participants - a.participants;
      case "views":
        return b.views - a.views;
      default:
        return 0;
    }
  });

  // แบ่งหน้าข้อมูล
  const startIndex = (currentPage - 1) * pageSize;
  const currentActivities = sortedActivities.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  return (
    <div className="activities-container">
      {/* Header Section */}
      <div className="activities-header">
        <div className="activities-header-content">
          <div className="activities-title-section">
            <CalendarOutlined className="activities-main-icon" />
            <div>
              <Title level={2} className="activities-main-title">
                กิจกรรมที่ทำการปกครองจังหวัดเชียงใหม่
              </Title>
              <Text className="activities-subtitle">
                ติดตามกิจกรรมและงานต่างๆ ของจังหวัดเชียงใหม่
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <Card className="activities-filter-card">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="ค้นหากิจกรรม..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              className="activities-search"
            />
          </Col>
          <Col xs={12} sm={6} md={4}></Col>
          <Col xs={12} sm={6} md={4}></Col>
          <Col xs={24} md={8}>
            <div className="activities-stats">
              <Space size={16}>
                <Text strong>
                  ทั้งหมด:{" "}
                  <span className="stat-number">
                    {filteredActivities.length}
                  </span>{" "}
                  กิจกรรม
                </Text>
                <Text type="secondary">
                  หน้า {currentPage} จาก{" "}
                  {Math.ceil(filteredActivities.length / pageSize)}
                </Text>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Activities Grid Section */}
      <div className="activities-content">
        {loading ? (
          <div className="activities-loading">
            <Spin size="large" />
            <Text>กำลังโหลดข้อมูล...</Text>
          </div>
        ) : currentActivities.length > 0 ? (
          <>
            <Row gutter={[24, 24]}>
              {currentActivities.map((activity) => (
                <Col xs={24} sm={12} lg={8} key={activity.id}>
                  <ActivityCard activity={activity} />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="activities-pagination">
              <Pagination
                current={currentPage}
                total={filteredActivities.length}
                pageSize={pageSize}
                onChange={setCurrentPage}
                showSizeChanger={false}
                showQuickJumper
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} จาก ${total} รายการ`
                }
              />
            </div>
          </>
        ) : (
          <Empty
            description="ไม่พบกิจกรรมที่ตรงกับเงื่อนไขการค้นหา"
            className="activities-empty"
          />
        )}
      </div>
    </div>
  );
};

export default Activities;
