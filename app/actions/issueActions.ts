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
  } catch (error) {
    return { error: "Failed to create issue" };
  } finally {
    revalidatePath("/");
  }
};
