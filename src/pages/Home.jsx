import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Tools from "../components/Tools";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tool) => {
        const exists = cart.find((item) => item.id === tool.id);
        if (!exists) {
            setCart([...cart, tool]);
        }
    };

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <div className="px-36">
                <Banner />
                <Tools 
                    cart={cart} 
                    setCart={setCart} 
                    handleAddToCart={handleAddToCart} 
                />
                
               
                <Steps /> 
                <Pricing/>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Home;

