import { Request, Response } from "express";
import { createPost, publishPost } from "./posts.service";
import { PublishRequestParams } from "./posts.types";


export const createPostHandler = async (req: Request, res: Response) => {
  const result = await createPost(req.body)
  res.status(201).json(result)
}


export const publishPostHandler = async (
  req: Request<PublishRequestParams>,
  res: Response,
) : Promise<void>=> {
  try {
    const result = await publishPost(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    if (error instanceof Error && error.message === "POST_NOT_FOUND") {
      res.status(404).json({
        code: "POST_NOT_FOUND",
        message: "記事が見つかりません",
      })
      return
    }

    if (error instanceof Error && error.message === "ALREADY_PUBLISHED") {
      res.status(409).json({
        code: "ALREADY_PUBLISHED",
        message: "すでに公開済みです",
      })
      return
    }

    res.status(500).json({
      code: "FAILED_TO_PUBLISH",
      message: "公開に失敗しました",
    })
  }
}
