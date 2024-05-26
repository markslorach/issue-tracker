import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

const IssueDetailPage = async ({params}: {params: {id: string}}) => {

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)},
    })

    if (!issue) notFound()

  return (
    <div>
        <h1>{issue.title}</h1>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssueDetailPage