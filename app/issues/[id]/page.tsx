import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import delay from "delay";

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
    <div className="grid sm:grid-cols-2 gap-5">
      <IssueDetails issue={issue} />
      <EditIssueButton issueId={issue.id} />
    </div>
  );
};

export default IssueDetailsPage;
