import { Badge } from "@/components/ui/badge";
import { Status } from "@prisma/client";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "purple" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "purple" },
  COMPLETED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge variant={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
