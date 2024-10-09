"use server";
import { z } from "zod";
import { createIssueSchema } from "../api/issues/route";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

type Issue = z.infer<typeof createIssueSchema>;

export const createIssueAction = async (issue: Issue) => {
  const validation = createIssueSchema.safeParse(issue);

  if (!validation.success) {
    return { error: validation.error.errors };
  }

  try {
    await prisma.issue.create({
      data: issue,
    });

    redirect("/");
  } catch (error) {
    return { error: "Failed to create issue" };
  }
};
