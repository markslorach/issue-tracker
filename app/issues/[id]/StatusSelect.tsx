"use client";
import { updateIssueStatusAction } from "@/app/actions/issueActions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type StatusSelectProps = {
  issueId: string;
};

const statuses = ["Open", "In Progress", "Closed"];
const StatusSelect = ({ issueId }: StatusSelectProps) => {
  const handleChangeStatus = async (status: string) => {
    await updateIssueStatusAction(issueId, status);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Change Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {statuses.map((status) => (
          <DropdownMenuItem>
            <button onClick={() => handleChangeStatus(status)} key={status}>
              {status}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusSelect;
