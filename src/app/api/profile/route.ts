import { NextResponse } from 'next/server';
import { ProfileResponse, UserProfile } from '@/models/profile.models';

export async function GET(request: Request) {
    try {
        const userProfile: UserProfile = {
            username: 'Anouluck',
            lastname: 'CHANPHENGXAY',
            telephone: '2055514496',
            email: 'anouluck@example.com',
        };

        const data: ProfileResponse = {
            resultCode: 200,
            resultDescription: 'Profile fetched successfully',
            profile: userProfile
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 });
    }
}
