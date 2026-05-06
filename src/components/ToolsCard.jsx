import { use } from "react";

const toolsPromise = fetch('/tools.json').then(res => res.json());

const ToolsCard = () => {
    const tools = use(toolsPromise);

    return (
        <div className="grid grid-cols-3 justify-center gap-6">
            {tools.map(tool => (
                
                <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{tool.tag}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{tool.name}</h2>
      
      
       
    </div>
    <p>{tool.description}</p>
    <span className="text-xl">${tool.price}/mo</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        

                {tool.features.map((feature, index) => (
    <li key={index}>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{feature}</span>
    </li>
  ))}

      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold px-6 py-3 rounded-full text-sm">Buy Now</button>
    </div>
  </div>
</div>
            ))}
        </div>
    );
};

export default ToolsCard;