import { NextResponse } from 'next/server';
import { UserLoginReq, UserLoginRes } from './user.models';

export async function POST(request: Request) {
    if (request.method === 'POST') {
        const body: UserLoginReq = await request.json();
        const { username } = body;
        // console.log(username);
        const mapUser = {
            username: 'luck',
        };

        if (username === mapUser.username) {
            const response: UserLoginRes = {
                resultCode: 200,
                resultDescription: 'Send password successful'
            };
            return NextResponse.json(response, { status: 200 });
        } else {
            const response: UserLoginRes = {
                resultCode: 401,
                resultDescription: 'Invalid credentials'
            };
            return NextResponse.json(response, { status: 401 });
        }

    } else {
        const response: UserLoginRes = {
            resultCode: 405,
            resultDescription: 'Method not allowed'
        };
        return NextResponse.json(response, { status: 405 });
    }
}

// export async function GET(request: Request) {
//     return NextResponse.json({ message: "This is a GET request" }, { status: 200 });
// }