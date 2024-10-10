import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";
import delay from "delay";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

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

export default IssueDetailsPage;
