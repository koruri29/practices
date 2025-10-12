import { Router } from "express";
import type { Note } from "../types/note.ts";


const router = Router()


// 仮データ
let notes: Note[] = [
  { id: 1, content: 'first memo' },
  { id: 2, content: 'Express is fun' },
]

router.get('/', (req, res) => {
  res.json(notes)
})

router.post('/', (req, res) => {
  const { content } = req.body

  if (!content || typeof content !== "string") {
    return res.status(400).json({ error: "Invalid content" })
  }

  const newNote: Note = {
    id:Date.now(),
    content,
  }

  notes.push(newNote)
  res.status(201).json(newNote)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" })
  }

  const index = notes.findIndex(n => n.id ===id)

  if (index === -1) {
    return res.status(400).json({ error: "Note not found" })
  }

  notes.splice(index, 1)
  res.json({ message: "deleted" })
})


export default router
