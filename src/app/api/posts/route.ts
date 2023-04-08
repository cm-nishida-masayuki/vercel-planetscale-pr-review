import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (post: Post) => {
  await prisma.post.create({ data: post });
};

export async function POST(request: Request) {
  const post = await request.json();
  await createPost(post);
  return new Response("Hello, Next.js!");
}
