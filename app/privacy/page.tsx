import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            0to15000
          </Link>
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Welcome to 0to15000 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 0to15000.com (the &quot;Site&quot;) and use our services related to X (formerly Twitter) growth strategies and tutorials.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Personal Information You Provide</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">We may collect personal information that you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Register for an account or subscribe to our services</li>
              <li>Contact us via email or contact forms</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys, promotions, or contests</li>
              <li>Post comments or content on our Site</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">This information may include:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Billing and payment information (when applicable)</li>
              <li>Professional information (company name, job title)</li>
              <li>Social media handles (particularly X/Twitter username)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Information Automatically Collected</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">When you access our Site, we automatically collect certain information about your device and usage, including:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Device information (browser type, operating system, device type)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Referring website addresses</li>
              <li>Search terms used to reach our Site</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use cookies, web beacons, and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, updates, and security alerts</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send marketing and promotional communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Improve our website, products, and services</li>
              <li>Personalize your experience on our Site</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Service Providers</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Business Transfers</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Legal Requirements</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.4 Consent</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may share your information with your consent or at your direction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When we no longer need to retain your personal information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Access and Portability</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the right to request access to the personal information we hold about you and receive a copy in a portable format.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Correction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the right to request that we correct any inaccurate or incomplete personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Deletion</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the right to request that we delete your personal information, subject to certain exceptions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.4 Opt-Out</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in those communications or by contacting us directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.5 Do Not Sell</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. California Privacy Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>The right to know what personal information we collect, use, disclose, and sell</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt-out of the sale of personal information (though we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you are accessing our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries. By using our Site, you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Third-Party Links</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Site may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Updates to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>0to15000</strong><br />
                Email: privacy@0to15000.com<br />
                Website: https://0to15000.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}