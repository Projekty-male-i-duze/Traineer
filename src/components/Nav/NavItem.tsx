import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type navLink = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export function NavItem({ label, to, icon }: navLink) {
  const Icon = icon;

  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "" : "")}>
      <Icon className="" />
      <span className="">{label}</span>
    </NavLink>
  );
}
