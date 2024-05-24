import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new"><Button>New Issue</Button></Link>
    </div>
  );
};

export default IssuesPage;