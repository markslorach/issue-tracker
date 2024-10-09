import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

type Issue = z.infer<typeof createIssueSchema>;

export async function POST(req: NextRequest) {
  const body: Issue = await req.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
