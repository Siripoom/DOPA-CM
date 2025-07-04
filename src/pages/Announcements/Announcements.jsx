import React, { useState } from "react";
import {
  Input,
  Select,
  Pagination,
  Empty,
  Spin,
  Button,
  Typography,
} from "antd";
import {
  SoundOutlined,
  SearchOutlined,
  PlusOutlined,
  FireOutlined,
  BellOutlined,
  WarningOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import AnnouncementDetail from "../../components/AnnouncementCard/AnnouncementDetail";
import Footer from "../../components/Footer/Footer";

const { Text } = Typography;
const { Option } = Select;

// ข้อมูลจำลอง (ใช้ข้อมูลเดิมที่คุณให้มา)
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
  // ... เพิ่มข้อมูลที่เหลือ
];

const Announcements = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  // const [detailVisible, setDetailVisible] = useState(false);
  const pageSize = 8; // ปรับจำนวนการ์ดต่อหน้าตาม Layout ใหม่

  const handleViewDetails = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setIsDetailVisible(false);
    // หน่วงเวลาเล็กน้อยเพื่อให้ animation การปิด modal สวยงามก่อนเคลียร์ข้อมูล
    setTimeout(() => {
      setSelectedAnnouncement(null);
    }, 300);
  };

  // --- LOGIC SECTION (เหมือนเดิม ไม่ต้องแก้) ---
  const filteredAnnouncements = announcementsData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "urgent" && item.priority === "urgent") ||
      (activeTab === "new" && item.isNew) ||
      (activeTab === "popular" && item.views > 2000);
    return matchesSearch && matchesCategory && matchesTab;
  });

  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    switch (sortBy) {
      case "views":
        return b.views - a.views;
      case "priority":
        const priorityOrder = { urgent: 3, high: 2, normal: 1 };
        return (
          (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0)
        );
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  const currentAnnouncements = sortedAnnouncements.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // --- HANDLER FUNCTIONS (เหมือนเดิม ไม่ต้องแก้) ---
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const QuickFilterButton = ({ name, tabKey, icon }) => {
    const isActive = activeTab === tabKey;
    const count = announcementsData.filter((item) => {
      if (tabKey === "all") return true;
      if (tabKey === "urgent") return item.priority === "urgent";
      if (tabKey === "new") return item.isNew;
      if (tabKey === "popular") return item.views > 2000;
      return false;
    }).length;

    return (
      <button
        onClick={() => handleTabChange(tabKey)}
        className={clsx(
          "flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all",
          isActive
            ? "bg-sky-600 text-white shadow-md"
            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
        )}
      >
        {icon}
        {name}
        <span
          className={clsx(
            "text-xs font-bold px-1.5 py-0.5 rounded-full",
            isActive ? "bg-white text-sky-600" : "bg-slate-200 text-slate-500"
          )}
        >
          {count}
        </span>
      </button>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-slate-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <SoundOutlined className="text-4xl text-sky-400" />
            <div>
              <h1 className="text-2xl font-bold">ประชาสัมพันธ์</h1>
              <p className="text-slate-300 text-sm">
                ข่าวสาร ประกาศ และการแจ้งเตือนจากจังหวัดเชียงใหม่
              </p>
            </div>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="bg-sky-600 hover:bg-sky-700 border-none"
          >
            เพิ่มประชาสัมพันธ์
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6 md:p-8">
        {/* Controls Panel */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-auto md:flex-grow">
            <Input
              placeholder="ค้นหาจากชื่อเรื่อง..."
              prefix={<SearchOutlined className="text-slate-400" />}
              size="large"
              onChange={handleSearch}
              className="w-full"
              allowClear
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Select
              value={categoryFilter}
              onChange={(value) => {
                setCategoryFilter(value);
                setCurrentPage(1);
              }}
              size="large"
              className="min-w-[150px]"
            >
              <Option value="all">ทุกหมวดหมู่</Option>
              <Option value="ข่าวประชาสัมพันธ์">ข่าวประชาสัมพันธ์</Option>
              <Option value="ประกาศ">ประกาศ</Option>
              <Option value="แจ้งเตือน">แจ้งเตือน</Option>
              <Option value="เชิญชวน">เชิญชวน</Option>
              <Option value="แจ้งปิดถนน">แจ้งปิดถนน</Option>
            </Select>
            <Select
              value={sortBy}
              onChange={(value) => {
                setSortBy(value);
                setCurrentPage(1);
              }}
              size="large"
              className="min-w-[150px]"
            >
              <Option value="date">วันที่ล่าสุด</Option>
              <Option value="priority">ความสำคัญ</Option>
              <Option value="views">ยอดนิยม</Option>
            </Select>
          </div>
        </div>

        {/* Quick Filters & Results Count */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <QuickFilterButton
              name="ทั้งหมด"
              tabKey="all"
              icon={<AppstoreOutlined />}
            />
            <QuickFilterButton
              name="ด่วน"
              tabKey="urgent"
              icon={<WarningOutlined />}
            />
            <QuickFilterButton
              name="ใหม่ล่าสุด"
              tabKey="new"
              icon={<BellOutlined />}
            />
            <QuickFilterButton
              name="ยอดนิยม"
              tabKey="popular"
              icon={<FireOutlined />}
            />
          </div>
          <div className="text-slate-500 font-semibold text-sm">
            พบ {sortedAnnouncements.length} รายการ
          </div>
        </div>

        {/* Announcements Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : sortedAnnouncements.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentAnnouncements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  onViewDetails={() => handleViewDetails(announcement)} // <-- ADD THIS
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Pagination
                current={currentPage}
                total={sortedAnnouncements.length}
                pageSize={pageSize}
                onChange={setCurrentPage}
                showSizeChanger={false}
              />
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg p-10">
            <Empty description="ไม่พบประชาสัมพันธ์ที่ตรงกับเงื่อนไข" />
          </div>
        )}
      </main>

      <AnnouncementDetail
        announcement={selectedAnnouncement}
        visible={isDetailVisible}
        onClose={handleCloseDetail}
      />
      <Footer />
    </div>
  );
};

export default Announcements;
