import { Post } from "./posts.model";
import { createPostRecord, findPostById, getAllPosts, updatePost } from "./posts.repository";
import { CreatePostRequest, ErrorResponse, GetPostsResponse, PostResponse, PublishPostResponse } from "./posts.types";


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

export const publishPost = async (id: string): Promise<PublishPostResponse> => {
  const post = await findPostById(id)

  if (!post) {
    throw new Error("POST_NOT_FOUND")
  }
  if (post.status === "published") {
    throw new Error("ALREADY_PUBLISHED")
  }

  const now = new Date().toISOString()

  const updated = await updatePost(id, {
    status: "published",
    publishedAt: now,
  })

  if (!updated) {
    throw new Error("FAILED_TO_PUBLISH")
  }

  return toPostResponse(updated)
}

const toPostResponse = (post: Post): PublishPostResponse => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    status: post.status,
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
  };
};


export const getPosts = async (): Promise<GetPostsResponse> => {
  const rawPosts = await getAllPosts()
  return toGetPostsResponse(rawPosts)
}

const toGetPostsResponse = (rawPosts: Post[]): GetPostsResponse => {
  const posts = rawPosts.map(rp => toPostResponse(rp))
  const count = posts.length
  return {
    items: posts,
    totalCount: count,
    page: 1,
    pageSize: count,
  }
}


export const getPostById = async (id: string): Promise<Post | null> => {
  return await findPostById(id)
}
