"use client"

import Script from 'next/script';
import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
    // クッキーの値を取得する関数
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  }

  const mcvsnValue = getCookie('mcvsn');

  return (
    <div>
      <Script
        src="https://strage-dev.meet-meet.com/static/script/trackAccess.js"
        strategy="lazyOnload"
      />
      <p className="text-xl fixed top-1/3 left-1/2 transform -translate-x-1/2">【Cookie】mcvsn: {mcvsnValue}</p>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Link href="/form">
          <Button>フォームへ進む</Button>
        </Link>
      </div>
    </div>
  )
}

