import { NextResponse } from 'next/server'
import { DataType } from 'types/example'


const DATA: DataType = {
    id: 'Server A',
    children: [{
        id: 'Server A-1',
        children: [{
            id: 'Server A-1-a'
        }, {
            id: 'Server A-1-b'
        }, {
            id: 'Server A-1-c'
        }, {
            id: 'Server A-1-d'
        }]
    }, {
        id: 'Server A-2',
        children: [{
            id: 'Server A-2-a'
        }, {
            id: 'Server A-2-b'
        }, {
            id: 'Server A-2-c'
        }]
    }, {
        id: 'Server A-3',
        children: [{
            id: 'Server A-3-a'
        }, {
            id: 'Server A-3-b'
        }]
    }]
}

export async function GET(req: Request) {
    return NextResponse.json(DATA)
}

// export async function POST(req: NextApiRequest) {
    

    
// }
