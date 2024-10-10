import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import delay from "delay";
import DeleteInvoiceButton from "./DeleteInvoiceButton";

type IssueDetailsPageProps = {
  params: {
    id: string;
  };
};

const IssueDetailsPage = async ({ params }: IssueDetailsPageProps) => {
  const { issue } = await getIssue(params.id);
  //   await delay(1000);

  if (!issue) notFound();

  return (
    <div className="grid md:grid-cols-5 gap-5">
      <div className="md:col-span-4">
        <IssueDetails issue={issue} />
      </div>
      <div className="flex flex-col md:col-span-1 space-y-3">
        <EditIssueButton issueId={issue.id} />
        <DeleteInvoiceButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailsPage;
