import Link from "next/link";
import { getIssues } from "@/lib/issues";
import { Button } from "@/components/ui/button";
import delay from "delay";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssuesActions from "./IssuesActions";

const IssuesPage = async () => {
  const { issues, error } = await getIssues();
  await delay(1000);

  return (
    <main>
      <IssuesActions />

      {issues && issues.length > 0 ? (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Issue</TableHead>
                <TableHead className="hidden md:table-cell w-1/3">
                  Status
                </TableHead>
                <TableHead className="hidden md:table-cell w-1/3">
                  Created
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues?.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell>
                    <Link href={`/issues/${issue.id}`}>
                      {issue.title}
                    </Link>
                    <div className="block md:hidden mt-2">
                      <IssueStatusBadge status={issue.status} />
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <IssueStatusBadge status={issue.status} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {issue.createdAt.toDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p>No issues found.</p>
      )}
    </main>
  );
};

export default IssuesPage;
