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
  FileTextOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  BankOutlined,
  SafetyOutlined,
  TeamOutlined,
  SettingOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DocumentCard from "../../components/DocumentCard/DocumentCard";
import DocumentDetail from "../../components/DocumentDetail/DocumentDetail";
import "./Documents.css";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const Documents = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const pageSize = 12;

  // ข้อมูลจำลองสำหรับหนังสือราชการ
  const documentsData = [
    {
      id: 1,
      title:
        "เอกสารการจัดซื้อจัดจ้างโครงการพัฒนาสวนสาธารณะ ประจำปีงบประมาณ 2568",
      date: "2025-06-05",
      time: "16:08:22",
      author: "กลุ่มงานการเงินและบัญชี",
      docNumber: "ชม 0523.04/ว234",
      fileType: "PDF",
      fileSize: "2.5 MB",
      priority: "high",
      category: "การเงินและบัญชี",
      views: 245,
      downloads: 89,
      description:
        "เอกสารการจัดซื้อจัดจ้างสำหรับโครงการพัฒนาสวนสาธารณะในเขตจังหวัดเชียงใหม่ ประกอบด้วยรายละเอียดงบประมาณ แผนการดำเนินงาน และขั้นตอนการจัดซื้อจัดจ้างตามระเบียบของทางราชการ",
    },
    {
      id: 2,
      title:
        "รายงานการเบิกจ่ายงบประมาณรายจ่ายประจำ ไตรมาสที่ 2 ปีงบประมาณ 2568",
      date: "2025-06-03",
      time: "09:15:45",
      author: "กลุ่มงานการเงินและบัญชี",
      docNumber: "ชม 0523.04/ว198",
      fileType: "XLSX",
      fileSize: "1.8 MB",
      priority: "medium",
      category: "การเงินและบัญชี",
      views: 156,
      downloads: 67,
      description:
        "รายงานสรุปการเบิกจ่ายงบประมาณในไตรมาสที่ 2 พร้อมรายละเอียดการใช้งบประมาณแต่ละหมวด",
    },
    {
      id: 3,
      title:
        "ประกาศรายชื่อผู้ได้รับการคัดเลือกเข้าอบรมหลักสูตรการพัฒนาข้าราชการ รุ่นที่ 3",
      date: "2025-06-01",
      time: "09:59:40",
      author: "กลุ่มงานการเจ้าหน้าที่",
      docNumber: "ฝง 0408.2/ว156",
      fileType: "PDF",
      fileSize: "890 KB",
      priority: "medium",
      category: "การเจ้าหน้าที่",
      views: 389,
      downloads: 123,
      description:
        "ประกาศรายชื่อข้าราชการที่ผ่านการคัดเลือกเข้ารับการอบรมพัฒนาศักยภาพ",
    },
    {
      id: 4,
      title: "แผนการรักษาความปลอดภัยงานเทศกาลสงกรานต์ 2568",
      date: "2025-05-30",
      time: "09:58:23",
      author: "กลุ่มงานความมั่นคง",
      docNumber: "ฝง 0408.3/ว134",
      fileType: "PDF",
      fileSize: "3.2 MB",
      priority: "high",
      category: "ความมั่นคง",
      views: 567,
      downloads: 234,
      description:
        "แผนการรักษาความปลอดภัยและความสงบเรียบร้อยในช่วงเทศกาลสงกรานต์",
    },
    {
      id: 5,
      title: "รายงานสถานการณ์ความปลอดภัยในเขตพื้นที่ จังหวัดเชียงใหม่",
      date: "2025-05-28",
      time: "16:45:12",
      author: "กลุ่มงานความมั่นคง",
      docNumber: "ชม 0408.3/ว067",
      fileType: "PDF",
      fileSize: "2.1 MB",
      priority: "medium",
      category: "ความมั่นคง",
      views: 298,
      downloads: 145,
      description:
        "รายงานสรุปสถานการณ์ความปลอดภัยในเขตพื้นที่จังหวัดเชียงใหม่ประจำเดือน",
    },
    {
      id: 6,
      title: "หนังสือรายงานผลการดำเนินงานโครงการส่งเสริมอาชีพชุมชน",
      date: "2025-05-25",
      time: "14:22:18",
      author: "กลุ่มงานยุทธศาสตร์",
      docNumber: "มร 0408.2/ว089",
      fileType: "DOCX",
      fileSize: "1.2 MB",
      priority: "low",
      category: "ยุทธศาสตร์",
      views: 189,
      downloads: 78,
      description:
        "รายงานสรุปผลการดำเนินงานโครงการส่งเสริมอาชีพให้กับชุมชนในพื้นที่",
    },
    {
      id: 7,
      title: "แผนพัฒนาโครงสร้างพื้นฐานจังหวัดเชียงใหม่ ปี 2568-2572",
      date: "2025-05-22",
      time: "11:30:15",
      author: "กลุ่มงานโครงสร้างพื้นฐาน",
      docNumber: "ชม 0523.05/ว145",
      fileType: "PDF",
      fileSize: "4.5 MB",
      priority: "high",
      category: "โครงสร้างพื้นฐาน",
      views: 445,
      downloads: 167,
      description:
        "แผนยุทธศาสตร์การพัฒนาโครงสร้างพื้นฐานของจังหวัดเชียงใหม่ระยะ 5 ปี",
    },
    {
      id: 8,
      title: "มติการประชุมคณะผู้บริหารจังหวัด ประจำเดือนพฤษภาคม 2568",
      date: "2025-05-20",
      time: "15:45:30",
      author: "สำนักงานผู้ว่าราชการจังหวัด",
      docNumber: "ชม 0523.01/ว088",
      fileType: "PDF",
      fileSize: "1.6 MB",
      priority: "medium",
      category: "การปกครอง",
      views: 334,
      downloads: 112,
      description:
        "บันทึกมติการประชุมคณะผู้บริหารจังหวัดเชียงใหม่ประจำเดือนพฤษภาคม",
    },
  ];

  // กรองข้อมูลตามเงื่อนไข
  const filteredDocuments = documentsData.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.docNumber.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || doc.category === categoryFilter;
    const matchesPriority =
      priorityFilter === "all" || doc.priority === priorityFilter;
    const matchesTab = activeTab === "all" || doc.category === activeTab;

    return matchesSearch && matchesCategory && matchesPriority && matchesTab;
  });

  // เรียงลำดับข้อมูล
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "views":
        return b.views - a.views;
      case "downloads":
        return b.downloads - a.downloads;
      case "priority":
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      default:
        return 0;
    }
  });

  // แบ่งหน้าข้อมูล
  const startIndex = (currentPage - 1) * pageSize;
  const currentDocuments = sortedDocuments.slice(
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

  const handleViewDetails = (document) => {
    setSelectedDocument(document);
    setDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setDetailVisible(false);
    setSelectedDocument(null);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  // นับจำนวนเอกสารในแต่ละหมวด
  const getCategoryCount = (category) => {
    if (category === "all") return documentsData.length;
    return documentsData.filter((doc) => doc.category === category).length;
  };

  return (
    <div className="documents-container">
      {/* Header Section */}
      <div className="documents-header">
        <div className="documents-header-content">
          <div className="documents-title-section">
            <FileTextOutlined className="documents-main-icon" />
            <div>
              <Title level={2} className="documents-main-title">
                หนังสือราชการ
              </Title>
              <Text className="documents-subtitle">
                เอกสารและหนังสือราชการของจังหวัดเชียงใหม่
              </Text>
            </div>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="add-document-btn"
          >
            เพิ่มเอกสาร
          </Button>
        </div>
      </div>

      {/* Tabs Section */}
      <Card className="documents-tabs-card">
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="documents-tabs"
        >
          <TabPane
            tab={
              <span className="tab-item">
                <FileTextOutlined />
                ทั้งหมด ({getCategoryCount("all")})
              </span>
            }
            key="all"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <BankOutlined />
                การเงินและบัญชี ({getCategoryCount("การเงินและบัญชี")})
              </span>
            }
            key="การเงินและบัญชี"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <TeamOutlined />
                การปกครอง ({getCategoryCount("การปกครอง")})
              </span>
            }
            key="การปกครอง"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <SafetyOutlined />
                ความมั่นคง ({getCategoryCount("ความมั่นคง")})
              </span>
            }
            key="ความมั่นคง"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <UserOutlined />
                การเจ้าหน้าที่ ({getCategoryCount("การเจ้าหน้าที่")})
              </span>
            }
            key="การเจ้าหน้าที่"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <ProjectOutlined />
                ยุทธศาสตร์ ({getCategoryCount("ยุทธศาสตร์")})
              </span>
            }
            key="ยุทธศาสตร์"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <SettingOutlined />
                โครงสร้างพื้นฐาน ({getCategoryCount("โครงสร้างพื้นฐาน")})
              </span>
            }
            key="โครงสร้างพื้นฐาน"
          />
        </Tabs>
      </Card>

      {/* Filter and Search Section */}
      <Card className="documents-filter-card">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="ค้นหาเอกสาร..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              className="documents-search"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="หมวดหมู่"
              size="large"
              value={categoryFilter}
              onChange={handleCategoryFilter}
              className="documents-filter-select"
              suffixIcon={<FilterOutlined />}
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="การเงินและบัญชี">การเงินและบัญชี</Option>
              <Option value="การปกครอง">การปกครอง</Option>
              <Option value="ความมั่นคง">ความมั่นคง</Option>
              <Option value="การเจ้าหน้าที่">การเจ้าหน้าที่</Option>
              <Option value="ยุทธศาสตร์">ยุทธศาสตร์</Option>
              <Option value="โครงสร้างพื้นฐาน">โครงสร้างพื้นฐาน</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="ความสำคัญ"
              size="large"
              value={priorityFilter}
              onChange={handlePriorityFilter}
              className="documents-filter-select"
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="high">ด่วนมาก</Option>
              <Option value="medium">ปกติ</Option>
              <Option value="low">ไม่เร่งด่วน</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="เรียงตาม"
              size="large"
              value={sortBy}
              onChange={handleSortChange}
              className="documents-sort-select"
            >
              <Option value="date">วันที่ล่าสุด</Option>
              <Option value="views">ยอดดูมากสุด</Option>
              <Option value="downloads">ดาวน์โหลดมากสุด</Option>
              <Option value="priority">ความสำคัญ</Option>
            </Select>
          </Col>
          <Col xs={24} md={4}>
            <div className="documents-stats">
              <Space size={8} direction="vertical">
                <Text strong>
                  ทั้งหมด:{" "}
                  <span className="stat-number">
                    {filteredDocuments.length}
                  </span>{" "}
                  เอกสาร
                </Text>
                <Text type="secondary" className="stat-text">
                  หน้า {currentPage} จาก{" "}
                  {Math.ceil(filteredDocuments.length / pageSize)}
                </Text>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Documents Grid Section */}
      <div className="documents-content">
        {loading ? (
          <div className="documents-loading">
            <Spin size="large" />
            <Text>กำลังโหลดข้อมูล...</Text>
          </div>
        ) : currentDocuments.length > 0 ? (
          <>
            <Row gutter={[24, 24]}>
              {currentDocuments.map((document) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={document.id}>
                  <DocumentCard
                    document={document}
                    onViewDetails={handleViewDetails}
                  />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="documents-pagination">
              <Pagination
                current={currentPage}
                total={filteredDocuments.length}
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
            description="ไม่พบเอกสารที่ตรงกับเงื่อนไขการค้นหา"
            className="documents-empty"
          />
        )}
      </div>

      {/* Document Detail Modal */}
      <DocumentDetail
        document={selectedDocument}
        visible={detailVisible}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Documents;
