import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import httpClient from "@/src/utils/httpClient";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
    request: NextRequest,
    context: {
        params: {
            route: string;
        };
    }
): Promise<any> {
    const route = context.params.route;
    if (route === "signout") {
        return signout(request);
    }
    return NextResponse.json({ route });
}


// POST
export async function POST(
    request: NextRequest,
    context: {
        params: {
            route: string;
        };
    }
): Promise<any> {
    const route = context.params.route;
    const body = await request.json();
    if (route === "signin") {
        return signin(body);
    }
}

async function signin(body: {
    emp_code: string;
    otp: string;
}): Promise<any> {
    try {
        // console.log('body', body);
        const response = await httpClient.post(`/otp/validate`, body);
        const { token } = response.data;
        cookies().set(ACCESS_TOKEN_KEY, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
        });

        return NextResponse.json({ data: response.data, message: "ok" });
    } catch (error: any) {
        return NextResponse.json({ message: "error" });
    }
}

function signout(request: NextRequest) {
    const cookieStore = cookies();
    cookieStore.delete(ACCESS_TOKEN_KEY);
    return NextResponse.json({ message: "ok" });
}