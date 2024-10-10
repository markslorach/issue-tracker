import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/Skeleton";

const LoadingIssueDetailsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-9 w-28" />
      <div className="flex space-x-3 mt-3 mb-10">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Card className="px-4 py-8 max-w-3xl space-y-3">
        <Skeleton className="h-4 w-80" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-48" />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsSkeleton;
