import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-4">
        <IssueDetails issue={issue} />
      </div>
      <div className="flex flex-col gap-2">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
