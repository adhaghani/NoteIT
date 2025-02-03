import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div>
      <Skeleton className="h-8 w-1/4" />
    </div>
  );
};

export default loading;
