import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold">Welcome, {session.user?.email}</h1>
      <p className="text-gray-400 mt-2">Your SaaS Dashboard is live</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3>Revenue</h3><p className="text-2xl font-bold mt-2">$12,450</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3>Users</h3><p className="text-2xl font-bold mt-2">1,284</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3>Plan</h3><p className="text-2xl font-bold mt-2 text-green-400">PRO ACTIVE</p>
        </div>
      </div>
    </div>
  )
}
