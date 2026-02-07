import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <button className="cursor-pointer transition-all hover:scale-110 hover:text-(--hover-color) lg:order-3 lg:flex lg:grow lg:justify-center">
      <Search className="mb-1 h-6 w-6 md:mb-1.5 md:h-8 md:w-8 lg:h-8 lg:w-8" />
    </button>
  );
}
