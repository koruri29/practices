export type Post = {
  id: string
  title: string
  content: string
  status: "draft" | "published"
  publishedAt: string | null
  createdAt: string
}

export type CreatePostData = Omit<Post, "id">

export type PublishPostData = {
  id: string
  publishedAt: string
}
