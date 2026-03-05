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
      to: "/training",
      icon: Dumbbell,
    },
    {
      label: "Plan",
      to: "/plan",
      icon: ClipboardList,
    },
    {
      label: "Postępy",
      to: "/progress",
      icon: TrendingUp,
    },
    {
      label: "Czat",
      to: "/messages",
      icon: MessageCircle,
    },
    {
      label: "Profil",
      to: "/profile",
      icon: User,
    },
  ];