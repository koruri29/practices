import express from 'express'
import cors from "cors";
import notesRouter from './routes/notes.ts'


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/notes', notesRouter)


const PORT = 3000
app.listen(PORT, ()=> {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
