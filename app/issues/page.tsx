import IssuesActions from "../components/IssuesActions";
import IssuesList from "../components/IssuesList";
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
