import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteInvoiceButton from "./DeleteInvoiceButton";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/lib/db";

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

  return (
    <div className="grid md:grid-cols-5 gap-5">
      <div className="md:col-span-4">
        <IssueDetails issue={issue} />
      </div>
      {userId && (
        <div className="flex flex-col md:col-span-1 space-y-3">
          <EditIssueButton issueId={issue.id} />
          <DeleteInvoiceButton issueId={issue.id} />
        </div>
      )}
    </div>
  );
};

export default IssueDetailsPage;
