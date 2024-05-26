import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">{issue.title}</h1>
      <div className="flex space-x-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="p-3 prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
