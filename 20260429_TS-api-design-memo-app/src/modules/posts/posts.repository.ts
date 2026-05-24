import { CreatePostData, Post, PublishPostData } from "./posts.model"
import { ErrorResponse, PostResponse } from "./posts.types"


// インメモリDB
const db: Post[] = [];


export const createPostRecord = async (data: CreatePostData): Promise<PostResponse> => {
  const item = {
    id: crypto.randomUUID(),
    ...data,
  }
  db.push(item)
  return item
}

export const findPostById = async (id: string): Promise<Post | null> => {
  return db.find(p => p.id === id) ?? null;
};

export const updatePost = async (
  id: string,
  patch: Partial<Post>
): Promise<Post | null> => {
  const index = db.findIndex(p => p.id === id);

  if (index === -1) return null;

  const updated = { ...db[index], ...patch };
  db[index] = updated;

  return updated;
};

export const getAllPosts = async () => {
  return db
}
