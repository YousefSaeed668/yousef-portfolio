import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { changeLang } from "./actions";

export default function LocaleSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="px-1 py-1">
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-4">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => await changeLang("en")}
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => await changeLang("ar")}
        >
          AR
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
