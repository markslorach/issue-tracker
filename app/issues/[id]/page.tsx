import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";

type IssueDetailsPageProps = {
  params: {
    id: string;
  };
};

const IssueDetailsPage = async ({ params }: IssueDetailsPageProps) => {
  const { issue } = await getIssue(params.id);

  if (!issue) notFound();

  return <div>{issue.title}</div>;
};

export default IssueDetailsPage;
