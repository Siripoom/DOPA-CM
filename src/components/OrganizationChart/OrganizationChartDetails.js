// src/services/organizationChartDetails.js

// IMPORTANT: Place your actual image files inside the 'public/images/' folder
// For example:
// public/images/chief_muang_chiangmai.jpg
// public/images/deputy_muang_chiangmai.jpg
// public/images/head_admin_muang_chiangmai.jpg
// etc.

import peerasuk from "../../assets/district/mueang/IMG_310510170006.jpg";
import dumlong from "../../assets/district/mueang/IMG_020610144544.jpg";
import sukchai from "../../assets/district/hangdong/IMG_210610142555.jpg";

import adul from "../../assets/district/sansai/IMG_091017111814.jpg";
import jirachat from "../../assets/district/sansai/IMG_210710091234.jpg";
import chutchai from "../../assets/district/sansai/IMG_250610094633.jpg";

import phatdetch from "../../assets/district/maerim/IMG_091017113335.jpg";
import somchai from "../../assets/district/maerim/IMG_270423110907.jpg";

import phattera from "../../assets/district/doisaket/IMG_130710161416.jpg";

import warapha from "../../assets/district/maetaeng/IMG_121110134009.jpg";

import suphapun from "../../assets/district/saraphi/IMG_091017111036.jpg";
import chachawal from "../../assets/district/saraphi/IMG_300114104056.jpg";

import sarawut from "../../assets/district/chiangdao/IMG_091017111907.jpg";

const organizationChartDetails = {
  // Data for "อำเภอเมืองเชียงใหม่" (matching the 'name' in districtsData.js)
  อำเภอเมืองเชียงใหม่: {
    chief: {
      name: "นายอำเภอ",
      title: "นายอำเภอ",
      photo: null, // Placeholder: Replace with actual path
    },
    deputyChief: {
      name: "นายวิสุทธิ์     จรบุรี",
      title: "ปลัดอาวุโส", // Changed to match your image
      photo: null, // Placeholder: Replace with actual path
    },
    departments: [
      {
        name: "ฝ่ายอำนวยการ",
        head: "นายธนวัฒน์ พัฒนา",
        title: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        photo: null, // Placeholder: Replace with actual path
        // icon: null, // We'll rely on photo primarily, can keep icon for fallback if needed
        gradient: "linear-gradient(45deg, #f59e0b, #d97706)", // Orange
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายพีระศักดิ์     ธีรบดี",
        title: "หน.ฝ่ายความมั่นคง",
        photo: peerasuk, // Placeholder: Replace with actual path
        // icon: null,
        gradient: "linear-gradient(45deg, #8b5cf6, #7c3aed)", // Purple
      },
      {
        name: "ฝ่ายพัฒนาชุมชน", // Example department not in your image, but in previous code
        head: "นายปรีชา ก้าวหน้า",
        title: "หน.ฝ่ายทะเบียนและบัตร",
        photo: dumlong, // Placeholder: Replace with actual path
        // icon: null,
        gradient: "linear-gradient(45deg, #ef4444, #dc2626)", // Red
      },
    ],
  },
  // Data for "อำเภอหางดง"
  อำเภอหางดง: {
    chief: {
      name: "นายศักดิ์ชัย คุณานุวัฒน์ชัยเดช",
      title: "นายอำเภอ",
      photo: sukchai, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "ฝ่ายเกษตร",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายประพัฒน์ วงค์ชมภู",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายนริฐฌ์ จิรชีพทนินวกุล",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
    ],
  },
  อำเภอสันทราย: {
    chief: {
      name: "นายอดุลย์ ฮวกนิล",
      title: "นายอำเภอ",
      photo: adul, // Placeholder
    },
    deputyChief: {
      name: "นายฉัตรชัย สุวรรณวงศ์",
      title: "ปลัดอาวุโส",
      photo: chutchai, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายฉัตรชัย สุวรรณวงศ์",
        title: "หัวหน้าฝ่าย",
        photo: chutchai, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายจิระชาติ ซื่อตระกูล",
        title: "หัวหน้าฝ่าย",
        photo: jirachat, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางสุพัตรา นิ่มกุล",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอแม่ริม: {
    chief: {
      name: "นายภาษเดช หงส์ลดารมภ์",
      title: "นายอำเภอ",
      photo: phatdetch, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายสมชาย กะหลู่",
        title: "หัวหน้าฝ่าย",
        photo: somchai, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอดอยสะเก็ด: {
    chief: {
      name: "นายว่าที่ร้อยตรีสมัย คำชมภู",
      title: "นายอำเภอ",
      photo: null, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "นางพัทธ์ธีรา เทพวิบูลย์",
        head: "หน.ฝ่ายทะเบียนและบัตร",
        title: "หัวหน้าฝ่าย",
        photo: phattera, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอแม่แตง: {
    chief: {
      name: "นายศราวุธ ไทยเจริญ",
      title: "นายอำเภอ",
      photo: null, // Placeholder
    },
    deputyChief: {
      name: "นายนำชัย เจียงวรีวงศ์",
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายนำชัย เจียงวรีวงศ์",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายนำชัย เจียงวรีวงศ์",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "นางวราภา พวงชมภู",
        head: "หน.ฝ่ายทะเบียนและบัตร",
        title: "หัวหน้าฝ่าย",
        photo: warapha, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอสารภี: {
    chief: {
      name: "นางสุภาพรรณ บุญถนอม",
      title: "นายอำเภอ",
      photo: suphapun, // Placeholder
    },
    deputyChief: {
      name: "นายชัชวาลย์ ปัญญา",
      title: "ปลัดอาวุโส",
      photo: chachawal, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายชัชวาลย์ ปัญญา",
        title: "หัวหน้าฝ่าย",
        photo: chachawal, // Placeholder
        gradient: "linear-gradient(45deg, #10b981, #059669)", // Green
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายพงศ์ศักดิ์ เพชรคงแก้ว",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "นางอลงกรณ์ จันทร์กระจ่าง",
        head: "หน.ฝ่ายทะเบียนและบัตร",
        title: "หัวหน้าฝ่าย",
        photo: warapha, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอเชียงดาว: {
    chief: {
      name: "นายสราวุฒิ วรพงษ์",
      title: "นายอำเภอ",
      photo: sarawut, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "นายเศรษฐพล ทนันชัย",
        head: "หน.ฝ่ายทะเบียนและบัตร",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  // Add data for other districts (อำเภอสันทราย, อำเภอแม่ริม, etc.) here following the same structure.
  // If a district doesn't have a specific person's photo, you can use a placeholder image path,
  // or use your 'logo' if it's generic for that role, or just omit the 'photo' key and handle it in the component.
};

export default organizationChartDetails;
