import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Tools from "../components/Tools";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-36 ">
                <Banner/>
                <Tools/>
            </div>
        </div>
    );
};

export default Home;