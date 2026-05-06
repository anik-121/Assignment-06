import { Suspense } from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
    return (
        <div className="mt-32">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold">
                    Premium Digital Tools
                </h1>
                <p className="text-base text-[#627382]">
                    Choose from our curated collection of premium digital products designed
                    <br /> to boost your productivity and creativity.
                </p>
                <div className="space-x-3">
                    <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold px-6 py-3 rounded-full text-sm">Products</button>
                    <button className="btn  px-6 py-3 rounded-full text-sm">Cart</button>
                </div>
            </div>

            <div>
                <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
                    <ToolsCard />
                </Suspense>
            </div>
        </div>
    );
};

export default Tools;