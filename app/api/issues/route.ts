import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
  // Create request body
  const body = await request.json();
  // Validate request body
  const validation = createIssueSchema.safeParse(body);
  // If not validated return an error
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  // Create new issue
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  // Return the new issue
  return NextResponse.json(newIssue, { status: 201 });
}
