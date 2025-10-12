import { Router } from "express";
import type { Note } from "../types/note.js";


const router = Router()


// 仮データ
let notes: Note[] = [
  { id: 1, content: 'first memo' },
  { id: 2, content: 'Express is fun' },
]

router.get('/', (req, res) => {
  res.json(notes)
})


export default router
