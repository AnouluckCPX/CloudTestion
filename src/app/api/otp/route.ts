import { NextResponse } from 'next/server';
import { OTPRes, OTPReq } from './otp.models';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_KEY } from '@/src/utils/constants';

const SECRET_KEY = '@userCloud';

export async function POST(request: Request) {
    if (request.method === 'POST') {
        const body: OTPReq = await request.json();
        const { username, password } = body;

        const payload = { username };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });

        const mapUser = {
            username: 'luck',
            password: 12345,
        };

        if (username === mapUser.username && password === mapUser.password) {
            const data: OTPRes = {
                resultCode: 200,
                resultDescription: 'Login successful',
                token: token,
                data: {
                    username: 'Anouluck',
                    lastname: 'CHANPHENGXAY',
                    telephone: '2055514496'
                }
            };
            const response = NextResponse.json(data, { status: 200 });
            response.cookies.set(ACCESS_TOKEN_KEY, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                path: '/information',
            });
            return response;
        } else {
            const response: OTPRes = {
                resultCode: 401,
                resultDescription: 'Invalid credentials'
            };
            return NextResponse.json(response, { status: 401 });
        }

    } else {
        const response: OTPRes = {
            resultCode: 405,
            resultDescription: 'Method not allowed'
        };
        return NextResponse.json(response, { status: 405 });
    }
}