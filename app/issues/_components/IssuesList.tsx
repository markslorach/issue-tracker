import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IssueStatusBadge from "./IssueStatusBadge";
import prisma from "@/lib/db";

const IssuesList = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      {issues && issues.length > 0 ? (
        <div className="border rounded-md max-w-5xl">
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
                    <Link
                      href={`/issues/${issue.id}`}
                      className="text-blue-500 hover:text-blue-500/80 transition-colors underline"
                    >
                      {issue.title}
                    </Link>
                    <div className="md:hidden mt-2">
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
    </>
  );
};

export default IssuesList;
