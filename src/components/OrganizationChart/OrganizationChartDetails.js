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

import nitiya from "../../assets/district/chomthong/IMG_091017112423.jpg";
import punmanee from "../../assets/district/chomthong/IMG_210610153432.jpg";

import autha from "../../assets/district/maechaem/IMG_120215134951.jpg";
import adisak from "../../assets/district/maechaem/IMG_190710083815.jpg";

import chatree from "../../assets/district/samoeng/IMG_091017112015.jpg";
import suputra from "../../assets/district/samoeng/IMG_210610141432.jpg";

import sawang from "../../assets/district/fang/IMG_210610170800.jpg";
import nopkun from "../../assets/district/fang/IMG_220610093130.jpg";

import sakut from "../../assets/district/sanpatong/IMG_210610142651.jpg";

import anupong from "../../assets/district/sankamphaeng/IMG_091017111642.jpg";

import bunluer from "../../assets/district/hot/IMG_091017101033.jpg";
import sutthichaai from "../../assets/district/hot/IMG_200710215558.jpg";

import bumrung from "../../assets/district/doitao/IMG_091017111404.jpg";
import vijai from "../../assets/district/doitao/IMG_040810142502.jpg";

import preecha from "../../assets/district/omkoi/IMG_310510162441.jpg";
import setwut from "../../assets/district/omkoi/IMG_190710135824.jpg";
import witawut from "../../assets/district/omkoi/IMG_180212135412.jpg";

import sittisuk from "../../assets/district/wianghaeng/IMG_091017111012.jpg";
import surapon from "../../assets/district/wianghaeng/IMG_210610135126.jpg";
import chutchayan from "../../assets/district/wianghaeng/IMG_210610135326.jpg";

