export default function Features() {
  const features = [
    {
      icon: '📈',
      title: 'Data-Driven Growth',
      description: 'Learn to analyze your metrics and optimize your content strategy based on real performance data.'
    },
    {
      icon: '🎯',
      title: 'Targeted Engagement',
      description: 'Master the art of meaningful interactions that convert followers into loyal community members.'
    },
    {
      icon: '📝',
      title: 'Content That Converts',
      description: 'Create compelling posts that resonate with your audience and drive real business results.'
    },
    {
      icon: '🔄',
      title: 'Automation Strategies',
      description: 'Save time with smart automation while maintaining authentic engagement with your audience.'
    },
    {
      icon: '💰',
      title: 'Monetization Methods',
      description: 'Turn your growing following into sustainable revenue streams for your business.'
    },
    {
      icon: '🚀',
      title: 'Rapid Scaling',
      description: 'Accelerate your growth with proven tactics that help you reach milestones faster.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive tutorials and strategies designed to take you from zero to 15,000 followers systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}