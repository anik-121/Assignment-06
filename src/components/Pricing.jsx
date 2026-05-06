import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      subtitle: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 border transition-all duration-300 ${
                plan.isPopular 
                ? "bg-[#8b2cf5] border-[#8b2cf5] text-white shadow-xl scale-105 z-10" 
                : "bg-white border-slate-100 text-slate-900 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fffaeb] text-[#b54708] text-xs font-bold px-4 py-1 rounded-full border border-[#fedf89]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.isPopular ? "text-purple-100" : "text-slate-500"} text-sm`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`${plan.isPopular ? "text-purple-100" : "text-slate-400"} text-lg`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-white" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.isPopular
                    ? "bg-white text-[#8b2cf5] hover:bg-purple-50"
                    : "bg-[#8b2cf5] text-white hover:bg-[#7a25d9]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;