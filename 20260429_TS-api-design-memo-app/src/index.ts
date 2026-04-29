import express from "express";
import { createPostHandler, publishPostHandler } from "./modules/posts/posts.controller";

const app = express()

app.use(express.json())

app.post("/api/posts", createPostHandler)
app.post("/api/posts/:id/publish", publishPostHandler)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
