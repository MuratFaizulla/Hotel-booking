import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "Барлығы",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Жағажай жағасы",
    icon: <TbBeach />,
    description: "Бұл мүлік жағажайға жақын орналасқан!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Жел диірмендері",
    icon: <GiWindmill />,
    description: "Бұл мүлікте жел диірмендері бар!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Атаулы қалалар",
    icon: <MdOutlineVilla />,
    description: "Бұл қазіргі заманғы қасиет!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Ауылдық жер",
    icon: <TbMountain />,
    description: "Бұл қасиет ауылдық жерлерде!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Таңғажайып бассейндер",
    icon: <TbPool />,
    description: "Бұл қасиет әдемі бассейнге ие!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Аралдар",
    icon: <GiIsland />,
    description: "Бұл қасиет аралда орналасқан!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Көлдің жағалау белдеуі",
    icon: <GiBoatFishing />,
    description: "Бұл қасиет көлге жақын орналасқан!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Ски-ин/аут",
    icon: <FaSkiing />,
    description: "Бұл қонақ үйде шаңғы тебу бар!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Қамалдар",
    icon: <GiCastle />,
    description: "Бұл мүлік ежелгі қамал!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Үңгірлер",
    icon: <GiCaveEntrance />,
    description: "Бұл мүлік қорқынышты үңгірде орналасқан!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Кемпинг",
    icon: <GiForestCamp />,
    description: "Бұл мүлік кемпингтік әрекеттерді ұсынады!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Арктика",
    icon: <BsSnow />,
    description: "Бұл мүлік арктикалық ортада орналасқан!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Шөл",
    icon: <GiCactus />,
    description: "Бұл мүлік шөл далада!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Сарайлар",
    icon: <GiBarn />,
    description: "Бұл мүлік сарайда!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Сән-салтанат",
    icon: <IoDiamond />,
    description: "Бұл мүлік жаңа және сәнді!",
  },
];

export const types = [
  {
    name: "Бүкіл жер",
    description: "Қонақтар өздеріне барлық орын алады",
    icon: <FaHouseUser />,
  },
  {
    name: "Бөлме(лер)",
    description:
      "Қонақтардың үйде жеке бөлмесі, сонымен қатар ортақ орындарға кіру мүмкіндігі бар",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Ортақ бөлме",
    description:
      "Қонақтар сізбен немесе басқалармен ортақ болуы мүмкін бөлмеде немесе жалпы аумақта ұйықтайды",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Ванна",
    icon: <PiBathtubFill />,
  },
  {
    name: "Жеке күтім өнімдері",
    icon: <FaPumpSoap />,
  },
  {
    name: "Ашық душ",
    icon: <FaShower />,
  },
  {
    name: "Кір жуғыш",
    icon: <BiSolidWasher />,
  },
  {
    name: "Кептіргіш",
    icon: <BiSolidDryer />,
  },
  {
    name: "Ілгіштер",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Үтік",
    icon: <TbIroning3 />,
  },
  {
    name: "Теледидар",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Арнайы жұмыс кеңістігі",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Ауаны кондициялау",
    icon: <BsSnow />,
  },
  {
    name: "Жылыту",
    icon: <GiHeatHaze />,
  },
  {
    name: "Қауіпсіздік камералары",
    icon: <GiCctvCamera />,
  },
  {
    name: "Өрт сөндіргіш",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Алғашқы жәрдем",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Пісіру жинағы",
    icon: <FaKitchenSet />,
  },
  {
    name: "Тоңазытқыш",
    icon: <BiSolidFridge />,
  },
  {
    name: "Микротолқынды пеш",
    icon: <MdMicrowave />,
  },
  {
    name: "Пеш",
    icon: <GiToaster />,
  },
  {
    name: "Барбекю грильі",
    icon: <GiBarbecue />,
  },
  {
    name: "Ашық асхана",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Жеке патио немесе балкон",
    icon: <MdBalcony />,
  },
  {
    name: "Лагерь оты",
    icon: <GiCampfire />,
  },
  {
    name: "Бақша",
    icon: <MdYard />,
  },
  {
    name: "Тегін тұрақ",
    icon: <AiFillCar />,
  },
  {
    name: "Өзін-өзі тіркеу",
    icon: <FaKey />
  },
  {
    name: "Үй жануарларына рұқсат етілген",
    icon: <MdPets />
  }
];
