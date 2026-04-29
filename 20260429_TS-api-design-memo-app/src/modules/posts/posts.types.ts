export type PostResponse = {
  id: string
  title: string
  content: string
  status: "draft" | "published"
  publishedAt: string | null
  createdAt: string
};

export type GetPostsResponse = {
  items: PostResponse[]     // 今ページのデータ
  totalCount: number        // 全体件数
  page: number              // 現在ページ
  pageSize: number          // 1ページあたり件数
};

export type CreatePostRequest = {
  title: string
  content: string
};

export type UpdatePostRequest = {
  title?: string
  content?: string
};

export type PublishPostResponse = PostResponse;

export type ErrorResponse = {
  code: "ALREADY_PUBLISHED" | "POST_NOT_FOUND";
  message: string;
};
