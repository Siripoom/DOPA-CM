import React from "react";
import { Tag } from "antd";
import { EyeOutlined, ClockCircleOutlined } from "@ant-design/icons";
import clsx from "clsx";

// ฟังก์ชันสำหรับกำหนดสไตล์ของ Tag ตามประเภท
const getTagStyles = (type, value) => {
  switch (type) {
    case "priority":
      if (value === "urgent") return "bg-red-100 text-red-800 border-red-200";
      if (value === "high")
        return "bg-amber-100 text-amber-800 border-amber-200";
      return "bg-slate-100 text-slate-800 border-slate-200";
    case "category":
      if (value === "ประกาศ") return "bg-sky-100 text-sky-800 border-sky-200";
      if (value === "เชิญชวน")
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      if (value === "แจ้งปิดถนน")
        return "bg-purple-100 text-purple-800 border-purple-200";
      if (value === "แจ้งเตือน")
        return "bg-orange-100 text-orange-800 border-orange-200";
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "new":
      return "bg-pink-100 text-pink-800 border-pink-200";
    default:
      return "bg-slate-100 text-slate-800 border-slate-200";
  }
};

// ฟังก์ชันแปลงชื่อ Priority เป็นภาษาไทย
const formatPriority = (priority) => {
  if (priority === "urgent") return "ด่วนมาก";
  if (priority === "high") return "สำคัญ";
  return "ปกติ";
};

const AnnouncementCard = ({ announcement, onViewDetails }) => {
  const { title, description, date, image, category, priority, isNew, views } =
    announcement;

  // แปลงวันที่ให้อยู่ในรูปแบบไทยที่สวยงาม
  const formattedDate = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={onViewDetails}
    >
      <img className="w-full h-40 object-cover" src={image} alt={title} />

      <div className="p-5 flex flex-col flex-grow">
        {/* Tags Section */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={clsx(
              "px-2.5 py-1 text-xs font-semibold rounded-full border",
              getTagStyles("category", category)
            )}
          >
            {category}
          </span>
          <span
            className={clsx(
              "px-2.5 py-1 text-xs font-semibold rounded-full border",
              getTagStyles("priority", priority)
            )}
          >
            {formatPriority(priority)}
          </span>
          {isNew && (
            <span
              className={clsx(
                "px-2.5 py-1 text-xs font-semibold rounded-full border",
                getTagStyles("new")
              )}
            >
              ใหม่
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-base text-slate-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-3 flex-grow">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 p-4 mt-auto">
        <div className="flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ClockCircleOutlined />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <EyeOutlined />
            <span>{views.toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
