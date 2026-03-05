import { BellDot, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export function BottomNavBtns() {
  return (
    <div className="mt-auto flex flex-col items-center justify-end">
      <BellDot className="mb-10 h-8 w-8 cursor-pointer transition-all hover:scale-115 hover:text-(--hover-color)" />
      <NavLink to="/settings">
        <Settings className="mb-10 h-8 w-8 cursor-pointer transition-all hover:scale-115 hover:text-(--hover-color)" />
      </NavLink>
    </div>
  );
}
