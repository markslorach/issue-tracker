import { Button } from "@/components/ui/button"
import { CircleX } from "lucide-react"

const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button variant={"destructive"}><CircleX className="w-4 h-4 mr-2"/>Delete Issue</Button>
  )
}

export default DeleteIssueButton