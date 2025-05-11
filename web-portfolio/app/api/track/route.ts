// app/api/track/route.ts

import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const ip = body.ip || "unknown";
        const userAgent = body.userAgent || "unknown";

        await prisma.visitorLog.create({
            data: {
                ip,
                userAgent,
            },
        });

        return new Response(JSON.stringify({ status: "logged" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }catch (error) {
        console.error("Failed to log visit: ", error);
        return new Response(
            JSON.stringify({ status: "error", message: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

