import { NextResponse } from 'next/server';
import { UserRegister, UserRegisterRes } from '@/models/register.models';

export async function POST(request: Request) {
    if (request.method === 'POST') {
        const body: UserRegister = await request.json();

        const requiredFields = [
            'username', 'lastname', 'city', 'district', 'nationality',
            'id_card', 'province', 'telephone', 'password', 'village'
        ];

        let isValid = true;

        // Check for undefined or null values in the body
        for (const field of requiredFields) {
            if (body[field as keyof UserRegister] === undefined || body[field as keyof UserRegister] === null) {
                isValid = false;
                break;
            }
        }

        const mapUser = {
            username: body.username,
            lastname: body.lastname,
            city: body.city,
            district: body.district,
            nationality: body.nationality,
            id_card: body.id_card,
            province: body.province,
            telephone: body.telephone,
            password: body.password,
            village: body.village
        };

        if (isValid) {
            const response: UserRegisterRes = {
                resultCode: 200,
                resultDescription: 'Register successful'
            };
            return NextResponse.json({ response, data: mapUser }, { status: 200 });
        } else {
            const response: UserRegisterRes = {
                resultCode: 401,
                resultDescription: 'Invalid credentials'
            };
            return NextResponse.json(response, { status: 401 });
        }

    } else {
        const response: UserRegisterRes = {
            resultCode: 405,
            resultDescription: 'Method not allowed'
        };
        return NextResponse.json(response, { status: 405 });
    }
}