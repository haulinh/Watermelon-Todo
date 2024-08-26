import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Ellipsis } from "lucide-react";

type Props = {
  name: string;
  completed: boolean;
  id: string;
};

export const Todo = ({ id, name, completed }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Checkbox id={id} />
        <label className="cursor-pointer" htmlFor={id}>
          {name}
        </label>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Do</DropdownMenuItem>
          <DropdownMenuItem>Schedule</DropdownMenuItem>
          <DropdownMenuItem>Delegate</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
