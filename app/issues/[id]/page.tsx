import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <IssueDetails issue={issue} />
      <EditIssueButton issueId={issue.id} />
    </div>
  );
};

export default IssueDetailPage;
