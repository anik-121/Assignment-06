import bannerImg from '/banner.png'

const Banner = () => {
    return (
      



    
        <div className='grid grid-cols-2 items-center'>

  {/* Left */}
  <div className="flex flex-col gap-4">

    
    <div className="inline-flex w-fit items-center bg-indigo-100 rounded-full px-3 py-1.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
      </span>
      <p className="bg-gradient-to-r from-[#4932f5] to-[#9413f7] bg-clip-text text-transparent font-medium text-sm px-2">
        New: AI-Powered Tools Available
      </p>
    </div>

    
    <h1 className="text-6xl text-[#101727] font-bold leading-tight">
      Supercharge Your <br /> Digital Workflow
    </h1>

    
    <p className="text-[#627382]">
      Access premium AI tools, design assets, templates, and productivity <br />
      software—all in one place. Start creating faster today. <br />
      Explore Products
    </p>

    
    <div className="flex items-center gap-4">
      <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa]  hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-sm">
        Explore Products
      </button>
      <button className="bg-gradient-to-r from-[#4932f5] to-[#9413f7] bg-clip-text text-transparent flex items-center gap-2 border border-gray-300 hover:border-purple-400  font-semibold px-6 py-3 rounded-full text-sm">
         Watch Demo
      </button>
    </div>

  </div>

  {/* Right */}
  <div className='py-30'>
    <img src={bannerImg} alt=""/>
  </div>

</div>

      
        
    



    );
};

export default Banner;