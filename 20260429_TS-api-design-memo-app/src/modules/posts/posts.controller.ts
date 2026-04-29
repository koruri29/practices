import { Request, Response } from "express";
import { createPost } from "./posts.service";
import { Post } from "./posts.model";


const db: Post[] = [];


export const createPostHandler = async (req: Request, res: Response) => {
  const result = await createPost(req.body)
  res.status(201).json(result)
}
