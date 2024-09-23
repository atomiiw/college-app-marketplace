'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const mockProfiles = [
  { id: '1', name: "John Doe", university: "Yale", major: "Computer Science", essay: "My journey in tech has been an exciting adventure..." },
  { id: '2', name: "Jane Smith", university: "Harvard", major: "Economics", essay: "The global economy fascinates me..." },
  { id: '3', name: "Alex Johnson", university: "MIT", major: "Physics", essay: "Exploring the mysteries of the universe..." },
]

export default function Marketplace() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">College App Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile) => (
          <Card key={profile.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{profile.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">University: {profile.university}</p>
                <p className="text-sm text-gray-600">Major: {profile.major}</p>
              </div>
              <p className="text-sm text-gray-800 line-clamp-3">{profile.essay}</p>
              <Button asChild className="w-full">
                <Link href="/profile">View Full Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}