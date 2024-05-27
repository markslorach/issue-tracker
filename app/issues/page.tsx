import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssuesActions from "./IssuesActions";

import Link from "next/link";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <IssuesActions />
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Issue</TableHead>
            <TableHead className="hidden md:table-cell w-1/3">Status</TableHead>
            <TableHead className="hidden md:table-cell w-1/3">
              Created
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <Link href={`/issues/${issue.id}`} className="link">{issue.title}</Link>
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
  );
};

export const dynamic = "force-dynamic"

export default IssuesPage;
