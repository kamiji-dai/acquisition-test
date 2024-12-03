"use client"

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link'
import Button from '@/components/Button'

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}

function useCookie(name: string) {
  const [cookieValue, setCookieValue] = useState<string | null>(null);

  useEffect(() => {
    // クッキーの値が変更されたら更新
    const checkCookie = () => {
      const newValue = getCookie(name);
      if (newValue !== cookieValue) {
        setCookieValue(newValue ?? null);
      }
    };

    checkCookie(); // 初期値を設定

    const intervalId = setInterval(checkCookie, 2000); // 2秒ごとにチェック
    return () => {
      // インターバルIDをクリア
      clearInterval(intervalId);
    };
  }, [name, cookieValue]);

  return cookieValue;
}

export default function Home() {
  const mcvsnValue = useCookie('mcvsn');
  
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

