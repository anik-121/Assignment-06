import { useState, Suspense } from "react";
import ToolsCard from "./ToolsCard";
import toast, { Toaster } from "react-hot-toast";

const Tools = ({ cart, setCart, handleAddToCart }) => {
    const [activeTab, setActiveTab] = useState("products");

    
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining);
        toast.success("Removed from cart");
    };

    
    const baseBtn = "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300";
    const activeStyle = "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md";
    const inactiveStyle = "border border-black text-black bg-transparent hover:bg-gray-50";

    return (
        <div className="mt-32 mb-20">
            <Toaster position="top-center" />
            
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p className="text-base text-[#627382]">
                    Choose from our curated collection of premium digital products designed
                    <br /> to boost your productivity and creativity.
                </p>

               
                <div className="flex justify-center space-x-3">
                    <button 
                        onClick={() => setActiveTab("products")}
                        className={`${baseBtn} ${activeTab === "products" ? activeStyle : inactiveStyle}`}
                    >
                        Products
                    </button>
                    
                    <button 
                        onClick={() => setActiveTab("cart")}
                        className={`${baseBtn} ${activeTab === "cart" ? activeStyle : inactiveStyle}`}
                    >
                        Cart ({cart.length})
                    </button>
                </div>
            </div>

            <div className="mt-12">
                <Suspense fallback={<p className="text-center mt-10">Loading tools...</p>}>
                    {activeTab === "products" ? (
                        <ToolsCard cart={cart} handleAddToCart={handleAddToCart} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                            {cart.length > 0 ? (
                                cart.map((tool) => (
                                    <div key={tool.id} className="card w-full max-w-sm bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="card-body p-8">
                                            <span className="badge badge-sm bg-orange-100 text-orange-600 border-none font-medium mb-2">
                                                {tool.tag || 'Purchased'}
                                            </span>
                                            <h2 className="text-3xl font-bold">{tool.name}</h2>
                                            <p className="text-gray-500 text-sm my-2">{tool.description}</p>
                                            <span className="text-xl font-semibold text-[#4f39f6]">${tool.price}/mo</span>
                                            
                                            <div className="mt-6">
                                                <button 
                                                    onClick={() => handleRemoveFromCart(tool.id)}
                                                    className="btn btn-block bg-red-50 text-red-600 border border-red-100 hover:bg-red-600 hover:text-white transition-all rounded-xl font-bold"
                                                >
                                                    Remove from Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-2xl font-bold text-gray-300 italic">Your cart is feeling light...</p>
                                    <button 
                                        onClick={() => setActiveTab("products")}
                                        className="mt-4 text-[#4f39f6] font-semibold hover:underline"
                                    >
                                        Back to Products
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default Tools;