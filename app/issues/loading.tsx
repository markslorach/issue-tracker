import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import IssuesActions from "./IssuesActions";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <div>
      <IssuesActions />
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Issue</TableHead>
            <TableHead className="hidden md:table-cell w-1/3">Status</TableHead>
            <TableHead className="hidden md:table-cell w-1/3">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue}>
              <TableCell>
                <Skeleton className="h-4 w-32" />
                <div className="block md:hidden mt-2">
                  <Skeleton className="h-4 w-32" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-4 w-32" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingIssuesPage;
