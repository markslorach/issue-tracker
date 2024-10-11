import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteInvoiceButton from "./DeleteInvoiceButton";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/lib/db";
import AssigneeSelect from "./AssigneeSelect";

type IssueDetailsPageProps = {
  params: {
    id: string;
  };
};

const IssueDetailsPage = async ({ params }: IssueDetailsPageProps) => {
  const { userId } = auth();

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!issue) notFound();

  const users = await prisma.user.findMany();

  return (
    <div className="grid md:grid-cols-5 gap-5">
      <div className="md:col-span-4">
        <IssueDetails issue={issue} userId={userId} />
      </div>
      {userId && (
        <div className="flex flex-col md:col-span-1 space-y-3">
          <AssigneeSelect issue={issue} users={users} />
          <EditIssueButton issueId={issue.id} />
          <DeleteInvoiceButton issueId={issue.id} />
        </div>
      )}
    </div>
  );
};

export default IssueDetailsPage;
