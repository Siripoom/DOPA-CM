// src/components/AnnouncementDetail.jsx

import React from "react";
import { Modal, Tag } from "antd";
import {
  EyeOutlined,
  ClockCircleOutlined,
  UserOutlined,
  TagOutlined,
} from "@ant-design/icons";

const AnnouncementDetail = ({ announcement, visible, onClose }) => {
  // ป้องกัน error ถ้าข้อมูลยังไม่มา
  if (!announcement) {
    return null;
  }

  const { title, description, date, time, author, image, tags, views } =
    announcement;

  const formattedDateTime =
    new Date(`${date}T${time}`).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) + " น.";

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null} // ไม่ใช้ปุ่ม OK/Cancel มาตรฐาน
      width={800}
      centered
      bodyStyle={{ padding: 0 }}
      destroyOnClose // เคลียร์ state ภายใน modal เมื่อปิด
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 mb-5 border-b pb-5">
            <div className="flex items-center gap-2">
              <UserOutlined />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockCircleOutlined />
              <span>{formattedDateTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOutlined />
              <span>{views.toLocaleString("en-US")} ครั้ง</span>
            </div>
          </div>

          <p className="text-base text-slate-700 leading-relaxed mb-6">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-auto pt-4 border-t">
              <div className="flex items-center gap-2 mb-2 text-sm text-slate-600">
                <TagOutlined />
                <span>แท็กที่เกี่ยวข้อง:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tag key={index} color="blue">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AnnouncementDetail;
