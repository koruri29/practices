import { createPostRecord } from "./posts.repository";
import { CreatePostRequest } from "./posts.types";


export const createPost = async (input: CreatePostRequest) => {
  const now = new Date().toISOString()

  const post = await createPostRecord({
    title: input.title,
    content: input.content,
    status: "draft",
    createdAt: now,
    publishedAt: null,
  })

  return post
}
