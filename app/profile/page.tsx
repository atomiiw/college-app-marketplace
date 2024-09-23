'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const profileData = {
  name: "John Doe",
  university: "Yale",
  major: "Computer Science",
  essay: "My journey in tech has been an exciting adventure. From my first 'Hello World' program to developing complex algorithms, every step has been a learning experience. I'm particularly interested in artificial intelligence and its potential to solve real-world problems. Throughout my academic career, I've been involved in various projects that have honed my skills in machine learning, data analysis, and software engineering.",
  resume: "4 years of experience in software development, including internships at leading tech companies. Proficient in Python, Java, and C++. Developed several open-source projects with over 1000 stars on GitHub. Key achievements include leading a team in developing a machine learning model for predictive maintenance and contributing to popular open-source libraries."
}

export default function Profile() {
  const router = useRouter()
  const [showFullEssay, setShowFullEssay] = useState(false)
  const [showFullResume, setShowFullResume] = useState(false)

  const handlePurchase = () => {
    router.push('/purchase')
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{profileData.name}&apos;s Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">University</p>
              <p>{profileData.university}</p>
            </div>
            <div>
              <p className="font-semibold">Major</p>
              <p>{profileData.major}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Admission Essay</h2>
            <p className="mb-2">
              {showFullEssay ? profileData.essay : `${profileData.essay.slice(0, 150)}...`}
            </p>
            <Button 
              variant="link" 
              onClick={() => setShowFullEssay(!showFullEssay)}
              className="p-0 h-auto font-semibold"
            >
              {showFullEssay ? 'Show Less' : 'Read More'}
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Resume Highlights</h2>
            <p className="mb-2">
              {showFullResume ? profileData.resume : `${profileData.resume.slice(0, 150)}...`}
            </p>
            <Button 
              variant="link" 
              onClick={() => setShowFullResume(!showFullResume)}
              className="p-0 h-auto font-semibold"
            >
              {showFullResume ? 'Show Less' : 'Read More'}
            </Button>
          </div>
          <Button onClick={handlePurchase} className="w-full">Purchase Full Profile</Button>
        </CardContent>
      </Card>
    </div>
  )
}