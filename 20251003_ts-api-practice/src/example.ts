import { z } from 'zod'
import { api } from './apiClient.ts'

const TodoSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  completed: z.boolean(),
})
const TodosSchema = z.array(TodoSchema)

async function main() {
  // JSONPlaceholder (モック)
  const todos = await api.get('https://jsonplaceholder.typicode.com/todos', TodosSchema)
  console.log(todos[0]?.title)
}

main()
