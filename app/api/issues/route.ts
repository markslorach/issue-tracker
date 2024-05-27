import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/app/validationSchemas";

export async function GET() {
  const issues = await prisma.issue.findMany();

  if (issues.length === 0) {
    return NextResponse.json({ error: "No issues found" }, { status: 404 });
  }

  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  // Create request body
  const body = await request.json();
  // Validate request body
  const validation = issueSchema.safeParse(body);
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
