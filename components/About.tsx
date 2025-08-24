export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Ambitious Entrepreneurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              0to15000 is more than just a collection of tutorials—it&apos;s a comprehensive system designed to help entrepreneurs and business owners build a powerful presence on X (Twitter).
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Whether you&apos;re launching a startup, growing a personal brand, or scaling an existing business, our proven strategies will help you leverage X&apos;s unique ecosystem to drive real business results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Real-World Tested</h3>
                  <p className="text-gray-600 dark:text-gray-400">Every strategy has been tested and proven in the real world</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Constantly Updated</h3>
                  <p className="text-gray-600 dark:text-gray-400">Stay ahead with the latest platform changes and trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Business Focused</h3>
                  <p className="text-gray-600 dark:text-gray-400">Turn followers into customers and revenue</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why 15,000 Followers?</h3>
              <p className="mb-4">
                15,000 engaged followers is the sweet spot where your X presence becomes a powerful business asset:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Large enough for significant reach and influence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Small enough to maintain genuine engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Perfect size for converting to customers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Achievable within 90 days with dedication</span>
                </li>
              </ul>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">90 Days</div>
              <div className="text-sm text-gray-700">Average Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}