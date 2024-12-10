import { NextResponse } from 'next/server';
import { CustomerLoginReq, CustomerLoginRes } from './customer.model';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_KEY } from '@/src/utils/constants';

const SECRET_KEY = '@userCloud';

export async function POST(request: Request) {
    if (request.method === 'POST') {
        const body: CustomerLoginReq = await request.json();
        const { username, password } = body;

        const payload = { username, password };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });

        const mapUser = {
            username: 'anouluck',
            password: 'anouluck',
        };

        if (username === mapUser.username && password === mapUser.password) {
            const data: CustomerLoginRes = {
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
            const response: CustomerLoginRes = {
                resultCode: 401,
                resultDescription: 'Invalid credentials'
            };
            return NextResponse.json(response, { status: 401 });
        }

    } else {
        const response: CustomerLoginRes = {
            resultCode: 405,
            resultDescription: 'Method not allowed'
        };
        return NextResponse.json(response, { status: 405 });
    }
}