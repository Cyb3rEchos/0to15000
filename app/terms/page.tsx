import Link from 'next/link'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and 0to15000 (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of the 0to15000.com website and any related services, content, and products (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you do not have permission to access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              0to15000 provides educational content, tutorials, strategies, and resources designed to help individuals and businesses grow their presence on X (formerly Twitter) from 0 to 15,000 followers. Our Service includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Growth strategy tutorials and guides</li>
              <li>Content creation best practices</li>
              <li>Engagement techniques and methodologies</li>
              <li>Analytics and performance tracking guidance</li>
              <li>Community building strategies</li>
              <li>Monetization methods and business development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Account Creation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              To access certain features of our Service, you may be required to create an account. You must provide accurate, complete, and current information during the registration process and update such information to keep it accurate, complete, and current.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Account Security</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You are responsible for safeguarding the password and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Not share your account credentials with others</li>
              <li>Not use another user&apos;s account without permission</li>
              <li>Maintain the security of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Account Termination</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to suspend or terminate your account at any time for any reason, including violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">You agree not to use our Service to:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Engage in any form of harassment, abuse, or harmful behavior</li>
              <li>Distribute spam, malware, or any malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Engage in any activity that disrupts or interferes with our Service</li>
              <li>Use automated systems or bots without our express written permission</li>
              <li>Scrape or harvest data from our Service</li>
              <li>Impersonate another person or entity</li>
              <li>Sell or transfer your account to another party</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate X/Twitter&apos;s Terms of Service while implementing our strategies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Our Content</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All content on our Service, including but not limited to text, graphics, logos, images, audio, video, tutorials, and software, is the property of 0to15000 or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our content for commercial purposes without a license</li>
              <li>Remove any proprietary notices from our content</li>
              <li>Create derivative works based on our content</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 User Content</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By posting content to our Service, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with our Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 Feedback</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Any feedback, suggestions, or ideas you provide about our Service becomes our property and may be used without compensation to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Pricing</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you purchase any paid services or products, you agree to pay all applicable fees as described at the time of purchase. All prices are in USD unless otherwise stated.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Payment Processing</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Payment processing is handled by third-party payment processors. By providing payment information, you authorize us to charge the applicable fees to your payment method.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 Refund Policy</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We offer a 30-day money-back guarantee for our paid products. Refund requests must be made within 30 days of purchase and will be processed at our discretion. We reserve the right to deny refunds for users who violate these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.4 Subscription Terms</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For subscription services, you will be billed automatically at the beginning of each billing cycle. You may cancel your subscription at any time, with cancellation taking effect at the end of the current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 No Guarantee of Results</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              While our Service provides strategies and guidance for growing on X, we do not guarantee specific results or follower counts. Success depends on many factors outside our control, including your implementation, content quality, consistency, and platform changes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Educational Purpose</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Service is for educational and informational purposes only. It is not professional advice, and you should use your own judgment when implementing any strategies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Third-Party Platforms</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are not affiliated with X (Twitter) or any other social media platform. Changes to their policies or algorithms may affect the effectiveness of our strategies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.4 &quot;As Is&quot; Basis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              OUR SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, 0TO15000 AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Loss of followers or social media account issues</li>
              <li>Any damages resulting from your use or inability to use our Service</li>
              <li>Any damages resulting from errors, mistakes, or inaccuracies in our content</li>
              <li>Any damages resulting from unauthorized access to your account</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You agree to indemnify, defend, and hold harmless 0to15000 and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Your use of our Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your content posted to our Service</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Modifications to Service and Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.1 Service Modifications</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to modify, suspend, or discontinue our Service (or any part thereof) at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.2 Terms Modifications</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may revise these Terms at any time. The updated Terms will be effective upon posting. Your continued use of our Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your use of our Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.1 Informal Resolution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Before filing a claim, you agree to try to resolve any dispute informally by contacting us at legal@0to15000.com. We&apos;ll try to resolve the dispute informally by contacting you via email.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.2 Arbitration</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If we cannot resolve a dispute informally, any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association&apos;s rules. The arbitration shall be conducted in English and the arbitrator&apos;s decision shall be final and binding.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.3 Class Action Waiver</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You agree to resolve disputes with us on an individual basis and waive your right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the federal or state courts located in Delaware.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">14. Severability</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">15. Entire Agreement</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and 0to15000 regarding your use of our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">16. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>0to15000</strong><br />
                Email: legal@0to15000.com<br />
                Website: https://0to15000.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 font-semibold">
              By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}