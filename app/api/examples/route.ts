import { NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

interface DataType {
    id: string
    name: string
}

let DATA: DataType[] = [
    {
        id: '1',
        name: 'John'
    },
    {
        id: '2',
        name: 'Jane'
    }
]

export async function GET(req: NextApiRequest) {
    return NextResponse.json(DATA)
}

export async function POST(req: NextApiRequest) {
    const { body }: { body: DataType } = req;
    DATA.push(body);
    return NextResponse.json(DATA)
}