import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const todos = [
    {
        id: 1, title: "Buy milk"
    }
]

export async function GET(req: NextApiRequest) {
    return NextResponse.json(todos)
}