
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-700">1Card</div>
          <nav className="hidden md:flex gap-4">
            <a href="#variants" className="font-medium py-1 border-b-2 border-transparent hover:border-blue-700 transition-colors">Cards</a>
            <a href="#privileges" className="font-medium py-1 border-b-2 border-transparent hover:border-blue-700 transition-colors">Perks</a>
            <a href="#apply-flow" className="font-medium py-1 border-b-2 border-transparent hover:border-blue-700 transition-colors">Apply</a>
            <a href="#rates" className="font-medium py-1 border-b-2 border-transparent hover:border-blue-700 transition-colors">Rates</a>
            <a href="#faq" className="font-medium py-1 border-b-2 border-transparent hover:border-blue-700 transition-colors">FAQ</a>
          </nav>
          <a className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-colors" href="#apply">Apply Now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap items-center gap-8 py-16">
          <div className="flex-1 min-w-80">
            <h1 className="text-5xl font-bold mb-4">1Card®</h1>
            <p className="text-lg mb-8 max-w-lg">
              Earn <strong>3× miles on flights</strong>, <strong>2× on hotels & dining</strong>, and collect a <strong>50,000-mile intro bonus</strong>.
            </p>
            <a className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-colors inline-block" href="#apply">Apply Now</a>
          </div>
          <div className="relative flex-shrink-0 w-96">
            <img 
              src="/lovable-uploads/45366fdd-5daf-47d3-9120-8db579466594.png" 
              alt="1Card Blue Rewards" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-5 -mt-14 relative z-10">
        <div className="bg-white shadow-lg rounded-2xl p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center py-4">
              <h3 className="text-blue-700 text-3xl font-bold mb-1">50k</h3>
              <span className="text-sm text-gray-600">Intro Miles</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-blue-700 text-3xl font-bold mb-1">3×</h3>
              <span className="text-sm text-gray-600">Flight Miles</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-blue-700 text-3xl font-bold mb-1">10</h3>
              <span className="text-sm text-gray-600">Lounge Visits</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-blue-700 text-3xl font-bold mb-1">$0</h3>
              <span className="text-sm text-gray-600">Foreign Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <section id="variants" className="py-16 max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Pick Your Perfect Fit</h2>
        <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
          
          {/* Blue Rewards */}
          <article className="flex-shrink-0 w-72 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform snap-start">
            <div className="relative p-7 bg-gradient-to-br from-blue-600 to-blue-700 text-black rounded-t-2xl border-b border-white/25">
              <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-semibold">Most Popular</span>
              <img 
                src="/lovable-uploads/45366fdd-5daf-47d3-9120-8db579466594.png" 
                alt="Blue Rewards Card" 
                className="w-32 h-20 object-contain mb-5"
              />
              <h5 className="text-lg font-semibold text-black">Blue Rewards</h5>
            </div>
            <h4 className="text-xl font-semibold mx-6 mt-6 mb-2">1Card® Blue Rewards</h4>
            <p className="text-gray-600 mx-6 mb-5">Double cash back on everyday spend.</p>
            <ul className="mx-6 mb-6 space-y-2">
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">5% on quarterly categories</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">1% everywhere else</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">No annual fee, ever</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">$200 signup bonus</li>
            </ul>
            <div className="mt-auto mx-6 pb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs mb-3">
                <div><span className="text-gray-600 font-medium mr-1">APR:</span><strong>18.99–28.99%</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Fee:</span><strong>$0</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Credit:</span><strong>Good-Excellent</strong></div>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition-colors">Apply Now</button>
            </div>
            <label className="flex items-center text-xs text-gray-600 mx-6 mb-3 gap-2">
              <input type="checkbox" className="w-4 h-4" /> Compare
            </label>
          </article>

          {/* Platinum Cashback */}
          <article className="flex-shrink-0 w-72 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform snap-start">
            <div className="relative p-7 bg-gradient-to-br from-gray-600 to-gray-800 text-black rounded-t-2xl border-b border-white/25">
              <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-semibold">Premium Choice</span>
              <img 
                src="/lovable-uploads/bfe85254-cc25-4511-a3d4-f9c29ac6c25a.png" 
                alt="Platinum Cashback Card" 
                className="w-32 h-20 object-contain mb-5"
              />
              <h5 className="text-lg font-semibold text-black">Platinum Cashback</h5>
            </div>
            <h4 className="text-xl font-semibold mx-6 mt-6 mb-2">1Card® Platinum Cashback</h4>
            <p className="text-gray-600 mx-6 mb-5">2% cash back + premium travel.</p>
            <ul className="mx-6 mb-6 space-y-2">
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">2% on every purchase</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Travel insurance included</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">No foreign fees</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">$300 intro bonus</li>
            </ul>
            <div className="mt-auto mx-6 pb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs mb-3">
                <div><span className="text-gray-600 font-medium mr-1">APR:</span><strong>16.99–26.99%</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Fee:</span><strong>$95</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Credit:</span><strong>Excellent</strong></div>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition-colors">Apply Now</button>
            </div>
            <label className="flex items-center text-xs text-gray-600 mx-6 mb-3 gap-2">
              <input type="checkbox" className="w-4 h-4" /> Compare
            </label>
          </article>

          {/* Student Flex */}
          <article className="flex-shrink-0 w-72 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform snap-start">
            <div className="relative p-7 bg-gradient-to-br from-green-600 to-green-800 text-black rounded-t-2xl border-b border-white/25">
              <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-semibold">Student Favorite</span>
              <img 
                src="/lovable-uploads/7b6ac3ff-10aa-441e-bebd-938af18c5425.png" 
                alt="Student Flex Card" 
                className="w-32 h-20 object-contain mb-5"
              />
              <h5 className="text-lg font-semibold text-black">Student Flex</h5>
            </div>
            <h4 className="text-xl font-semibold mx-6 mt-6 mb-2">1Card® Student Flex</h4>
            <p className="text-gray-600 mx-6 mb-5">Build credit and earn rewards.</p>
            <ul className="mx-6 mb-6 space-y-2">
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">1.5% cash back everywhere</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">No annual fee for students</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Credit tools included</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">$100 first-purchase bonus</li>
            </ul>
            <div className="mt-auto mx-6 pb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs mb-3">
                <div><span className="text-gray-600 font-medium mr-1">APR:</span><strong>19.99–29.99%</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Fee:</span><strong>$0</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Credit:</span><strong>Fair-Good</strong></div>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition-colors">Apply Now</button>
            </div>
            <label className="flex items-center text-xs text-gray-600 mx-6 mb-3 gap-2">
              <input type="checkbox" className="w-4 h-4" /> Compare
            </label>
          </article>

          {/* Travel Elite */}
          <article className="flex-shrink-0 w-72 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform snap-start">
            <div className="relative p-7 bg-gradient-to-br from-orange-600 to-orange-800 text-black rounded-t-2xl border-b border-white/25">
              <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-semibold">Travel Perks</span>
              <img 
                src="/lovable-uploads/c400ce76-d862-43d0-b72e-c82041761415.png" 
                alt="Travel Elite Card" 
                className="w-32 h-20 object-contain mb-5"
              />
              <h5 className="text-lg font-semibold text-black">Travel Elite</h5>
            </div>
            <h4 className="text-xl font-semibold mx-6 mt-6 mb-2">1Card® Travel Elite</h4>
            <p className="text-gray-600 mx-6 mb-5">Premium points & lounge access.</p>
            <ul className="mx-6 mb-6 space-y-2">
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">3× points on travel & dining</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Airport lounges included</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">No foreign fees</li>
              <li className="text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">60,000-pt intro bonus</li>
            </ul>
            <div className="mt-auto mx-6 pb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs mb-3">
                <div><span className="text-gray-600 font-medium mr-1">APR:</span><strong>17.99–27.99%</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Fee:</span><strong>$195</strong></div>
                <div><span className="text-gray-600 font-medium mr-1">Credit:</span><strong>Good-Excellent</strong></div>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition-colors">Apply Now</button>
            </div>
            <label className="flex items-center text-xs text-gray-600 mx-6 mb-3 gap-2">
              <input type="checkbox" className="w-4 h-4" /> Compare
            </label>
          </article>

        </div>
      </section>

      {/* Perks & Privileges */}
      <section id="privileges" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">Perks & Privileges</h2>
          <div className="space-y-6">
            <div className="flex gap-5">
              <i className="fas fa-percent text-2xl text-blue-700 mt-1"></i>
              <div>
                <h5 className="text-lg font-semibold mb-1">Cashback Rewards</h5>
                <p className="text-gray-600">Earn rewards on every purchase with competitive rates.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <i className="fas fa-shield-alt text-2xl text-blue-700 mt-1"></i>
              <div>
                <h5 className="text-lg font-semibold mb-1">Fraud Protection</h5>
                <p className="text-gray-600">Advanced security features to keep your accounts safe.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <i className="fas fa-mobile-alt text-2xl text-blue-700 mt-1"></i>
              <div>
                <h5 className="text-lg font-semibold mb-1">Mobile Banking</h5>
                <p className="text-gray-600">Manage your account anywhere with our mobile app.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <i className="fas fa-headset text-2xl text-blue-700 mt-1"></i>
              <div>
                <h5 className="text-lg font-semibold mb-1">24/7 Customer Support</h5>
                <p className="text-gray-600">Get help whenever you need it with round-the-clock support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast 3-Step Application */}
      <section id="apply-flow" className="py-16 max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Fast 3-Step Application</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full font-semibold mb-3">1</span>
            <h4 className="text-xl font-semibold mb-2">Apply Online</h4>
            <p className="text-gray-600">Secure 5-minute form; most get a decision instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full font-semibold mb-3">2</span>
            <h4 className="text-xl font-semibold mb-2">Instant 1Card Number</h4>
            <p className="text-gray-600">Add your new card to Apple Pay® or Google Pay™ right away.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full font-semibold mb-3">3</span>
            <h4 className="text-xl font-semibold mb-2">Start Earning</h4>
            <p className="text-gray-600">Begin racking up miles on flights, dining, and more.</p>
          </div>
        </div>
      </section>

      {/* Rates & Fees */}
      <section id="rates" className="py-16 max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Rates & Fees</h2>
        <div className="max-w-3xl mx-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Annual Fee</th>
                <td className="p-4">$95 (waived year 1)</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Intro APR</th>
                <td className="p-4">0% on purchases & transfers for 12 months†</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Variable APR</th>
                <td className="p-4">18.24–27.24% thereafter‡</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Balance Transfer</th>
                <td className="p-4">$5 or 5% each</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Cash Advance</th>
                <td className="p-4">$10 or 5% each</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-blue-50 p-4 text-left font-semibold">Foreign Fees</th>
                <td className="p-4"><strong>None</strong></td>
              </div>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">What Members Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="mb-4">"Family trip to Hawaii on points—lounge access was the cherry on top!"</p>
              <strong>— Emily R.</strong>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="mb-4">"Blue Rewards paid for itself after two months—love the cash back."</p>
              <strong>— Michael S.</strong>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="mb-4">"Zero FX fees saved me $120 in Europe, and miles covered flights."</p>
              <strong>— Javier M.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Start Earning Today */}
      <section id="apply" className="py-16 max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-6">Start Earning Today</h2>
        <p className="text-center mb-9 text-lg max-w-2xl mx-auto">
          Apply now, get a decision in seconds, and your digital card number minutes later.
        </p>
        <div className="text-center">
          <a className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-block" href="#">Apply Now</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold list-none">How do I earn the 50,000-mile bonus?</summary>
              <p className="px-5 pb-5 text-gray-600">Spend $3,000 within 90 days of account opening.</p>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold list-none">Do miles expire?</summary>
              <p className="px-5 pb-5 text-gray-600">No—miles never expire while your account remains open and in good standing.</p>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold list-none">Recommended credit score?</summary>
              <p className="px-5 pb-5 text-gray-600">A FICO® score of 700+ gives the best approval odds.</p>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold list-none">Lounge access details?</summary>
              <p className="px-5 pb-5 text-gray-600">You get 10 complimentary Priority Pass™ visits per year; additional visits cost $35.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-12">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="text-sm">
          © 2025 1Card Bank, N.A. Member FDIC. Demo only. †Intro APR applies to purchases & transfers made within 60 days. ‡APR varies with the Prime Rate.
        </p>
      </footer>
    </div>
  );
};

export default Index;
