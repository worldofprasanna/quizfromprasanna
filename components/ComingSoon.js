import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div class="flex flex-col items-center justify-center px-1 h-screen">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p class="text-gray-600 text-lg mb-8">
        We are in Beta mode. This page will be built very soon.
      </p>
      <div class="flex space-x-4">
        <Link
          href="/"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ComingSoon
