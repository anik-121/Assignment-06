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

    const baseBtn = "px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-semibold transition-all duration-300";
    const activeStyle = "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md";
    const inactiveStyle = "border border-black text-black bg-transparent hover:bg-gray-50";

    return (
        <div className="mt-16 md:mt-32 mb-16 md:mb-20">
            <Toaster position="top-center" />

            <div className="text-center space-y-4 md:space-y-6 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Premium Digital Tools</h1>
                <p className="text-sm md:text-base text-[#627382]">
                    Choose from our curated collection of premium digital products designed
                    <br className="hidden md:block" /> to boost your productivity and creativity.
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

            <div className="mt-8 md:mt-12 px-4 md:px-0">
                <Suspense fallback={<p className="text-center mt-10">Loading tools...</p>}>
                    {activeTab === "products" ? (
                        <ToolsCard cart={cart} handleAddToCart={handleAddToCart} />
                    ) : (
                        <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-8">
                            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Your Cart</h2>

                            {cart.length > 0 ? (
                                <>
                                    <div className="flex flex-col gap-3">
                                        {cart.map((tool) => (
                                            <div key={tool.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 md:px-5 py-3 md:py-4">
                                                <div className="flex items-center gap-3 md:gap-4">
                                                    {/* <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                                                        <img src={`/${tool.image}`} alt={tool.name} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                                                    </div> */}
                                                    <div>
                                                        <p className="font-semibold text-sm">{tool.name}</p>
                                                        <p className="text-gray-500 text-sm">${tool.price}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveFromCart(tool.id)}
                                                    className="text-red-500 text-sm font-semibold hover:text-red-700 transition flex-shrink-0 ml-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center mt-5 md:mt-6 pt-4 border-t border-gray-100">
                                        <span className="text-gray-500 text-sm">Total:</span>
                                        <span className="text-xl md:text-2xl font-bold">
                                            ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                                        </span>
                                    </div>

                                    <button className="mt-5 md:mt-6 w-full py-3 md:py-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#4f39f6] to-[#9514fa] hover:opacity-90 transition">
                                        Proceed To Checkout
                                    </button>
                                </>
                            ) : (
                                <div className="text-center py-16 md:py-20">
                                    <p className="text-xl md:text-2xl font-bold text-gray-300 italic">Your cart is feeling light...</p>
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