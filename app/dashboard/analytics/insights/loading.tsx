export default function Loading() {
  return null
}
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold">Deekle.io</Link>
        <Link href="/dashboard" className="text-sm hover:text-primary">Dashboard</Link>
        <Link href="/settings" className="text-sm hover:text-primary">Settings</Link>
      </div>
      <div>
        <Button variant="outline">Logout</Button>
      </div>
    </nav>
  )
}
