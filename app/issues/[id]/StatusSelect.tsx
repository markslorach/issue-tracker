"use client";
import { updateIssueStatusAction } from "@/app/actions/issueActions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
type StatusSelectProps = {
  issueId: string;
  setOptimisticStatus: (status: string) => void;
};

const statuses = ["Open", "In Progress", "Closed"];
const StatusSelect = ({ issueId, setOptimisticStatus }: StatusSelectProps) => {
  const handleChangeStatus = async (status: string) => {
    setOptimisticStatus(status);
    const result = await updateIssueStatusAction(issueId, status);

    if (result?.error) {
      toast.error(result.error);
    }
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
