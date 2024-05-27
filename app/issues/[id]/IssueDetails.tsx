import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import { Issue } from "@prisma/client";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{issue.title}</h1>
      <div className="flex space-x-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="px-3 py-6 prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
