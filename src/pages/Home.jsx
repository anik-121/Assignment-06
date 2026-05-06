// import { useState } from "react";
// import Banner from "../components/Banner";
// import Navbar from "../components/Navbar";
// import Tools from "../components/Tools";
// import Steps from "../components/Steps";
// import Pricing from "../components/Pricing";
// import Footer from "../components/Footer";

// const Home = () => {
//     const [cart, setCart] = useState([]);

//     const handleAddToCart = (tool) => {
//         const exists = cart.find((item) => item.id === tool.id);
//         if (!exists) {
//             setCart([...cart, tool]);
//         }
//     };

//     return (
//         <div>
//             <Navbar cartCount={cart.length} />
//             <div className="px-36">
//                 <Banner />
//                 <Tools 
//                     cart={cart} 
//                     setCart={setCart} 
//                     handleAddToCart={handleAddToCart} 
//                 />
                
               
//                 <Steps /> 
//                 <Pricing/>
                
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default Home;





import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Tools from "./components/Tools";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tool) => {
        setCart((prev) => [...prev, tool]);
    };

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar cartCount={cart.length} />
            
            {/* Fluid padding: 6 on mobile, 16 on tablet, 36 on desktop */}
            <div className="px-6 md:px-16 lg:px-36 flex-grow">
                <Banner />
                <Tools cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
                <Steps /> 
                <Pricing />
            </div>

            <Footer />
        </div>
    );
};

export default Home;