import anawut from "../../assets/district/chaiprakan/IMG_091017112345.jpg";
import niyamon from "../../assets/district/maewang/IMG_300610134620.jpg";

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
        gradient: "from-sky-300 to-sky-400", // Orange
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายพีระศักดิ์     ธีรบดี",
        title: "หน.ฝ่ายความมั่นคง",
        photo: peerasuk, // Placeholder: Replace with actual path
        // icon: null,
        gradient: "from-sky-300 to-sky-400", // Purple
      },
      {
        name: "ฝ่ายพัฒนาชุมชน", // Example department not in your image, but in previous code
        head: "นายปรีชา ก้าวหน้า",
        title: "หน.ฝ่ายทะเบียนและบัตร",
        photo: dumlong, // Placeholder: Replace with actual path
        // icon: null,
        gradient: "from-sky-300 to-sky-400", // Red
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
        photo: null, // Placeholder
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
  อำเภอจอมทอง: {
    chief: {
      name: "นางนิติยา พงษ์พานิช",
      title: "นายอำเภอ",
      photo: nitiya, // Placeholder
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
        name: "นายปุณณมี จันทร์ตาศรี",
        head: "หน.ฝ่ายทะเบียนและบัตร",
        title: "หัวหน้าฝ่าย",
        photo: punmanee, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอแม่แจ่ม: {
    chief: {
      name: "นายอรรถชา กัมปนาท",
      title: "นายอำเภอ",
      photo: autha, // Placeholder
    },
    deputyChief: {
      name: "นายอดิศักดิ์ ดวงจินดา",
      title: "ปลัดอาวุโส",
      photo: adisak, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายอดิศักดิ์ ดวงจินดา",
        title: "หัวหน้าฝ่าย",
        photo: adisak, // Placeholder
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
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: null,
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอสะเมิง: {
    chief: {
      name: "นายชาตรี กิตติธนดิตถ์",
      title: "นายอำเภอ",
      photo: chatree, // Placeholder
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
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางสุพัตรา เกษศิริ",
        title: "หัวหน้าฝ่าย",
        photo: suputra, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอฝาง: {
    chief: {
      name: "นายชัชวาลย์ ปัญญา",
      title: "นายอำเภอ",
      photo: chatree, // Placeholder
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
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายนพคุณ สุวรรณฤทธิ์",
        title: "หัวหน้าฝ่าย",
        photo: nopkun, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอฝาง: {
    chief: {
      name: "นายชัชวาลย์ ปัญญา",
      title: "นายอำเภอ",
      photo: chachawal, // Placeholder
    },
    deputyChief: {
      name: "นายชาตรี กิตติธนดิตถ์",
      title: "ปลัดอาวุโส",
      photo: chatree, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายชาตรี กิตติธนดิตถ์",
        title: "หัวหน้าฝ่าย",
        photo: chatree, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายแสวง กาศรีวิชัย",
        title: "หัวหน้าฝ่าย",
        photo: sawang, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายนพคุณ สุวรรณฤทธิ์",
        title: "หัวหน้าฝ่าย",
        photo: nopkun, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอแม่อาย: {
    chief: {
      name: null,
      title: "นายอำเภอ",
      photo: null, // Placeholder
    },
    deputyChief: {
      name: "นายอรรถชา กัมปนาทแสนยากร",
      title: "ปลัดอาวุโส",
      photo: autha, // Placeholder
    },
    departments: [
      {
        name: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        head: "นายอรรถชา กัมปนาทแสนยากร",
        title: "หัวหน้าฝ่าย",
        photo: autha, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายชานนท์ ดวงมณี",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางสาววราปรียา ปรามาลย์",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอพร้าว: {
    chief: {
      name: "นายทรงศักดิ์ วลัยใจ",
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
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายรังษี กลับทวี",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางสลีล คำภาแก้ว",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอสันป่าตอง: {
    chief: {
      name: "นายศักดิ์ชัย คุณานุวัฒน์ชัย",
      title: "นายอำเภอ",
      photo: sukchai, // Placeholder
    },
    deputyChief: {
      name: "นายสงัด บูรณภัทรโชติ",
      title: "ปลัดอาวุโส",
      photo: sakut, // Placeholder
    },
    departments: [
      {
        name: "นายสงัด บูรณภัทรโชติ",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: sakut, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายสาธิต กุหลาบทอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางวาสนา บุญธรรมช่วย",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอสันกำแพง: {
    chief: {
      name: "นายอนุพงษ์ วาวงศ์มูล",
      title: "นายอำเภอ",
      photo: anupong, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
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
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางนฤมล เมืองเดช",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอฮอด: {
    chief: {
      name: "นายอนันท์ ภัทรเดชมงคล",
      title: "นายอำเภอ",
      photo: null, // Placeholder
    },
    deputyChief: {
      name: "นายบุญลือ ธรรมธรานุรักษ์ปลัดอาวุโส",
      title: "ปลัดอาวุโส",
      photo: bunluer, // Placeholder
    },
    departments: [
      {
        name: "นายบุญลือ ธรรมธรานุรักษ์ปลัดอาวุโส",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: bunluer, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายสุทธิชัย     ตรีศิลสัตย์",
        title: "หัวหน้าฝ่าย",
        photo: sutthichaai, // Placeholder
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
  อำเภอดอยเต่า: {
    chief: {
      name: "นายอนันท์ ภัทรเดชมงคล",
      title: "นายอำเภอ",
      photo: bumrung, // Placeholder
    },
    deputyChief: {
      name: "นายวิจัย เพ็ญพัฒนากุล",
      title: "ปลัดอาวุโส",
      photo: vijai, // Placeholder
    },
    departments: [
      {
        name: "นายวิจัย เพ็ญพัฒนากุล",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: vijai, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายวิจัย เพ็ญพัฒนากุล",
        title: "หัวหน้าฝ่าย",
        photo: vijai, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายวิจัย เพ็ญพัฒนากุล",
        title: "หัวหน้าฝ่าย",
        photo: vijai, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอออมก๋อย: {
    chief: {
      name: null,
      title: "นายอำเภอ",
      photo: null, // Placeholder
    },
    deputyChief: {
      name: "นายปรีชา ศิรินาม",
      title: "ปลัดอาวุโส",
      photo: preecha, // Placeholder
    },
    departments: [
      {
        name: "นายปรีชา ศิรินาม",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: preecha, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายเศรษฐวุฒิ คำมูล",
        title: "หัวหน้าฝ่าย",
        photo: setwut, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายวิทวัส บุตรด๊ะ",
        title: "หัวหน้าฝ่าย",
        photo: witawut, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอเวียงแหง: {
    chief: {
      name: "นายสิทธิ์ศักดิ์ อภิกุลชัยสุทธิ์",
      title: "นายอำเภอ",
      photo: sittisuk, // Placeholder
    },
    deputyChief: {
      name: "นายสายัณห์ ใจบุญ",
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: "นายสายัณห์ ใจบุญ",
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายชัชญาณ ไชยยามูล",
        title: "หัวหน้าฝ่าย",
        photo: chutchayan, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายสุรพล บุญมิตร",
        title: "หัวหน้าฝ่าย",
        photo: surapon, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอไชยปราการ: {
    chief: {
      name: "นายอนวัช สัตตบุศย์",
      title: "นายอำเภอ",
      photo: anawut, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายวีรวัฒน์ กิจมานะทรัพย์",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายอุทัย สอนจีน",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอแม่วาง: {
    chief: {
      name: "นายสุทิน จันทร์งาม",
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
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นางสาวนิยมล ยาวินัง",
        title: "หัวหน้าฝ่าย",
        photo: niyamon, // Placeholder
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
  อำเภอแม่ออน: {
    chief: {
      name: "นางสาวภัทราพร ลายจุด",
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
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายนคร กาวิชัย",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นายบุญศรี เตชะหมื่น",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอดอยหล่อ: {
    chief: {
      name: null,
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
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: "หน.ฝ่ายความมั่นคง",
        head: "นายเศรษฐวุฒิ คำมูล",
        title: "หัวหน้าฝ่าย",
        photo: setwut, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: "หน.ฝ่ายทะเบียนและบัตร",
        head: "นางสาวกนกวรรณ สมนา",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
    ],
  },
  อำเภอกัลยาณิวัฒนา: {
    chief: {
      name: "นายบุญลือ ธรรมธรานุรักษ์",
      title: "นายอำเภอ",
      photo: bunluer, // Placeholder
    },
    deputyChief: {
      name: null,
      title: "ปลัดอาวุโส",
      photo: null, // Placeholder
    },
    departments: [
      {
        name: null,
        head: "หน.กลุ่มงาน/ฝ่ายบริหารงานปกครอง",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)",
      },
      {
        name: null,
        head: "นายเศรษฐวุฒิ คำมูล",
        title: "หัวหน้าฝ่าย",
        photo: null, // Placeholder
        gradient: "linear-gradient(45deg, #a855f7, #9333ea)", // Violet
      },
      {
        name: null,
        head: "นางสาวกนกวรรณ สมนา",
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
