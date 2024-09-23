// app/register/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const [userType, setUserType] = useState('contributor')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Registration Successful",
      description: `You have successfully registered as a ${userType}.`,
    })
    // Redirect to the appropriate dashboard
    router.push(`/dashboard/${userType}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block mb-1 font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block mb-1 font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <Label className="block mb-2 font-medium">User Type</Label>
            <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="contributor" id="contributor" />
                <Label htmlFor="contributor" className="font-normal">
                  Content Contributor
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="purchaser" id="purchaser" />
                <Label htmlFor="purchaser" className="font-normal">
                  Content Purchaser
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}
