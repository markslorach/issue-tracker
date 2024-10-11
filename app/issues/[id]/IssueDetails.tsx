"use client";
import IssueStatusBadge from "@/app/issues/_components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import { Issue } from "@prisma/client";
import { useOptimistic } from "react";
import ReactMarkdown from "react-markdown";
import StatusSelect from "./StatusSelect";
import { set } from "zod";

type IssueDetailsProps = {
  issue: Issue;
  userId: string;
};

const IssueDetails = ({ issue, userId }: IssueDetailsProps) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{issue.title}</h1>
        {userId && <StatusSelect issueId={issue.id} />}
      </div>

      <div className="flex space-x-3 mt-3 mb-10">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="p-4 prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
