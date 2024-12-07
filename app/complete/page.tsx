import Script from 'next/script';

export default function Complete() {
  return (
    <div>
      <Script
        // src="https://storage-dev.meet-meet.com/static/script/trackConversion.js?mud=100"
        src="https://acquisition-test-kamijis-project.s3.ap-northeast-1.amazonaws.com/trackConversion.js?mud=75"
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

