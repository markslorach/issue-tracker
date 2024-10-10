import prisma from "./db";

export const getIssues = async () => {
  try {
    const issues = await prisma.issue.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { issues };
  } catch (error) {
    return { error: "Error fetching issues" };
  }
};

export const getIssue = async (id: string) => {
  try {
    const issue = await prisma.issue.findUnique({
      where: {
        id,
      },
    });
    return { issue };
  } catch (error) {
    return { error: "Error fetching issue" };
  }
};
