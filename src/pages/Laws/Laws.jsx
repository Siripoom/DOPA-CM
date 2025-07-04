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
  SafetyOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  BookOutlined,
  BankOutlined,
  TeamOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import LawCard from "../../components/LawCard/LawCard";
import LawDetail from "../../components/LawDetail/LawDetail";
import "./Laws.css";

import Footer from "../../components/Footer/Footer";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const Laws = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [importanceFilter, setImportanceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedLaw, setSelectedLaw] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const pageSize = 12;

  // ข้อมูลจำลองสำหรับกฎหมาย
  const lawsData = [
    {
      id: 1,
      title: "พระราชบัญญัติข้อมูลข่าวสารของราชการ พ.ศ. 2540",
      lawCode: "พ.ร.บ. 2540",
      description:
        "กฎหมายที่กำหนดสิทธิของประชาชนในการเข้าถึงข้อมูลข่าวสารของหน่วยงานของรัฐ การขอรับข้อมูล ขั้นตอนการพิจารณา และการคุ้มครองข้อมูลส่วนบุคคล",
      category: "กฎหมายปกครอง",
      importance: "สูง",
      status: "ใช้บังคับ",
      effectiveDate: "1997-12-04",
      lastUpdate: "2024-01-15",
      views: 4520,
      downloads: 892,
      tags: ["ข้อมูลข่าวสาร", "สิทธิประชาชน", "โปร่งใส", "ราชการ"],
      isNew: false,
      isUpdated: true,
    },
    {
      id: 2,
      title: "พระราชบัญญัติวิธีปฏิบัติราชการทางปกครอง พ.ศ. 2539",
      lawCode: "พ.ร.บ. 2539",
      description:
        "กฎหมายที่กำหนดหลักเกณฑ์และวิธีการปฏิบัติราชการของเจ้าหน้าที่ของรัฐ การออกคำสั่งทางปกครอง การอุทธรณ์ และการพิจารณาอุทธรณ์",
      category: "กฎหมายปกครอง",
      importance: "สูง",
      status: "ใช้บังคับ",
      effectiveDate: "1996-05-26",
      lastUpdate: "2023-08-20",
      views: 3890,
      downloads: 756,
      tags: ["วิธีปฏิบัติ", "ราชการ", "คำสั่งปกครอง", "อุทธรณ์"],
      isNew: false,
      isUpdated: false,
    },
    {
      id: 3,
      title: "พระราชบัญญัติความรับผิดทางละเมิดของเจ้าหน้าที่ พ.ศ. 2539",
      lawCode: "พ.ร.บ. 2539",
      description:
        "กฎหมายที่กำหนดความรับผิดทางละเมิดของเจ้าหน้าที่ของรัฐในการปฏิบัติหน้าที่ การเรียกร้องค่าเสียหาย และการคุ้มครองผู้เสียหาย",
      category: "กฎหมายแพ่ง",
      importance: "ปานกลาง",
      status: "ใช้บังคับ",
      effectiveDate: "1996-10-11",
      lastUpdate: "2024-03-10",
      views: 2145,
      downloads: 423,
      tags: ["ความรับผิด", "ละเมิด", "เจ้าหน้าที่", "ค่าเสียหาย"],
      isNew: false,
      isUpdated: true,
    },
    {
      id: 4,
      title:
        "พระราชบัญญัติการรักษาความสะอาดและความเป็นระเบียบเรียบร้อยของบ้านเมือง พ.ศ. 2535",
      lawCode: "พ.ร.บ. 2535",
      description:
        "กฎหมายที่กำหนดมาตรการในการรักษาความสะอาดและความเป็นระเบียบเรียบร้อยของบ้านเมือง การกำจัดขยะ การรักษาสิ่งแวดล้อม และบทลงโทษ",
      category: "กฎหมายสิ่งแวดล้อม",
      importance: "ปานกลาง",
      status: "ใช้บังคับ",
      effectiveDate: "1992-03-23",
      lastUpdate: "2023-11-05",
      views: 1876,
      downloads: 345,
      tags: ["ความสะอาด", "สิ่งแวดล้อม", "ขยะ", "ระเบียบ"],
      isNew: false,
      isUpdated: false,
    },
    {
      id: 5,
      title: "พระราชกำหนดการบริหารราชการในสถานการณ์ฉุกเฉิน พ.ศ. 2548",
      lawCode: "พ.ร.ก. 2548",
      description:
        "กฎหมายที่ให้อำนาจแก่นายกรัฐมนตรีในการประกาศและบริหารราชการในสถานการณ์ฉุกเฉิน การใช้อำนาจพิเศษ และการควบคุมสถานการณ์",
      category: "กฎหมายรัฐธรรมนูญ",
      importance: "สูง",
      status: "ใช้บังคับ",
      effectiveDate: "2005-07-16",
      lastUpdate: "2024-05-20",
      views: 5234,
      downloads: 1145,
      tags: ["ฉุกเฉิน", "อำนาจพิเศษ", "นายกรัฐมนตรี", "ความมั่นคง"],
      isNew: true,
      isUpdated: false,
    },
    {
      id: 6,
      title: "พระราชบัญญัติแรงงานรัฐวิสาหกิจสัมพันธ์ พ.ศ. 2543",
      lawCode: "พ.ร.บ. 2543",
      description:
        "กฎหมายที่กำหนดความสัมพันธ์ระหว่างลูกจ้างและนายจ้างในรัฐวิสาหกิจ การจัดตั้งสหภาพแรงงาน การเจรจาต่อรอง และการระงับข้อพิพาท",
      category: "กฎหมายแรงงาน",
      importance: "ปานกลาง",
      status: "ใช้บังคับ",
      effectiveDate: "2000-05-01",
      lastUpdate: "2023-12-15",
      views: 1456,
      downloads: 267,
      tags: ["แรงงาน", "รัฐวิสาหกิจ", "สหภาพ", "เจรจาต่อรอง"],
      isNew: false,
      isUpdated: false,
    },
    {
      id: 7,
      title: "พระราชบัญญัติป้องกันและปราบปรามการทุจริต พ.ศ. 2542",
      lawCode: "พ.ร.บ. 2542",
      description:
        "กฎหมายที่กำหนดมาตรการป้องกันและปราบปรามการทุจริตของเจ้าหน้าที่ของรัฐ การตรวจสอบทรัพย์สิน และการดำเนินคดีทุจริต",
      category: "กฎหมายอาญา",
      importance: "สูง",
      status: "ใช้บังคับ",
      effectiveDate: "1999-02-28",
      lastUpdate: "2024-02-10",
      views: 6789,
      downloads: 1567,
      tags: ["ทุจริต", "ป้องกัน", "ปราบปราม", "เจ้าหน้าที่"],
      isNew: false,
      isUpdated: true,
    },
    {
      id: 8,
      title: "พระราชบัญญัติภาษีเงินได้บุคคลธรรมดา พ.ศ. 2535",
      lawCode: "พ.ร.บ. 2535",
      description:
        "กฎหมายที่กำหนดภาษีเงินได้ของบุคคลธรรมดา อัตราภาษี การยกเว้นภาษี การคำนวณภาษี และหน้าที่ในการชำระภาษี",
      category: "กฎหมายภาษี",
      importance: "ทั่วไป",
      status: "ใช้บังคับ",
      effectiveDate: "1992-01-01",
      lastUpdate: "2024-01-01",
      views: 3456,
      downloads: 678,
      tags: ["ภาษี", "เงินได้", "บุคคลธรรมดา", "อัตรา"],
      isNew: false,
      isUpdated: true,
    },
  ];

  // กรองข้อมูลตามเงื่อนไข
  const filteredLaws = lawsData.filter((law) => {
    const matchesSearch =
      law.title.toLowerCase().includes(searchText.toLowerCase()) ||
      law.lawCode.toLowerCase().includes(searchText.toLowerCase()) ||
      law.description.toLowerCase().includes(searchText.toLowerCase()) ||
      law.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || law.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || law.status === statusFilter;
    const matchesImportance =
      importanceFilter === "all" || law.importance === importanceFilter;
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "important" && law.importance === "สูง") ||
      (activeTab === "new" && law.isNew) ||
      (activeTab === "updated" && law.isUpdated) ||
      law.category === activeTab;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesImportance &&
      matchesTab
    );
  });

  // เรียงลำดับข้อมูล
  const sortedLaws = [...filteredLaws].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return (
          new Date(b.lastUpdate || b.effectiveDate) -
          new Date(a.lastUpdate || a.effectiveDate)
        );
      case "views":
        return b.views - a.views;
      case "downloads":
        return b.downloads - a.downloads;
      case "importance":
        const importanceOrder = { สูง: 3, ปานกลาง: 2, ทั่วไป: 1 };
        return importanceOrder[b.importance] - importanceOrder[a.importance];
      default:
        return 0;
    }
  });

  // แบ่งหน้าข้อมูล
  const startIndex = (currentPage - 1) * pageSize;
  const currentLaws = sortedLaws.slice(startIndex, startIndex + pageSize);

  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (value) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleImportanceFilter = (value) => {
    setImportanceFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleViewDetails = (law) => {
    setSelectedLaw(law);
    setDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setDetailVisible(false);
    setSelectedLaw(null);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  // นับจำนวนกฎหมายในแต่ละหมวด
  const getCategoryCount = (category) => {
    if (category === "all") return lawsData.length;
    if (category === "important")
      return lawsData.filter((law) => law.importance === "สูง").length;
    if (category === "new") return lawsData.filter((law) => law.isNew).length;
    if (category === "updated")
      return lawsData.filter((law) => law.isUpdated).length;
    return lawsData.filter((law) => law.category === category).length;
  };

  return (
    <>
      <div className="laws-container">
        {/* Header Section */}
        <div className="laws-header bg-gradient-to-r from-blue-500 to-sky-400">
          <div className="laws-header-content">
            <div className="laws-title-section">
              <SafetyOutlined className="laws-main-icon" />
              <div>
                <Title level={2} className="laws-main-title">
                  กฎหมายน่ารู้
                </Title>
                <Text className="laws-subtitle">
                  กฎหมายและระเบียบที่ประชาชนควรทราบ
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="laws-tabs-card">
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            className="laws-tabs"
          >
            <TabPane
              tab={
                <span className="tab-item">
                  <BookOutlined />
                  ทั้งหมด ({getCategoryCount("all")})
                </span>
              }
              key="all"
            />

            <TabPane
              tab={
                <span className="tab-item">
                  <FileTextOutlined />
                  กฎหมายปกครอง ({getCategoryCount("กฎหมายปกครอง")})
                </span>
              }
              key="กฎหมายปกครอง"
            />
            <TabPane
              tab={
                <span className="tab-item">
                  <SafetyOutlined />
                  กฎหมายอาญา ({getCategoryCount("กฎหมายอาญา")})
                </span>
              }
              key="กฎหมายอาญา"
            />
            <TabPane
              tab={
                <span className="tab-item">
                  <TeamOutlined />
                  กฎหมายแพ่ง ({getCategoryCount("กฎหมายแพ่ง")})
                </span>
              }
              key="กฎหมายแพ่ง"
            />
            <TabPane
              tab={
                <span className="tab-item">
                  <BankOutlined />
                  กฎหมายรัฐธรรมนูญ ({getCategoryCount("กฎหมายรัฐธรรมนูญ")})
                </span>
              }
              key="กฎหมายรัฐธรรมนูญ"
            />
          </Tabs>
        </Card>

        {/* Filter and Search Section */}
        <Card className="laws-filter-card">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12} md={6}>
              <Search
                placeholder="ค้นหากฎหมาย..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={handleSearch}
                className="laws-search"
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Select
                placeholder="หมวดหมู่"
                size="large"
                value={categoryFilter}
                onChange={handleCategoryFilter}
                className="laws-filter-select"
                suffixIcon={<FilterOutlined />}
              >
                <Option value="all">ทั้งหมด</Option>
                <Option value="กฎหมายแพ่ง">กฎหมายแพ่ง</Option>
                <Option value="กฎหมายอาญา">กฎหมายอาญา</Option>
                <Option value="กฎหมายรัฐธรรมนูญ">กฎหมายรัฐธรรมนูญ</Option>
                <Option value="กฎหมายปกครอง">กฎหมายปกครอง</Option>
                <Option value="กฎหมายแรงงาน">กฎหมายแรงงาน</Option>
                <Option value="กฎหมายสิ่งแวดล้อม">กฎหมายสิ่งแวดล้อม</Option>
                <Option value="กฎหมายธุรกิจ">กฎหมายธุรกิจ</Option>
                <Option value="กฎหมายภาษี">กฎหมายภาษี</Option>
              </Select>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Select
                placeholder="สถานะ"
                size="large"
                value={statusFilter}
                onChange={handleStatusFilter}
                className="laws-filter-select"
              >
                <Option value="all">ทั้งหมด</Option>
                <Option value="ใช้บังคับ">ใช้บังคับ</Option>
                <Option value="ยกเลิก">ยกเลิก</Option>
                <Option value="ปรับปรุง">ปรับปรุง</Option>
              </Select>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Select
                placeholder="ความสำคัญ"
                size="large"
                value={importanceFilter}
                onChange={handleImportanceFilter}
                className="laws-filter-select"
              >
                <Option value="all">ทั้งหมด</Option>
                <Option value="สูง">สำคัญมาก</Option>
                <Option value="ปานกลาง">สำคัญ</Option>
                <Option value="ทั่วไป">ทั่วไป</Option>
              </Select>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Select
                placeholder="เรียงตาม"
                size="large"
                value={sortBy}
                onChange={handleSortChange}
                className="laws-sort-select"
              >
                <Option value="date">วันที่ล่าสุด</Option>
                <Option value="importance">ความสำคัญ</Option>
                <Option value="views">ยอดดูมากสุด</Option>
                <Option value="downloads">ดาวน์โหลดมากสุด</Option>
              </Select>
            </Col>
            <Col xs={24} md={5}>
              <div className="laws-stats">
                <Space size={8} direction="vertical">
                  <Text strong>
                    ทั้งหมด:{" "}
                    <span className="stat-number">{filteredLaws.length}</span>{" "}
                    ฉบับ
                  </Text>
                  <Text type="secondary" className="stat-text">
                    หน้า {currentPage} จาก{" "}
                    {Math.ceil(filteredLaws.length / pageSize)}
                  </Text>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Laws Grid Section */}
        <div className="laws-content">
          {loading ? (
            <div className="laws-loading">
              <Spin size="large" />
              <Text>กำลังโหลดข้อมูล...</Text>
            </div>
          ) : currentLaws.length > 0 ? (
            <>
              <Row gutter={[24, 24]}>
                {currentLaws.map((law) => (
                  <Col xs={24} sm={12} lg={8} xl={6} key={law.id}>
                    <LawCard law={law} onViewDetails={handleViewDetails} />
                  </Col>
                ))}
              </Row>

              {/* Pagination */}
              <div className="laws-pagination">
                <Pagination
                  current={currentPage}
                  total={filteredLaws.length}
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
              description="ไม่พบกฎหมายที่ตรงกับเงื่อนไขการค้นหา"
              className="laws-empty"
            />
          )}
        </div>

        {/* Law Detail Modal */}
        <LawDetail
          law={selectedLaw}
          visible={detailVisible}
          onClose={handleCloseDetail}
        />
      </div>
      <Footer />
    </>
  );
};

export default Laws;
