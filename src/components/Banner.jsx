import bannerImg from '/banner.png';

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 gap-10">

        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex w-fit items-center bg-indigo-100 rounded-full px-3 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
            </span>
            <p className="bg-gradient-to-r from-[#4932f5] to-[#9413f7] bg-clip-text text-transparent font-medium text-sm px-2">
              New: AI-Powered Tools Available
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#101727] font-bold leading-tight">
            Supercharge Your <br className="hidden sm:block" /> Digital Workflow
          </h1>

          <p className="text-[#627382] text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold px-6 py-3 rounded-full text-sm w-full sm:w-auto">
              Explore Products
            </button>
            <button className="bg-gradient-to-r from-[#4932f5] to-[#9413f7] bg-clip-text text-transparent flex items-center justify-center gap-2 border border-gray-300 hover:border-purple-400 font-semibold px-6 py-3 rounded-full text-sm w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full">
          <img src={bannerImg} alt="Banner" className="w-full max-w-lg mx-auto" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#4932f5] to-[#9413f7] py-10 w-screen relative left-1/2 -translate-x-1/2">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="text-sm mt-1 text-purple-200">Active Users</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-purple-400" />
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-sm mt-1 text-purple-200">Premium Tools</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-purple-400" />
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="text-sm mt-1 text-purple-200">Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;