"use server";
import { z } from "zod";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { issueSchema } from "../validationSchemas";

type Issue = z.infer<typeof issueSchema>;

export const createIssueAction = async (issue: Issue) => {
  const validation = issueSchema.safeParse(issue);

  if (!validation.success) {
    return { error: validation.error.format() };
  }

  try {
    await prisma.issue.create({
      data: issue,
    });

    revalidatePath("/issues");
  } catch (error) {
    return { error: "Failed to create issue" };
  }
};

export const updateIssueAction = async (id: string, issue: Issue) => {
  const validation = issueSchema.safeParse(issue);

  if (!validation.success) return { error: validation.error.format() };

  const foundIssue = await prisma.issue.findUnique({
    where: { id },
  });

  if (!foundIssue) return { error: "Issue not found" };

  try {
    await prisma.issue.update({
      where: { id },
      data: issue,
    });

    revalidatePath("/issues");
  } catch (error) {
    return { error: "Failed to update issue" };
  }
};

export const deleteIssueAction = async (id: string) => {
  const foundIssue = await prisma.issue.findUnique({
    where: { id },
  });

  if (!foundIssue) return { error: "Issue not found" };

  try {
    await prisma.issue.delete({
      where: { id },
    });

    revalidatePath("/issues");
  } catch (error) {
    return { error: "Failed to delete issue" };
  }
};