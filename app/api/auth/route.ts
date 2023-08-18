import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const inputData: { userName: string, password: string } = await req.json();
    let errorResponse: typeof inputData = { userName: '', password: '' };
    if (inputData.userName !== "admin") {
        errorResponse.userName = "username is not correct";
    }
    if (inputData.password !== '1234') {
        errorResponse.password = "password is not correct";
    }
    if (errorResponse.userName !== "" || errorResponse.password !== "") {
        return NextResponse.json({ msg: "Login Failed", ...errorResponse });
    }

    return NextResponse.json({ msg: "Login Success", token: "1234" });
}