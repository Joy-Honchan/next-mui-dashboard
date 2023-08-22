import { NextResponse } from "next/server";
import { TodoType } from "types/todo";

const todos: TodoType[] = [
    {
        id: 1, title: "Buy milk"
    }
]

export async function GET(req: Request) {
    return NextResponse.json(todos)
}

export async function POST(req: Request, res: Response) {
    const inputData: { title: string } = await req.json()
    if (!inputData.title) {
        return NextResponse.json({ error: "Title is required" });
    }
    const newId = Math.max(...todos.map(item => item.id)) + 1
    todos.push({ id: newId, ...inputData })
    return NextResponse.json("Update Succeed")
}