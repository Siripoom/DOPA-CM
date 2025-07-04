import React from "react";
import { Calendar, MapPin, Users, Tag, Eye } from "lucide-react";

// Helper to format date in Thai style
const formatThaiDate = (dateString, timeString) => {
  const date = new Date(dateString);
  const thaiYear = date.getFullYear() + 543;
  const thaiMonth = new Intl.DateTimeFormat("th-TH", { month: "long" }).format(
    date
  );
  const day = date.getDate();
  return `${day} ${thaiMonth} ${thaiYear} เวลา ${timeString} น.`;
};

// Helper for the status badge
const StatusBadge = ({ status }) => {
  const isUpcoming = status === "กำลังมา";
  const bgColor = isUpcoming
    ? "bg-blue-100 text-blue-800"
    : "bg-green-100 text-green-800";
  const dotColor = isUpcoming ? "bg-blue-500" : "bg-green-500";
  const text = isUpcoming ? "กำลังจะมาถึง" : "เสร็จสิ้น";

  return (
    <div
      className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${bgColor}`}
    >
      <span className={`w-2 h-2 mr-2 rounded-full ${dotColor}`}></span>
      {text}
    </div>
  );
};

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={activity.image}
          alt={activity.title}
        />
        <StatusBadge status={activity.status} />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {activity.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
          {activity.title}
        </h3>

        {/* Spacer to push details to the bottom */}
        <div className="flex-grow"></div>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-3 text-gray-400" />
            <span>{formatThaiDate(activity.date, activity.time)}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
            <span>{activity.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-3 text-gray-400" />
            <span>ผู้เข้าร่วม {activity.participants} คน</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
