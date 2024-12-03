import Script from 'next/script';

export default function Complete() {
  return (
    <div>
      <Script
        src="https://strage-dev.meet-meet.com/static/script/trackConversion.js?mud=100"
        strategy="lazyOnload"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-gray-800">申し込みが完了しました。</p>
        </div>
      </div>
    </div>
  )
}

