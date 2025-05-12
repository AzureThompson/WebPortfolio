import { prisma } from "@/lib/prisma";
import { timeStamp } from "console";
import { startOfMonth, endOfMonth, subMonths } from "date-fns";

export async function GET() {
    const now = new Date();

    // Total visits
    const totalVisits = await prisma.visitorLog.count();

    // Last 12 months
    const monthlyVisits: { month: string; count: number }[] = [];

    for (let i = 6; i >= 0; i--) {
        const date = subMonths(now, i);
        const start = startOfMonth(date);
        const end = endOfMonth(date);

        const count = await prisma.VisitorLog.count({
            where: {
                timestamp: {
                    gte: start,
                    lte: end,
                },
            },
        });

        const label = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}`;
        monthlyVisits.push({ month: label, count });
    }

    return Response.json({ totalVisits, monthlyVisits });
}