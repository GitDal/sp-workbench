import { HomeRegular } from "@fluentui/react-icons";
import { IconButton } from "./IconButton";

export function AppBar() {
  return (
    <div className="w-12 bg-[#f4f4f4] print:hidden">
      <IconButton
        className="hover:bg-slate-300"
        icon={<HomeRegular className="text-black h-[20px] w-[20px]" />}
      />
    </div>
  );
}
