import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FilePenLine } from 'lucide-react';
import Link from "next/link";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-5">

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
    <div>
      <Link href={`/issues/${issue.id}/edit`}>
      <Button><FilePenLine className="h-4 w-4 mr-2"/>Edit Issue</Button>
      </Link>
    </div>
    </div>
  );
};

export default IssueDetailPage;
