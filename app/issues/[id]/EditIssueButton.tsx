import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";

type EditIssueButtonProps = {
  issueId: string;
};

const EditIssueButton = ({ issueId }: EditIssueButtonProps) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button>
        <SquarePen className="w-4 h-4 mr-2" />
        Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueButton;
