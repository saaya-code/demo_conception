import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  home,
  appointement,
  history,
  calendar,
  diagflow,
} from "../assets";
export const CarInfo = [
  {
    id: "0",
    modele: "Polo",
    marque: "Volkswagen",
    annee: "2022",
    couleur: "Black",
    matricule: "1234",
    backgroundUrl: "./src/assets/Card/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    modele: "Golf",
    marque: "Volkswagen",
    annee: "2022",
    couleur: "Black",
    matricule: "1235",
    backgroundUrl: "./src/assets/Card/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    modele: "Tiguan",
    marque: "Volkswagen",
    annee: "2022",
    couleur: "Black",
    matricule: "1236",
    backgroundUrl: "./src/assets/Card/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    modele: "Passat",
    marque: "Volkswagen",
    annee: "2022",
    couleur: "Black",
    matricule: "1237",
    backgroundUrl: "./src/assets/Card/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
];

export const SideBarData = [
  {
    icon: home,
    heading: "Home",
  },
  {
    icon: appointement,
    heading: "Book Appointement",
  },
  { icon: history, heading: "History" },
  {
    icon: calendar,
    heading: "Calendar",
  },
  {
    icon: diagflow,
    heading: "Chatbot",
  },
];

const appointementData = [
  {
    id: "0",
    date: "2022-10-02",
    time: "10:00 AM",
    vehicule_matricule: "1234",
    workshop_address: "cherguia ",
    service: "Oil Change",
    status: "Pending",
  },
  {
    id: "1",
    date: "2022-10-02",
    time: "10:00 AM",
    vehicule_matricule: "1235",
    workshop_address: "cherguia ",
    service: "Oil Change",
    status: "Approved",
  },
];
export default appointementData;
