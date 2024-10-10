"use server";
import { z } from "zod";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createIssueSchema } from "../validationSchemas";

type Issue = z.infer<typeof createIssueSchema>;

export const createIssueAction = async (issue: Issue) => {
  const validation = createIssueSchema.safeParse(issue);

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
  const validation = createIssueSchema.safeParse(issue);

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
