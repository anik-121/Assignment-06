import { use } from "react";

const toolsPromise = fetch('/tools.json').then(res => res.json());

const ToolsCard = ({ handleAddToCart, cart }) => {
    const tools = use(toolsPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 px-4">
            {tools.map(tool => {
                
                const isAlreadyInCart = cart.some(item => item.id === tool.id);

                return (
                    <div key={tool.id} className="card w-full max-w-sm bg-base-100 border border-gray-100 shadow-sm">
                        <div className="card-body">
                            <span className="badge badge-sm bg-orange-100 text-orange-600 border-none font-medium mb-2">
                                {tool.tag}
                            </span>
                            <h2 className="text-3xl font-bold">{tool.name}</h2>
                            <p className="text-gray-500 text-sm">{tool.description}</p>
                            <span className="text-xl font-semibold mt-2">${tool.price}/mo</span>
                            
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {tool.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <button 
                                    onClick={() => handleAddToCart(tool)}
                                    disabled={isAlreadyInCart}
                                    className={`btn btn-block font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 border-none ${
                                        isAlreadyInCart 
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                        : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90"
                                    }`}
                                >
                                    {isAlreadyInCart ? "Added to Cart" : "Buy Now"}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ToolsCard;