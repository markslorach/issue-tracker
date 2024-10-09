import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn("px-4 sm:px-8 max-w-screen-2xl mx-auto h-full", className)}
    >
      {children}
    </div>
  );
};

export default Container;
