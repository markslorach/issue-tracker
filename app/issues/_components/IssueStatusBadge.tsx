import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

type IssueStatusBadgeProps = {
  status: string;
};

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <Badge
      className={cn({
        "p-1 px-2.5 cursor-default rounded-md": true,
        "bg-red-500/30 text-red-500": status === "Open",
        "bg-green-500/30 text-green-500": status === "Closed",
        "bg-purple-500/30 text-purple-500": status === "In Progress",
      })}
    >
      {status}
    </Badge>
  );
};

export default IssueStatusBadge;
