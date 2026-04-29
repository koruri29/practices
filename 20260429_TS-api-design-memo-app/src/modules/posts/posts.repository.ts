import { CreatePostData } from "./posts.model"

export const createPostRecord = async (data: CreatePostData) => {
  return ({
    id: "generated-id",
    ...data,
  })
}
