import prisma from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const getUser = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return;
  }

  const email = clerkUser.emailAddresses[0].emailAddress;

  try {
    const user = await prisma.user.upsert({
      where: {
        clerkUserId: clerkUser.id,
      },
      update: {
        email,
      },
      create: {
        clerkUserId: clerkUser.id,
        email,
      },
    });

    return { user };
  } catch (error) {
    return { error: "An error occurred while fetching the user" };
  }
};
