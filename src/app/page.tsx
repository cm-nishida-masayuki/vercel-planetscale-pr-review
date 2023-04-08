import React from "react";
import { prisma } from "./database";
import { Post } from "@prisma/client";
import PostForm from "./components/postForm";

const getPosts = async (): Promise<Post[]> => {
  return prisma.post.findMany();
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="p-4 flex flex-col">
      <div className="w-fit">
        <h2 className="text-xl font-bold">投稿</h2>
        <PostForm />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">投稿一覧</h2>
        <table>
          <thead>
            <tr>
              <th className="border p-2">名前</th>
              <th className="border p-2">タイトル</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="border p-2">{post.author}</td>
                <td className="border p-2">{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
