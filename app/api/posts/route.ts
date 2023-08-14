import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

    const data = await res.json()

    return NextResponse.json({ data })
  } else {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    const data = await res.json()

    return NextResponse.json({ data })
  }
}