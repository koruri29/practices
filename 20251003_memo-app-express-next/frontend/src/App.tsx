import { useEffect, useState } from "react"


interface Note {
  id: number
  content: string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [newText, setNewText] = useState("")

  const API_URL = "http://localhost:3000/api/notes"

  // GET: メモ一覧取得
  const fetchNotes = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(console.error)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  // POST: メモ追加
  const addNote = () => {
    if (!newText.trim()) return
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newText }),
    })
      .then(res => res.json())
      .then(() => {
        setNewText('')
        fetchNotes()
      })
      .catch(console.error)
  }

  const deleteNote = (id: number) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => fetchNotes())
      .catch(console.error)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>メモアプリ</h1>

      {/* メモ追加フォーム */}
      <div>
        <input
          value={newText}
          onChange={e => setNewText(e.target.value)}
          placeholder="新しいメモ"
        />
        <button onClick={addNote}>
          追加
        </button>
      </div>

      {/* メモ一覧 */}
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.content}{' '}
            <button
              onClick={() => deleteNote(note.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
