import { Skeleton } from "@/components/ui/Skeleton";

const LoadingNewIssueSkeleton = () => {
  return (
    <div className="max-w-xl space-y-6">
      <div>
        <Skeleton className="h-5 w-20 mb-2" />
        <Skeleton className="h-10" />
      </div>

      <div>
        <Skeleton className="h-5 w-20 mb-2" />
        <Skeleton className="h-96" />
      </div>
    </div>
  );
};

export default LoadingNewIssueSkeleton;
