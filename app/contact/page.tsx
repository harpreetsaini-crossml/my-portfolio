'use client'

import { useState } from 'react'
import Layout from '../components/Layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ email: '', username: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Layout>
      <div className="space-y-4 text-gray-600 max-w-xl mx-auto">
        <p className="text-lg italic font-semibold flex items-center gap-2">
          <Mail size={25} color="blue"/> Contact Me
        </p>
        {submitted ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Thank you for your message!</h2>
            <p className="mb-2">Email: {formData.email}</p>
            <p className="mb-2">Username: {formData.username}</p>
            <p className="mb-2">Message: {formData.message}</p>
            <Button onClick={() => setSubmitted(false)}>Send another message</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </div>
    </Layout>
  )
}

