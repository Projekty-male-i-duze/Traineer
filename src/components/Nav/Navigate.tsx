import {
  ClipboardList,
  Dumbbell,
  MessageCircle,
  TrendingUp,
  User,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function Navigate() {
  const navItems = [
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
      label: "Wiadomości",
      to: "/Messages",
      icon: MessageCircle,
    },
    {
      label: "Profil",
      to: "/Profile",
      icon: User,
    },
  ];

  return (
    <ul>
      {navItems.map(({ label, to, icon }) => {
        return (
          <li key={to}>
            <NavItem to={to} icon={icon} label={label} />
          </li>
        );
      })}
    </ul>
  );
}
