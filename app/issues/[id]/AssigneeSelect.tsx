"use client";
import { updateIssueAction } from "@/app/actions/issueActions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Issue, User } from "@prisma/client";
import { toast } from "sonner";

type AssigneeSelectProps = {
  users: User[];
  issue: Issue;
};

const AssigneeSelect = ({ users, issue }: AssigneeSelectProps) => {
  const handleAssignIssue = async (value: string) => {
    const updatedIssue = {
      ...issue,
      assignedToUserId: value === "unassigned" ? null : value,
    };

    const result = await updateIssueAction(issue.id, updatedIssue);

    if (result?.error) {
      toast.error("Issue assigning user");
    }
  };

  return (
    <Select
      onValueChange={handleAssignIssue}
      defaultValue={issue.assignedToUserId || "unassigned"}
    >
      <SelectTrigger>
        <SelectValue placeholder="Assignee..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="unassigned">Unassigned</SelectItem>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.clerkUserId}>
              {user.email}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AssigneeSelect;
