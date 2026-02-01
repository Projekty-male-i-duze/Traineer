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
    <NavLink
      to={to}
      className={({ isActive }) => {
        const base =
          "flex flex-col items-center rounded-xl p-2 transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 hover:text-(--hover-color) hover:scale-110";

        const active = isActive ? "text-(--hover-color)" : "";

        return [base, active].join(" ");
      }}
    >
      <Icon className="mb-1 h-6 w-6 md:h-8 md:w-8 md:mb-1.5 lg:h-8 lg:w-8 lg:mb-5 " />
      <span className="text-xs md:text-base lg:hidden">{label}</span>
    </NavLink>
  );
}
