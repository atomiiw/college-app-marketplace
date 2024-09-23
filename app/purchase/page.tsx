'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const profileData = {
  name: "John Doe",
  university: "Yale",
  major: "Computer Science",
  price: 49.99
}

export default function Purchase() {
  const [isPurchasing, setIsPurchasing] = useState(false)

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault()
    setIsPurchasing(true)
    // Simulate purchase process
    setTimeout(() => {
      setIsPurchasing(false)
      alert("Purchase successful! (This is a mock purchase)")
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Purchase Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{profileData.name}&apos;s Profile</h2>
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
            <p className="text-xl font-bold mt-4">Price: ${profileData.price}</p>
          </div>
          <form onSubmit={handlePurchase} className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" required />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isPurchasing}>
              {isPurchasing ? 'Processing...' : 'Complete Purchase'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}