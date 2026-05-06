const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/user.png",
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: "/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "/rocket.png",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative p-8 md:p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
            >
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white text-xs font-bold flex items-center justify-center">
                {step.id}
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f5f3ff] rounded-full flex items-center justify-center mb-6 md:mb-8">
                <img src={step.icon} alt={step.title} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;