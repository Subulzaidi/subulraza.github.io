import {
  FaCode,
  FaTools,
  FaRobot,
  FaAndroid,
  FaPencilRuler,
} from "react-icons/fa";

export const services = [
  {
    title: "Frontend Development",
    icon: <FaCode size={24} className="text-pink-400" />,
    description:
      "Responsive and accessible UIs with React, Next.js, Tailwind, and clean architecture. Built for performance and scalability.",
  },
  {
    title: "Cloud & Firebase Integration",
    icon: <FaTools size={24} className="text-purple-400" />,
    description:
      "Robust backend services using Firebase – Auth, Firestore, Storage, Functions, Hosting. Designed for real-time apps.",
  },
  {
    title: "AI & Automation",
    icon: <FaRobot size={24} className="text-blue-400" />,
    description:
      "Building smart systems and automating workflows using AI tools, ML APIs, and cloud deployment – CloudNOOE 🚀.",
  },
  {
    title: "Android Development",
    icon: <FaAndroid size={24} className="text-green-400" />,
    description:
      "Cross-platform Android apps with React Native – optimized for smooth performance, minimal UI bugs and fast delivery.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler size={24} className="text-yellow-400" />,
    description:
      "Designing wireframes, prototypes, and seamless user experiences with Figma – UX-first and visually clean.",
  },
];
