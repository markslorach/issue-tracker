"use server";
import { z } from "zod";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { patchIssueSchema, issueSchema } from "../validationSchemas";
import { auth } from "@clerk/nextjs/server";

type Issue = z.infer<typeof issueSchema>;
type PatchIssue = z.infer<typeof patchIssueSchema>;

export const createIssueAction = async (issue: Issue) => {
  const { userId } = auth();

  if (!userId) return { error: "Unauthorized" };

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

export const updateIssueAction = async (id: string, issue: PatchIssue) => {
  const { userId } = auth();

  if (!userId) return { error: "Unauthorized" };

  const validation = patchIssueSchema.safeParse(issue);

  if (!validation.success) return { error: validation.error.format() };

  if (issue.assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { clerkUserId: issue.assignedToUserId },
    });

    if (!user) return { error: "User not found" };
  }

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
  const { userId } = auth();

  if (!userId) return { error: "Unauthorized" };

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
