'use client'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { todoUpdater } from 'utils/swrFuncs'
import { TodoType } from 'types/todo'
import { Box, Button, TextField } from '@mui/material'

const Todo = () => {
  const { data, error } = useSWR<TodoType[]>('/api/todo')

  return (
    <Box>
      <TodoInput />
      {data?.map((item) => <div key={item.id}>{item.title}</div>) ||
        'No Todo Data'}
    </Box>
  )
}

const TodoInput = () => {
  const { trigger, isMutating } = useSWRMutation('/api/todo', todoUpdater)
  const [newTodo, setNewTodo] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTodo(e.target.value)
  }
  const submitTodo = async () => {
    try {
      await trigger({ title: newTodo })
      setNewTodo('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField id="new-todo" value={newTodo} onChange={handleChange} />
      <Button disabled={isMutating} onClick={submitTodo}>
        Submit
      </Button>
    </Box>
  )
}

export default Todo
