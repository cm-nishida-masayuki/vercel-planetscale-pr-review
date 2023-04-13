"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function PostForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, title }),
    });

    setAuthor("");
    setTitle("");

    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label htmlFor="" className="inline-block w-20">
          名前
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          className="border ml-1 p-1"
          required
        />
      </div>
      <div>
        <label htmlFor="" className="inline-block w-20">
          タイトルイ
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border ml-1 p-1"
          required
        />
      </div>
      <div>
        <input
          type="submit"
          className="border m-3 w-full py-1 rounded-md bg-slate-500 text-white"
        />
      </div>
    </form>
  );
}
