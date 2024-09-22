import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Profile() {
  const { id } = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    // In a real app, you would fetch the profile data from an API
    // For now, we'll use mock data
    const mockProfile = {
      id: id,
      name: "John Doe",
      university: "Yale",
      major: "Computer Science",
      essay: "My journey in tech has been an exciting adventure...",
      resume: "4 years of experience in software development..."
    }
    setProfile(mockProfile)
  }, [id])

  if (!profile) {
    return <div>Loading...</div>
  }

  const handlePurchase = () => {
    router.push(`/purchase/${id}`)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{profile.name}'s Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-2"><strong>University:</strong> {profile.university}</p>
        <p className="text-lg mb-4"><strong>Major:</strong> {profile.major}</p>
        <h2 className="text-2xl font-semibold mb-2">Admission Essay</h2>
        <p className="mb-4">{profile.essay}</p>
        <h2 className="text-2xl font-semibold mb-2">Resume Highlights</h2>
        <p className="mb-4">{profile.resume}</p>
        <Button onClick={handlePurchase}>Purchase Full Profile</Button>
      </div>
    </div>
  )
}