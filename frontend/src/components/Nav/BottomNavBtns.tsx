import { BellDot, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export function BottomNavBtns() {
  return (
    <div className="mt-auto flex flex-col items-center justify-end">
      <BellDot className="mb-10 h-8 w-8 cursor-pointer transition-all hover:scale-115 hover:text-(--hover-color)" />
      <NavLink to="/settings">
        {({ isActive }) => (
          <Settings
            className={`h-8 w-8 cursor-pointer transition-all hover:scale-110 hover:text-(--hover-color) ${
              isActive ? "text-(--hover-color)" : "text-white"
            }`}
          />
        )}
      </NavLink>
    </div>
  );
}
