// pages/Districts/Districts.jsx
import React, { useState, useEffect } from "react";
import { Row, Col, Spin, Typography } from "antd";
import DistrictsPageHeader from "../../components/DistrictsPageHeader/DistrictsPageHeader";
import DistrictsStatsCard from "../../components/DistrictsStatsCard/DistrictsStatsCard";
import DistrictCard from "../../components/DistrictCard/DistrictCard";
import DistrictDetailModal from "../../components/DistrictDetailModal/DistrictDetailModal";
import {
  districtsData,
  searchDistricts,
  getTotalPopulation,
} from "../../services/districtsData";

import Footer from "../../components/Footer/Footer";

const { Text } = Typography;

const Districts = () => {
  const [districts, setDistricts] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  useEffect(() => {
    // จำลองการโหลดข้อมูล
    setLoading(true);
    setTimeout(() => {
      setDistricts(districtsData);
      setFilteredDistricts(districtsData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (value) => {
    const filtered = searchDistricts(districts, value);
    setFilteredDistricts(filtered);
  };

  const showDistrictDetail = (district) => {
    setSelectedDistrict(district);
    setDetailModalVisible(true);
  };

  const closeDetailModal = () => {
    setDetailModalVisible(false);
    setSelectedDistrict(null);
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          padding: "0",
        }}
      >
        {/* Header Section */}
        <DistrictsPageHeader onSearch={handleSearch} />

        {/* Content Section */}
        <div
          className="container mx-auto"
          style={{
            padding: "0 24px 60px",
            marginTop: "-40px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Stats Card */}
          <DistrictsStatsCard
            totalDistricts={filteredDistricts.length}
            totalPopulation={getTotalPopulation(districtsData)}
          />

          {/* Districts Grid */}
          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                background: "white",
                borderRadius: "20px",
              }}
            >
              <Spin size="large" />
              <div style={{ marginTop: "16px" }}>
                <Text style={{ fontSize: "16px", color: "#6b7280" }}>
                  กำลังโหลดข้อมูลอำเภอ...
                </Text>
              </div>
            </div>
          ) : (
            <Row gutter={[24, 24]}>
              {filteredDistricts.map((district) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={district.id}>
                  <DistrictCard
                    district={district}
                    onClick={showDistrictDetail}
                  />
                </Col>
              ))}
            </Row>
          )}

          {/* No Results */}
          {!loading && filteredDistricts.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                background: "white",
                borderRadius: "20px",
              }}
            >
              <Text style={{ fontSize: "18px", color: "#6b7280" }}>
                ไม่พบข้อมูลอำเภอที่ค้นหา
              </Text>
            </div>
          )}
        </div>

        {/* Detail Modal */}
        <DistrictDetailModal
          visible={detailModalVisible}
          onClose={closeDetailModal}
          district={selectedDistrict}
        />
      </div>
      <Footer />
    </>
  );
};

export default Districts;
