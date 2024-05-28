import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Skeleton className="h-9" />
      <Skeleton className="h-96" />
    </div>
  );
};

export default IssueFormSkeleton;
