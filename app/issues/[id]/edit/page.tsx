import { getIssue } from "@/lib/issues";
import IssueForm from "../../_components/IssueForm";
import { notFound } from "next/navigation";

type EditIssuePageProps = {
  params: {
    id: string;
  };
};

const EditIssuePage = async ({ params }: EditIssuePageProps) => {
  const { issue } = await getIssue(params.id);

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
