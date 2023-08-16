'use client'
import { useEffect, useRef, useState } from 'react'

interface TodoType {
  id: number
  title: string
}
const todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  return <div>todo</div>
}

export default todo
