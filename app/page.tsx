"use client"

import Script from 'next/script';
import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Script
        src="https://strage-dev.meet-meet.com/static/script/trackAccess.js?mcvsn=11111"
        strategy="lazyOnload"
      />
      <Link href="/form">
        <Button>フォームへ進む</Button>
      </Link>
    </div>
  )
}

