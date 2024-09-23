import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/marketplace" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
          <li><Link href="/login" className="text-blue-600 hover:text-blue-800">Login</Link></li>
          <li><Link href="/register" className="text-blue-600 hover:text-blue-800">Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}