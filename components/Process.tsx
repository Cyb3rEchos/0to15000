export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Foundation',
      description: 'Set up your profile, bio, and branding for maximum impact',
      milestone: '0-100 followers'
    },
    {
      number: '02',
      title: 'Content Strategy',
      description: 'Develop your unique voice and content pillars that resonate',
      milestone: '100-1,000 followers'
    },
    {
      number: '03',
      title: 'Engagement Engine',
      description: 'Build systematic engagement processes that create community',
      milestone: '1,000-5,000 followers'
    },
    {
      number: '04',
      title: 'Scale & Optimize',
      description: 'Leverage data and automation to accelerate growth',
      milestone: '5,000-15,000 followers'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Roadmap to 15K
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven step-by-step process that takes you from zero to hero on X.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center lg:text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {step.milestone}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  {index % 2 === 1 && (
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {step.milestone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}