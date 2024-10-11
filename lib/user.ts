import prisma from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const getUser = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return;
  }

  const email = clerkUser.emailAddresses[0].emailAddress;
  const clerkUserId = clerkUser.id;

  try {
    const user = await prisma.user.upsert({
      where: {
        clerkUserId,
      },
      update: {
        email,
      },
      create: {
        clerkUserId,
        email,
      },
    });

    return { user };
  } catch (error) {
    console.log(error)
  }
};
