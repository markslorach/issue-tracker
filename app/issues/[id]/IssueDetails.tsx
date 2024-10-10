import IssueStatusBadge from "@/app/issues/_components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import { Issue } from "@prisma/client";
import ReactMarkdown from "react-markdown";

type IssueDetailsProps = {
  issue: Issue;
};

const IssueDetails = ({ issue }: IssueDetailsProps) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{issue.title}</h1>
      <div className="flex space-x-3 mt-3 mb-10">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="p-4 prose max-w-3xl">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
