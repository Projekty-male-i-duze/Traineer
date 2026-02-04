import { AppTitle } from "./AppTitle";
import { MailBtn } from "./MailBtn";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

export function TopBar() {
  return (
    <div className="flex justify-around items-center">
      <MailBtn />
      <AppTitle />
      <SearchInput />
      <UserMenu />
    </div>
  );
}
