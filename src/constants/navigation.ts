import {
  ClipboardList,
  Dumbbell,
  MessageCircle,
  TrendingUp,
  User,
} from "lucide-react";

export const navItems = [
    {
      label: "Trening",
      to: "/Training",
      icon: Dumbbell,
    },
    {
      label: "Plan",
      to: "/Plan",
      icon: ClipboardList,
    },
    {
      label: "Postępy",
      to: "/Progress",
      icon: TrendingUp,
    },
    {
      label: "Czat",
      to: "/Messages",
      icon: MessageCircle,
    },
    {
      label: "Profil",
      to: "/Profile",
      icon: User,
    },
  ];