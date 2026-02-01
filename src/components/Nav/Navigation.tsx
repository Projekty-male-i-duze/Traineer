import { NavItem } from "./NavItem";
import { navItems } from "../../constants/navigation";
import { BellDot, Settings } from "lucide-react";

type PropsNav = {
  variant: "mobile" | "desktop";
};

export function Navigation({ variant }: PropsNav) {
  if (variant === "mobile") {
    return (
      <nav className="fixed right-0 bottom-0 left-0 z-50 m-1 rounded-2xl border border-white/20 bg-(--main-color) backdrop-blur">
        <ul className="mx-auto grid max-w-7xl grid-cols-5 py-2">
          {navItems.map(({ label, to, icon }) => (
            <li key={to} className="flex justify-center">
              <NavItem to={to} label={label} icon={icon} />
            </li>
          ))}
        </ul>
      </nav>
    );
  } else if (variant === "desktop") {
    return (
      <nav className="flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
        <div className="py-6 text-center text-2xl transition-colors hover:text-(--hover-color)">
          <p>Traineer</p>
        </div>
        <ul className="mt-6 flex flex-col gap-3">
          {navItems.map(({ label, to, icon }) => (
            <li key={to}>
              <NavItem to={to} label={label} icon={icon} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-end items-center mt-auto">
          <BellDot className="cursor-pointer h-8 w-8 mb-10 transition-all hover:text-(--hover-color) hover:scale-115" />
          <Settings className="cursor-pointer h-8 w-8 mb-10 transition-all hover:text-(--hover-color) hover:scale-115" />
        </div>
      </nav>
    );
  }
}
