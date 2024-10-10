import IssuesActions from "./_components/IssuesActions";
import IssuesList from "./_components/IssuesList";
import { Suspense } from "react";
import LoadingIssuesSkeleton from "../components/Skeletons/LoadingIssuesSkeleton";

const IssuesPage = () => {
  return (
    <main>
      <IssuesActions />
      <Suspense fallback={<LoadingIssuesSkeleton />}>
        <IssuesList />
      </Suspense>
    </main>
  );
};

export default IssuesPage;
