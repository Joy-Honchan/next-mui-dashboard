import { NextResponse } from "next/server";
// import axios from "axios";

// interface ResponseType {
//     data: { token: string }
//     message: string
// }

export async function POST(req: Request) {
    // const inputData: { userName: string, password: string } = await req.json();
    // const url = process.env.NEXT_PUBLIC_API_URL
    // if(url){
    //     const res = await axios.post(url, {email:inputData.userName, password: inputData.password});
    // }

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