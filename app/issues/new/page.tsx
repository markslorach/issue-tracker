import LoadingNewIssueSkeleton from "@/app/components/Skeletons/LoadingNewIssueSkeleton";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingNewIssueSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
