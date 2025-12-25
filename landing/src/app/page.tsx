export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          {/* Main Heading */}
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">FuckLanguages</span>
            <span className="block text-blue-600 dark:text-blue-400">
              is best application
            </span>
            <span className="block">for learning spanish</span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl">
            We focus on understanding words in context with{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              listening audio
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              reading
            </span>
          </p>

          {/* Feature Cards */}
          <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 text-4xl">🎧</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Listen in Context
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hear words used naturally in real sentences
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 text-4xl">📖</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Read with Understanding
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how words work together in context
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Natural Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Master Spanish the way it&apos;s actually spoken
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
