import { z } from 'zod'


export const api = {
  get,
  post,
};


async function get<T>(url: string, schema: z.ZodSchema<T>): Promise<T> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error (`HTTP ${res.status}`)
  }

  const data = await res.json();
  return schema.parse(data)
}

async function post<T>(
  url: string,
  body: unknown,
  schema: z.ZodSchema<T>
): Promise<T> {
  const res = await fetch(url,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error (`HTTP ${res.status}`)
  const json = await res.json()
  return schema.parse(json)
}
