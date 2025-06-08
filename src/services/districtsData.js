// services/districtsData.js
export const districtsData = [
  {
    id: 1,
    name: "อำเภอเมืองเชียงใหม่",
    motto: "เมืองเก่าแก่ ศูนย์กลางล้านนา วัฒนธรรมงดงาม",
    phone: "053-276-100",
    area: "40.216 ตร.กม.",
    population: "247,672 คน",
    subdistricts: 16,
    villages: 78,
    description: "เป็นศูนย์กลางการปกครองและเศรษฐกิจของจังหวัดเชียงใหม่",
    headOfficer: "นายอนุชา เมืองใหม่",
    position: "นายอำเภอเมืองเชียงใหม่",
    orgChart: "chart1.jpg",
  },
  {
    id: 2,
    name: "อำเภอหางดง",
    motto: "เมืองแห่งการเกษตร ผลไม้หวาน ประชาชนมีความสุข",
    phone: "053-441-030",
    area: "280.234 ตร.กม.",
    population: "124,856 คน",
    subdistricts: 5,
    villages: 74,
    description: "เป็นแหล่งเกษตรกรรมที่สำคัญ โดยเฉพาะการปลูกผลไม้",
    headOfficer: "นายสมชาย หางดง",
    position: "นายอำเภอหางดง",
    orgChart: "chart2.jpg",
  },
  {
    id: 3,
    name: "อำเภอสันทราย",
    motto: "เมืองแห่งการศึกษา นวัตกรรม เทคโนโลยี",
    phone: "053-498-022",
    area: "190.567 ตร.กม.",
    population: "156,243 คน",
    subdistricts: 9,
    villages: 124,
    description: "เป็นที่ตั้งของสถาบันการศึกษาชั้นนำและศูนย์เทคโนโลจี",
    headOfficer: "นางสาวมาลี สันทราย",
    position: "นายอำเภอสันทราย",
    orgChart: "chart3.jpg",
  },
  {
    id: 4,
    name: "อำเภอแม่ริม",
    motto: "เมืองแห่งธรรมชาติ ไผ่สวย น้ำใส อากาศบริสุทธิ์",
    phone: "053-298-016",
    area: "338.902 ตร.กม.",
    population: "89,154 คน",
    subdistricts: 8,
    villages: 67,
    description: "เป็นแหล่งท่องเที่ยวเชิงนิเวศและการเกษตรในพื้นที่สูง",
    headOfficer: "นายวิชัย แม่ริม",
    position: "นายอำเภอแม่ริม",
    orgChart: "chart4.jpg",
  },
  {
    id: 5,
    name: "อำเภอดอยสะเก็ด",
    motto: "เมืองในหุบเขา ธรรมชาติสวยงาม อากาศเย็นสบาย",
    phone: "053-496-088",
    area: "1,204.664 ตร.กม.",
    population: "167,891 คน",
    subdistricts: 12,
    villages: 156,
    description: "อำเภอที่มีพื้นที่ใหญ่ที่สุดและมีแหล่งท่องเที่ยวหลากหลาย",
    headOfficer: "นายประชา ดอยสะเก็ด",
    position: "นายอำเภอดอยสะเก็ด",
    orgChart: "chart5.jpg",
  },
  {
    id: 6,
    name: "อำเภอแม่แตง",
    motto: "เมืองแห่งภูเขา กาแฟหอม ชาเก็บใสสะอาด",
    phone: "053-459-002",
    area: "1,345.678 ตร.กม.",
    population: "67,234 คน",
    subdistricts: 8,
    villages: 89,
    description: "เป็นแหล่งกาแฟคุณภาพสูงและการท่องเที่ยวเชิงเกษตร",
    headOfficer: "นายสุรชัย แม่แตง",
    position: "นายอำเภอแม่แตง",
    orgChart: "chart6.jpg",
  },
  {
    id: 7,
    name: "อำเภอสารภี",
    motto: "เมืองแห่งปัญญา ประชาชนดี มีคุณธรรม",
    phone: "053-387-411",
    area: "210.123 ตร.กม.",
    population: "134,567 คน",
    subdistricts: 10,
    villages: 98,
    description: "เป็นชุมชนที่มีการพัฒนาอย่างสมดุลระหว่างเมืองและชนบท",
    headOfficer: "นางวิมลรัตน์ สารภี",
    position: "นายอำเภอสารภี",
    orgChart: "chart7.jpg",
  },
  {
    id: 8,
    name: "อำเภอเชียงดาว",
    motto: "เมืองถ้ำสวย ดาวใส ธรรมชาติอุดมสมบูรณ์",
    phone: "053-456-700",
    area: "520.456 ตร.กม.",
    population: "54,321 คน",
    subdistricts: 5,
    villages: 67,
    description: "เป็นแหล่งท่องเที่ยวถ้ำและภูเขาที่มีชื่อเสียง",
    headOfficer: "นายทวี เชียงดาว",
    position: "นายอำเภอเชียงดาว",
    orgChart: "chart8.jpg",
  },
];

// Utility functions
export const searchDistricts = (districts, searchTerm) => {
  if (!searchTerm) return districts;

  const lowercaseSearch = searchTerm.toLowerCase();
  return districts.filter(
    (district) =>
      district.name.toLowerCase().includes(lowercaseSearch) ||
      district.motto.toLowerCase().includes(lowercaseSearch)
  );
};

export const getTotalPopulation = (districts) => {
  const total = districts.reduce((sum, district) => {
    const population = parseInt(district.population.replace(/[^\d]/g, ""));
    return sum + population;
  }, 0);

  if (total >= 1000000) {
    return `${(total / 1000000).toFixed(1)}M+`;
  } else if (total >= 1000) {
    return `${(total / 1000).toFixed(0)}K+`;
  }
};

export default { districtsData, searchDistricts, getTotalPopulation };
