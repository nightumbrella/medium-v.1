import { NextResponse, NextRequest } from "next/server";
import prismaDb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";

export const POST = async (req: NextRequest) => {
  const { userId }: { userId: string | null } = auth();
  if (!userId) {
    throw new Error("User not login");
  }

  try {
    const newStory = await prismaDb.story.create({
      data: {
        authorId: userId,
      },
    });
    return NextResponse.json(newStory);
  } catch (error) {
    return NextResponse.error();
  }
};
