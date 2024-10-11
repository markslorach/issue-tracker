import { getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import LoadingNewIssueSkeleton from "@/app/components/Skeletons/LoadingNewIssueSkeleton";

const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingNewIssueSkeleton />,
});

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
