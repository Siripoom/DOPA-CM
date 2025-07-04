import React, { useState, useMemo } from "react";
import { Pagination, Empty, Spin } from "antd"; // Keep useful AntD components
import { Search, Filter, CalendarDays, Plus, List } from "lucide-react";
import ActivityCard from "../../components/ActivityCard/ActivityCard"; // Adjust path if needed
import Footer from "../../components/Footer/Footer";

// Mock Data (can be moved to a separate file)
const activitiesData = [
  // ... (use the same data from your original file)
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
  // ... add other activities
];

const ActivitiesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // For future API calls
  const pageSize = 9;

  const filteredAndSortedActivities = useMemo(() => {
    // Start with a copy
    let activities = [...activitiesData];

    // 1. Filter by search text
    if (searchText) {
      activities = activities.filter((activity) =>
        activity.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // 2. Filter by status
    if (statusFilter !== "all") {
      activities = activities.filter(
        (activity) => activity.status === statusFilter
      );
    }

    // 3. Sort
    activities.sort((a, b) => {
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

    return activities;
  }, [searchText, statusFilter, sortBy]);

  const currentActivities = filteredAndSortedActivities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const Content = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" tip="กำลังโหลดข้อมูล..." />
        </div>
      );
    }
    if (currentActivities.length === 0) {
      return (
        <div className="py-16">
          <Empty description="ไม่พบกิจกรรมที่ตรงกับเงื่อนไข" />
        </div>
      );
    }
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Pagination
            current={currentPage}
            total={filteredAndSortedActivities.length}
            pageSize={pageSize}
            onChange={setCurrentPage}
            showSizeChanger={false}
          />
        </div>
      </>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                <CalendarDays size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  กิจกรรมจังหวัดเชียงใหม่
                </h1>
                <p className="text-gray-500 mt-1">
                  ติดตามกิจกรรมและงานต่างๆ ของจังหวัดเชียงใหม่
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Filter and Search Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative md:col-span-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="ค้นหากิจกรรม..."
                value={searchText}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filter & Sort Dropdowns */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <List
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">สถานะทั้งหมด</option>
                  <option value="กำลังมา">กำลังจะมาถึง</option>
                  <option value="เสร็จสิ้น">เสร็จสิ้นแล้ว</option>
                </select>
              </div>
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="date">เรียงตามวันที่ล่าสุด</option>
                  <option value="participants">เรียงตามผู้เข้าร่วม</option>
                  <option value="views">เรียงตามยอดเข้าชม</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Total Count Info */}
        <div className="mb-6 text-sm text-gray-600">
          <p>
            พบ{" "}
            <span className="font-bold text-gray-800">
              {filteredAndSortedActivities.length}
            </span>{" "}
            รายการ
          </p>
        </div>

        {/* Content Area */}
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
