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
  Tabs,
} from "antd";
import {
  SoundOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  BellOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  FireOutlined,
  NotificationOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import AnnouncementDetail from "../../components/AnnouncementDetail/AnnouncementDetail";
import "./Announcements.css";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const Announcements = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const pageSize = 12;

  // ข้อมูลจำลองสำหรับประชาสัมพันธ์
  const announcementsData = [
    {
      id: 1,
      title:
        "ประกาศผู้ผ่านการสอบข้าราชการปกครองประเภทพิเศษ ตำแหน่งปกครองอำเภอ สำนักงานปกครองจังหวัดเชียงใหม่",
      description:
        "รายชื่อผู้ที่ผ่านการสอบคัดเลือกเข้าดำรงตำแหน่งปกครองอำเภอ ประจำปี 2568 พร้อมรายละเอียดการมีรายงานตัวและขั้นตอนการดำเนินการต่อไป",
      date: "2025-06-08",
      time: "09:48",
      author: "กลุ่มงานการเจ้าหน้าที่",
      category: "ประกาศ",
      priority: "high",
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=face",
      views: 2450,
      likes: 89,
      comments: 23,
      tags: ["สอบข้าราชการ", "ปกครองอำเภอ", "ประกาศผล"],
    },
    {
      id: 2,
      title:
        "เชิญชวนเข้าร่วมงานประชุมคณะกรรมการจัดทำแผนพัฒนาท้องถิ่น (แผนพัฒนาท้องถิ่น 4 ปี) ประจำปี 2568-2571",
      description:
        "ขอเชิญประชาชน องค์กรต่างๆ และผู้มีส่วนได้ส่วนเสียเข้าร่วมการประชุมเพื่อให้ความคิดเห็นและข้อเสนอแนะในการจัดทำแผนพัฒนาท้องถิ่น",
      date: "2025-06-07",
      time: "14:30",
      author: "กลุ่มงานยุทธศาสตร์",
      category: "เชิญชวน",
      priority: "normal",
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      views: 1890,
      likes: 56,
      comments: 18,
      tags: ["แผนพัฒนา", "ท้องถิ่น", "ประชุม", "ประชาชน"],
    },
    {
      id: 3,
      title:
        "แจ้งการปิดถนนชั่วคราวเพื่อซ่อมแซมสะพาน บริเวณกิโลเมตรที่ 15 ถนนเชียงใหม่-ฝาง",
      description:
        "เนื่องจากสะพานข้ามลำธารบริเวณกิโลเมตรที่ 15 มีความเสียหาย จำเป็นต้องปิดการจราจรเพื่อซ่อมแซม ตั้งแต่วันที่ 10-20 มิถุนายน 2568",
      date: "2025-06-06",
      time: "11:22",
      author: "กลุ่มงานโครงสร้างพื้นฐาน",
      category: "แจ้งปิดถนน",
      priority: "urgent",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop",
      views: 3567,
      likes: 134,
      comments: 67,
      tags: ["ปิดถนน", "ซ่อมแซม", "สะพาน", "จราจร"],
    },
    {
      id: 4,
      title: "ประกาศการจัดงานเทศกาลดอกไม้เมืองเชียงใหม่ ประจำปี 2568",
      description:
        "การจัดงานเทศกาลดอกไม้เมืองเชียงใหม่ ประจำปี 2568 ระหว่างวันที่ 1-7 กุมภาพันธ์ 2568 ณ สวนสาธารณะหนองบวกหาด",
      date: "2025-06-05",
      time: "16:15",
      author: "กลุ่มงานส่งเสริมการท่องเที่ยว",
      category: "ข่าวประชาสัมพันธ์",
      priority: "normal",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=200&fit=crop",
      views: 2234,
      likes: 78,
      comments: 29,
      tags: ["เทศกาล", "ดอกไม้", "ท่องเที่ยว", "เชียงใหม่"],
    },
    {
      id: 5,
      title: "แจ้งเตือนสถานการณ์ฝุ่นละออง PM2.5 ในระดับที่มีผลกระทบต่อสุขภาพ",
      description:
        "กรมควบคุมมลพิษแจ้งว่าสถานการณ์ฝุ่นละออง PM2.5 ในจังหวัดเชียงใหม่อยู่ในระดับสีแดง แนะนำให้ประชาชนหลีกเลี่ยงกิจกรรมกลางแจ้ง",
      date: "2025-06-04",
      time: "08:45",
      author: "กลุ่มงานสิ่งแวดล้อม",
      category: "แจ้งเตือน",
      priority: "urgent",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      views: 4156,
      likes: 234,
      comments: 89,
      tags: ["ฝุ่น PM2.5", "สุขภาพ", "แจ้งเตือน", "มลพิษ"],
    },
    {
      id: 6,
      title:
        "เชิญร่วมงานวันเด็กแห่งชาติ ประจำปี 2568 ณ ศาลากลางจังหวัดเชียงใหม่",
      description:
        "ขอเชิญเด็กและเยาวชนร่วมงานวันเด็กแห่งชาติ วันเสาร์ที่ 11 มกราคม 2568 มีกิจกรรมการแสดง เกมส์ และของรางวัลมากมาย",
      date: "2025-06-03",
      time: "13:20",
      author: "กลุ่มงานพัฒนาสังคม",
      category: "เชิญชวน",
      priority: "normal",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=400&h=200&fit=crop",
      views: 1567,
      likes: 67,
      comments: 34,
      tags: ["วันเด็ก", "เยาวชน", "กิจกรรม", "เชิญชวน"],
    },
    {
      id: 7,
      title: "ประกาศปิดระบบน้ำประปาชั่วคราว เพื่อซ่อมแซมท่อหลัก",
      description:
        "การประปาส่วนภูมิภาคสาขาเชียงใหม่ ขอแจ้งการปิดระบบน้ำประปาชั่วคราว วันที่ 15 มิถุนายน 2568 เวลา 09:00-17:00 น.",
      date: "2025-06-02",
      time: "10:30",
      author: "การประปาส่วนภูมิภาค",
      category: "ประกาศ",
      priority: "high",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1597149508665-9c75bf8a2e87?w=400&h=200&fit=crop",
      views: 2890,
      likes: 123,
      comments: 45,
      tags: ["น้ำประปา", "ปิดระบบ", "ซ่อมแซม", "ประกาศ"],
    },
    {
      id: 8,
      title: "แจ้งการเปลี่ยนแปลงเวลาทำการในช่วงเทศกาลสงกรานต์ 2568",
      description:
        "ที่ทำการปกครองจังหวัดเชียงใหม่ขอแจ้งการเปลี่ยนแปลงเวลาทำการในช่วงเทศกาลสงกรานต์ วันที่ 13-15 เมษายน 2568",
      date: "2025-06-01",
      time: "15:45",
      author: "สำนักงานเลขานุการ",
      category: "ข่าวประชาสัมพันธ์",
      priority: "normal",
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
      views: 1234,
      likes: 45,
      comments: 12,
      tags: ["สงกรานต์", "เวลาทำการ", "วันหยุด", "ประชาสัมพันธ์"],
    },
  ];

  // กรองข้อมูลตามเงื่อนไข
  const filteredAnnouncements = announcementsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()) ||
      item.author.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesPriority =
      priorityFilter === "all" || item.priority === priorityFilter;
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "urgent" && item.priority === "urgent") ||
      (activeTab === "new" && item.isNew) ||
      (activeTab === "popular" && item.views > 2000) ||
      item.category === activeTab;

    return matchesSearch && matchesCategory && matchesPriority && matchesTab;
  });

  // เรียงลำดับข้อมูล
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return (
          new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`)
        );
      case "views":
        return b.views - a.views;
      case "likes":
        return (b.likes || 0) - (a.likes || 0);
      case "priority":
        const priorityOrder = { urgent: 3, high: 2, normal: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      default:
        return 0;
    }
  });

  // แบ่งหน้าข้อมูล
  const startIndex = (currentPage - 1) * pageSize;
  const currentAnnouncements = sortedAnnouncements.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (value) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  };

  const handlePriorityFilter = (value) => {
    setPriorityFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleViewDetails = (announcement) => {
    setSelectedAnnouncement(announcement);
    setDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setDetailVisible(false);
    setSelectedAnnouncement(null);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  // นับจำนวนประชาสัมพันธ์ในแต่ละหมวด
  const getCategoryCount = (category) => {
    if (category === "all") return announcementsData.length;
    if (category === "urgent")
      return announcementsData.filter((item) => item.priority === "urgent")
        .length;
    if (category === "new")
      return announcementsData.filter((item) => item.isNew).length;
    if (category === "popular")
      return announcementsData.filter((item) => item.views > 2000).length;
    return announcementsData.filter((item) => item.category === category)
      .length;
  };

  return (
    <div className="announcements-container">
      {/* Header Section */}
      <div className="announcements-header">
        <div className="announcements-header-content">
          <div className="announcements-title-section">
            <SoundOutlined className="announcements-main-icon" />
            <div>
              <Title level={2} className="announcements-main-title">
                ประชาสัมพันธ์
              </Title>
              <Text className="announcements-subtitle">
                ข่าวสาร ประกาศ และการแจ้งเตือนจากจังหวัดเชียงใหม่
              </Text>
            </div>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="add-announcement-btn"
          >
            เพิ่มประชาสัมพันธ์
          </Button>
        </div>
      </div>

      {/* Tabs Section */}
      <Card className="announcements-tabs-card">
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="announcements-tabs"
        >
          <TabPane
            tab={
              <span className="tab-item">
                <NotificationOutlined />
                ทั้งหมด ({getCategoryCount("all")})
              </span>
            }
            key="all"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <WarningOutlined />
                ด่วน ({getCategoryCount("urgent")})
              </span>
            }
            key="urgent"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <BellOutlined />
                ใหม่ล่าสุด ({getCategoryCount("new")})
              </span>
            }
            key="new"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <FireOutlined />
                ยอดนิยม ({getCategoryCount("popular")})
              </span>
            }
            key="popular"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <ExclamationCircleOutlined />
                ประกาศ ({getCategoryCount("ประกาศ")})
              </span>
            }
            key="ประกาศ"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <SoundOutlined />
                ข่าวประชาสัมพันธ์ ({getCategoryCount("ข่าวประชาสัมพันธ์")})
              </span>
            }
            key="ข่าวประชาสัมพันธ์"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <ClockCircleOutlined />
                แจ้งเตือน ({getCategoryCount("แจ้งเตือน")})
              </span>
            }
            key="แจ้งเตือน"
          />
        </Tabs>
      </Card>

      {/* Filter and Search Section */}
      <Card className="announcements-filter-card">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="ค้นหาประชาสัมพันธ์..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              className="announcements-search"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="หมวดหมู่"
              size="large"
              value={categoryFilter}
              onChange={handleCategoryFilter}
              className="announcements-filter-select"
              suffixIcon={<FilterOutlined />}
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="ข่าวประชาสัมพันธ์">ข่าวประชาสัมพันธ์</Option>
              <Option value="ประกาศ">ประกาศ</Option>
              <Option value="แจ้งเตือน">แจ้งเตือน</Option>
              <Option value="เชิญชวน">เชิญชวน</Option>
              <Option value="แจ้งปิดถนน">แจ้งปิดถนน</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="ความสำคัญ"
              size="large"
              value={priorityFilter}
              onChange={handlePriorityFilter}
              className="announcements-filter-select"
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="urgent">ด่วนมาก</Option>
              <Option value="high">สำคัญ</Option>
              <Option value="normal">ปกติ</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="เรียงตาม"
              size="large"
              value={sortBy}
              onChange={handleSortChange}
              className="announcements-sort-select"
            >
              <Option value="date">วันที่ล่าสุด</Option>
              <Option value="priority">ความสำคัญ</Option>
              <Option value="views">ยอดดูมากสุด</Option>
              <Option value="likes">ถูกใจมากสุด</Option>
            </Select>
          </Col>
          <Col xs={24} md={4}>
            <div className="announcements-stats">
              <Space size={8} direction="vertical">
                <Text strong>
                  ทั้งหมด:{" "}
                  <span className="stat-number">
                    {filteredAnnouncements.length}
                  </span>{" "}
                  รายการ
                </Text>
                <Text type="secondary" className="stat-text">
                  หน้า {currentPage} จาก{" "}
                  {Math.ceil(filteredAnnouncements.length / pageSize)}
                </Text>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Announcements Grid Section */}
      <div className="announcements-content">
        {loading ? (
          <div className="announcements-loading">
            <Spin size="large" />
            <Text>กำลังโหลดข้อมูล...</Text>
          </div>
        ) : currentAnnouncements.length > 0 ? (
          <>
            <Row gutter={[24, 24]}>
              {currentAnnouncements.map((announcement) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={announcement.id}>
                  <AnnouncementCard
                    announcement={announcement}
                    onViewDetails={handleViewDetails}
                  />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="announcements-pagination">
              <Pagination
                current={currentPage}
                total={filteredAnnouncements.length}
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
            description="ไม่พบประชาสัมพันธ์ที่ตรงกับเงื่อนไขการค้นหา"
            className="announcements-empty"
          />
        )}
      </div>

      {/* Announcement Detail Modal */}
      <AnnouncementDetail
        announcement={selectedAnnouncement}
        visible={detailVisible}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Announcements;
