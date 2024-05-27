import { Button } from "@/components/ui/button"
import { FilePenLine } from "lucide-react"
import Link from "next/link"

const EditIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
    <Button><FilePenLine className="h-4 w-4 mr-2"/>Edit Issue</Button>
    </Link>
  )
}

export default EditIssueButton