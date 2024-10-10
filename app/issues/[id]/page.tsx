import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";
import delay from "delay";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";

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
      <div>
        <Link href={`/issues/${issue.id}/edit`}>
          <Button>
            <SquarePen className="w-4 h-4 mr-2" />
            Edit Issue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IssueDetailsPage;
