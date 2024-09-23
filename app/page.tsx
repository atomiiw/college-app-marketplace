import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to College App Marketplace</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Unlock quality college essays and admission profiles approved by prestigious universities, or contribute essays to earn money.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/register">Get Started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}