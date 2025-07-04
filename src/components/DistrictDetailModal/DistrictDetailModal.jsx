// components/DistrictDetailModal/DistrictDetailModal.jsx
import React from "react";
import {
  Modal,
  Card,
  Typography,
  Row,
  Col,
  Space,
  Collapse,
  Button,
  Divider,
} from "antd";
import {
  BankOutlined,
  PhoneOutlined,
  UserOutlined,
  ClusterOutlined,
} from "@ant-design/icons";
import OrganizationChart from "../OrganizationChart/OrganizationChart";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const DistrictDetailModal = ({ visible, onClose, district }) => {
  if (!district) return null;

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={1200}
      style={{ top: 20 }}
      bodyStyle={{ padding: 0 }}
    >
      <div>
        {/* Modal Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)",
            padding: "32px",
            color: "white",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <BankOutlined style={{ fontSize: "48px", marginBottom: "16px" }} />
            <Title level={2} style={{ color: "white", margin: 0 }}>
              {district.name}
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>
              {district.position}
            </Text>
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "32px" }}>
          <Collapse
            defaultActiveKey={["1", "3"]}
            ghost
            style={{
              background: "transparent",
              border: "none",
            }}
          >
            <Panel
              header={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <BankOutlined style={{ color: "#1890ff" }} />
                  <Text strong style={{ fontSize: "16px" }}>
                    ข้อมูลทั่วไป
                  </Text>
                </div>
              }
              key="1"
            >
              <Card
                style={{ marginBottom: "16px", border: "1px solid #f0f0f0" }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div style={{ marginBottom: "16px" }}>
                      <Text strong style={{ color: "#1f2937" }}>
                        คำขวัญ:
                      </Text>
                      <br />
                      <Text
                        style={{
                          fontStyle: "italic",
                          color: "#4f46e5",
                          fontSize: "15px",
                          lineHeight: "1.6",
                        }}
                      >
                        "{district.motto}"
                      </Text>
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Space direction="vertical" size={8}>
                      <div>
                        <Text strong>พื้นที่:</Text> {district.area}
                      </div>
                      <div>
                        <Text strong>ประชากร:</Text> {district.population}
                      </div>
                    </Space>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Space direction="vertical" size={8}>
                      <div>
                        <Text strong>จำนวนตำบล:</Text> {district.subdistricts}{" "}
                        ตำบล
                      </div>
                      <div>
                        <Text strong>จำนวนหมู่บ้าน:</Text> {district.villages}{" "}
                        หมู่บ้าน
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Panel>

            <Panel
              header={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <PhoneOutlined style={{ color: "#10b981" }} />
                  <Text strong style={{ fontSize: "16px" }}>
                    ข้อมูลติดต่อ
                  </Text>
                </div>
              }
              key="2"
            >
              <Card
                style={{ marginBottom: "16px", border: "1px solid #f0f0f0" }}
              >
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                  <div>
                    <PhoneOutlined
                      style={{ color: "#1890ff", marginRight: "8px" }}
                    />
                    <Text strong>เบอร์โทรศัพท์:</Text> {district.phone}
                  </div>
                  <div>
                    <UserOutlined
                      style={{ color: "#10b981", marginRight: "8px" }}
                    />
                    <Text strong>หัวหน้าส่วนราชการ:</Text>{" "}
                    {district.headOfficer}
                  </div>
                  <div>
                    <Text strong>ตำแหน่ง:</Text> {district.position}
                  </div>
                  <Divider />
                  <Paragraph style={{ color: "#6b7280" }}>
                    {district.description}
                  </Paragraph>
                </Space>
              </Card>
            </Panel>

            <Panel
              header={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <ClusterOutlined style={{ color: "#f59e0b" }} />
                  <Text strong style={{ fontSize: "16px" }}>
                    แผนผังองค์กร
                  </Text>
                </div>
              }
              key="3"
            >
              <Card style={{ border: "1px solid #f0f0f0" }}>
                <OrganizationChart districtName={district.name} />
              </Card>
            </Panel>
          </Collapse>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Button
              type="primary"
              size="large"
              onClick={onClose}
              style={{
                borderRadius: "12px",
                background: "linear-gradient(45deg, #1890ff, #40a9ff)",
                border: "none",
                padding: "8px 32px",
                height: "auto",
              }}
            >
              ปิด
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ant-modal .ant-modal-content {
          border-radius: 20px;
          overflow: hidden;
        }

        .ant-collapse-ghost
          > .ant-collapse-item
          > .ant-collapse-content
          > .ant-collapse-content-box {
          padding: 16px 0;
        }

        .ant-collapse-ghost > .ant-collapse-item {
          border-bottom: 1px solid #f0f0f0;
        }

        .ant-collapse-ghost > .ant-collapse-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </Modal>
  );
};

export default DistrictDetailModal;
