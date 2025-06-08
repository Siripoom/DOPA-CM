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
  Rate,
} from "antd";
import {
  BulbOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  BookOutlined,
  SafetyOutlined,
  TeamOutlined,
  SettingOutlined,
  ProjectOutlined,
  UserOutlined,
  StarFilled,
  FireOutlined,
} from "@ant-design/icons";
import KnowledgeCard from "../../components/KnowledgeCard/KnowledgeCard";
import KnowledgeDetail from "../../components/KnowledgeDetail /KnowledgeDetail";
import "./Knowledge.css";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const Knowledge = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedKnowledge, setSelectedKnowledge] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const pageSize = 12;

  // ข้อมูลจำลองสำหรับสาระและความรู้
  const knowledgeData = [
    {
      id: 1,
      title: "ขั้นตอนการขอใบอนุญาตก่อสร้างอาคาร",
      description:
        "แนวทางและขั้นตอนการยื่นขอใบอนุญาตก่อสร้างอาคารที่ถูกต้องตามกฎหมาย พร้อมแบบฟอร์มและเอกสารที่ต้องใช้ การเตรียมเอกสาร การยื่นคำขอ และการติดตามผลการอนุมัติ",
      category: "การบริการ",
      difficulty: "เริ่มต้น",
      readTime: "5 นาที",
      views: 2450,
      likes: 89,
      comments: 23,
      rating: 4.8,
      author: "กลุ่มงานการออกแบบและก่อสร้าง",
      publishDate: "2025-06-01",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
      tags: ["ใบอนุญาต", "ก่อสร้าง", "อาคาร", "การบริการ"],
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      title: "สิทธิและหน้าที่ของประชาชนในการมีส่วนร่วมกับท้องถิ่น",
      description:
        "ความรู้เกี่ยวกับสิทธิการมีส่วนร่วมในการพัฒนาท้องถิ่นของประชาชน รวมถึงกระบวนการการมีส่วนร่วม การแสดงความคิดเห็น และการติดตามตรวจสอบการดำเนินงานของท้องถิ่น",
      category: "สิทธิประชาชน",
      difficulty: "ปานกลาง",
      readTime: "8 นาที",
      views: 1980,
      likes: 67,
      comments: 18,
      rating: 4.6,
      author: "กลุ่มงานยุทธศาสตร์และแผนงาน",
      publishDate: "2025-05-28",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
      tags: ["สิทธิ", "ประชาชน", "ท้องถิ่น", "การมีส่วนร่วม"],
      popular: true,
    },
    {
      id: 3,
      title: "การดำเนินการเมื่อเกิดภัยพิบัติธรรมชาติ",
      description:
        "แผนการรับมือและแนวทางการป้องกันความเสียหายจากภัยพิบัติ พร้อมคู่มือการปฏิบัติเบื้องต้น การอพยพ การปฐมพยาบาล และการประสานงานกับหน่วยงานที่เกี่ยวข้อง",
      category: "ความปลอดภัย",
      difficulty: "ขั้นสูง",
      readTime: "6 นาที",
      views: 1756,
      likes: 94,
      comments: 31,
      rating: 4.9,
      author: "กลุ่มงานป้องกันและบรรเทาสาธารณภัย",
      publishDate: "2025-05-25",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop",
      tags: ["ภัยพิบัติ", "ความปลอดภัย", "ป้องกัน", "ฉุกเฉิน"],
      featured: true,
    },
    {
      id: 4,
      title: "แนวทางการจัดการขยะในชุมชนอย่างยั่งยืน",
      description:
        "วิธีการจัดการขยะที่เป็นมิตรต่อสิ่งแวดล้อม การคัดแยกขยะ การรีไซเคิล และการสร้างจิตสำนึกในการลดขยะ พร้อมตัวอย่างโครงการที่ประสบความสำเร็จ",
      category: "สิ่งแวดล้อม",
      difficulty: "เริ่มต้น",
      readTime: "7 นาที",
      views: 1234,
      likes: 56,
      comments: 15,
      rating: 4.7,
      author: "กลุ่มงานสิ่งแวดล้อมและทรัพยากรธรรมชาติ",
      publishDate: "2025-05-20",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop",
      tags: ["ขยะ", "สิ่งแวดล้อม", "รีไซเคิล", "ชุมชน"],
    },
    {
      id: 5,
      title: "กฎหมายที่ประชาชนควรรู้เกี่ยวกับการซื้อขายที่ดิน",
      description:
        "ข้อกฎหมายสำคัญในการซื้อขายที่ดิน การตรวจสอบเอกสารสิทธิ์ ขั้นตอนการโอนกรรมสิทธิ์ และการป้องกันการถูกหลอกลวงในการซื้อขายอสังหาริมทรัพย์",
      category: "กฎหมายและระเบียบ",
      difficulty: "ปานกลาง",
      readTime: "10 นาที",
      views: 2890,
      likes: 123,
      comments: 45,
      rating: 4.5,
      author: "กลุ่มงานกฎหมายและนิติการ",
      publishDate: "2025-05-15",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      tags: ["กฎหมาย", "ที่ดิน", "ซื้อขาย", "สิทธิ์"],
      popular: true,
    },
    {
      id: 6,
      title: "เทคโนโลยีดิจิทัลในการบริการประชาชน",
      description:
        "การใช้เทคโนโลยีดิจิทัลเพื่อพัฒนาการบริการประชาชน ระบบออนไลน์ แอปพลิเคชั่น และนวัตกรรมที่ช่วยลดขั้นตอนและเพิ่มความสะดวกในการติดต่อราชการ",
      category: "เทคโนโลยี",
      difficulty: "ปานกลาง",
      readTime: "6 นาที",
      views: 1567,
      likes: 78,
      comments: 22,
      rating: 4.4,
      author: "กลุ่มงานเทคโนโลยีสารสนเทศ",
      publishDate: "2025-05-10",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["เทคโนโลยี", "ดิจิทัล", "บริการ", "ออนไลน์"],
      isNew: true,
    },
    {
      id: 7,
      title: "โครงการพัฒนาเศรษฐกิจชุมชนตามหลักปรัชญาเศรษฐกิจพอเพียง",
      description:
        "แนวคิดและวิธีการพัฒนาเศรษฐกิจชุมชนให้ยั่งยืน การสร้างกลุ่มอาชีพ การพัฒนาผลิตภัณฑ์ท้องถิ่น และการตลาดที่เป็นธรรม ตามหลักปรัชญาเศรษฐกิจพอเพียง",
      category: "การพัฒนาชุมชน",
      difficulty: "ขั้นสูง",
      readTime: "12 นาที",
      views: 998,
      likes: 45,
      comments: 12,
      rating: 4.6,
      author: "กลุ่มงานส่งเสริมการลงทุนและพาณิชย์",
      publishDate: "2025-05-05",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
      tags: ["เศรษฐกิจ", "ชุมชน", "พอเพียง", "พัฒนา"],
    },
    {
      id: 8,
      title: "แนวทางการประหยัดพลังงานในครัวเรือน",
      description:
        "เทคนิคและวิธีการประหยัดพลังงานไฟฟ้าและพลังงานอื่นๆ ในบ้าน การเลือกใช้เครื่องใช้ไฟฟ้าที่ประหยัด และการปรับเปลี่ยนพฤติกรรมการใช้พลังงาน",
      category: "สิ่งแวดล้อม",
      difficulty: "เริ่มต้น",
      readTime: "4 นาที",
      views: 1345,
      likes: 67,
      comments: 19,
      rating: 4.3,
      author: "กลุ่มงานพลังงานและสาธารณูปโภค",
      publishDate: "2025-04-30",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      tags: ["พลังงาน", "ประหยัด", "ครัวเรือน", "สิ่งแวดล้อม"],
    },
  ];

  // กรองข้อมูลตามเงื่อนไข
  const filteredKnowledge = knowledgeData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()) ||
      item.author.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || item.difficulty === difficultyFilter;
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "popular" && item.popular) ||
      (activeTab === "featured" && item.featured) ||
      (activeTab === "new" && item.isNew) ||
      item.category === activeTab;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesTab;
  });

  // เรียงลำดับข้อมูล
  const sortedKnowledge = [...filteredKnowledge].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.publishDate) - new Date(a.publishDate);
      case "views":
        return b.views - a.views;
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "likes":
        return (b.likes || 0) - (a.likes || 0);
      default:
        return 0;
    }
  });

  // แบ่งหน้าข้อมูล
  const startIndex = (currentPage - 1) * pageSize;
  const currentKnowledge = sortedKnowledge.slice(
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

  const handleDifficultyFilter = (value) => {
    setDifficultyFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleViewDetails = (knowledge) => {
    setSelectedKnowledge(knowledge);
    setDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setDetailVisible(false);
    setSelectedKnowledge(null);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  // นับจำนวนบทความในแต่ละหมวด
  const getCategoryCount = (category) => {
    if (category === "all") return knowledgeData.length;
    if (category === "popular")
      return knowledgeData.filter((item) => item.popular).length;
    if (category === "featured")
      return knowledgeData.filter((item) => item.featured).length;
    if (category === "new")
      return knowledgeData.filter((item) => item.isNew).length;
    return knowledgeData.filter((item) => item.category === category).length;
  };

  return (
    <div className="knowledge-container">
      {/* Header Section */}
      <div className="knowledge-header">
        <div className="knowledge-header-content">
          <div className="knowledge-title-section">
            <BulbOutlined className="knowledge-main-icon" />
            <div>
              <Title level={2} className="knowledge-main-title">
                สาระและความรู้
              </Title>
              <Text className="knowledge-subtitle">
                คู่มือและความรู้ที่เป็นประโยชน์สำหรับประชาชน
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Card className="knowledge-tabs-card">
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="knowledge-tabs"
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
                <FireOutlined />
                ยอดนิยม ({getCategoryCount("popular")})
              </span>
            }
            key="popular"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <StarFilled />
                แนะนำ ({getCategoryCount("featured")})
              </span>
            }
            key="featured"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <BulbOutlined />
                ใหม่ล่าสุด ({getCategoryCount("new")})
              </span>
            }
            key="new"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <TeamOutlined />
                การบริการ ({getCategoryCount("การบริการ")})
              </span>
            }
            key="การบริการ"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <SafetyOutlined />
                ความปลอดภัย ({getCategoryCount("ความปลอดภัย")})
              </span>
            }
            key="ความปลอดภัย"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <UserOutlined />
                สิทธิประชาชน ({getCategoryCount("สิทธิประชาชน")})
              </span>
            }
            key="สิทธิประชาชน"
          />
          <TabPane
            tab={
              <span className="tab-item">
                <SettingOutlined />
                กฎหมายและระเบียบ ({getCategoryCount("กฎหมายและระเบียบ")})
              </span>
            }
            key="กฎหมายและระเบียบ"
          />
        </Tabs>
      </Card>

      {/* Filter and Search Section */}
      <Card className="knowledge-filter-card">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="ค้นหาบทความ..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              className="knowledge-search"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="หมวดหมู่"
              size="large"
              value={categoryFilter}
              onChange={handleCategoryFilter}
              className="knowledge-filter-select"
              suffixIcon={<FilterOutlined />}
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="การบริการ">การบริการ</Option>
              <Option value="สิทธิประชาชน">สิทธิประชาชน</Option>
              <Option value="ความปลอดภัย">ความปลอดภัย</Option>
              <Option value="กฎหมายและระเบียบ">กฎหมายและระเบียบ</Option>
              <Option value="การพัฒนาชุมชน">การพัฒนาชุมชน</Option>
              <Option value="เทคโนโลยี">เทคโนโลยี</Option>
              <Option value="สิ่งแวดล้อม">สิ่งแวดล้อม</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="ระดับความยาก"
              size="large"
              value={difficultyFilter}
              onChange={handleDifficultyFilter}
              className="knowledge-filter-select"
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="เริ่มต้น">เริ่มต้น</Option>
              <Option value="ปานกลาง">ปานกลาง</Option>
              <Option value="ขั้นสูง">ขั้นสูง</Option>
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              placeholder="เรียงตาม"
              size="large"
              value={sortBy}
              onChange={handleSortChange}
              className="knowledge-sort-select"
            >
              <Option value="date">วันที่ล่าสุด</Option>
              <Option value="views">ยอดดูมากสุด</Option>
              <Option value="rating">คะแนนสูงสุด</Option>
              <Option value="likes">ถูกใจมากสุด</Option>
            </Select>
          </Col>
          <Col xs={24} md={4}>
            <div className="knowledge-stats">
              <Space size={8} direction="vertical">
                <Text strong>
                  ทั้งหมด:{" "}
                  <span className="stat-number">
                    {filteredKnowledge.length}
                  </span>{" "}
                  บทความ
                </Text>
                <Text type="secondary" className="stat-text">
                  หน้า {currentPage} จาก{" "}
                  {Math.ceil(filteredKnowledge.length / pageSize)}
                </Text>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Knowledge Grid Section */}
      <div className="knowledge-content">
        {loading ? (
          <div className="knowledge-loading">
            <Spin size="large" />
            <Text>กำลังโหลดข้อมูล...</Text>
          </div>
        ) : currentKnowledge.length > 0 ? (
          <>
            <Row gutter={[24, 24]}>
              {currentKnowledge.map((knowledge) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={knowledge.id}>
                  <KnowledgeCard
                    knowledge={knowledge}
                    onViewDetails={handleViewDetails}
                  />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="knowledge-pagination">
              <Pagination
                current={currentPage}
                total={filteredKnowledge.length}
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
            description="ไม่พบบทความที่ตรงกับเงื่อนไขการค้นหา"
            className="knowledge-empty"
          />
        )}
      </div>

      {/* Knowledge Detail Modal */}
      <KnowledgeDetail
        knowledge={selectedKnowledge}
        visible={detailVisible}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Knowledge;
