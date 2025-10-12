import { useEffect, useState } from "react"


interface Note {
  id: number
  content: string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(console.error)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>メモ一覧</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
