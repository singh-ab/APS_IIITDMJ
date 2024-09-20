"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Forms = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('https://forms.gle/zx9KBwpZjsxb9Ku39') // Replace with the URL you want to redirect to
  }, [router])

  return null
}

export default Forms
