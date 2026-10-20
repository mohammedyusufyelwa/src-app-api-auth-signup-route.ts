import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const prisma = new PrismaClient()
export async function GET() { return Response.json(await prisma.project.findMany()) }
export async function POST(req: Request) {
  const schema = z.object({ title: z.string().min(1), description: z.string(), ownerId: z.string() })
  const data = schema.parse(await req.json())
  return Response.json(await prisma.project.create({ data }))
}
