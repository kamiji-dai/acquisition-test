import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Link href="/form">
        <Button>フォームへ進む</Button>
      </Link>
    </div>
  )
}

