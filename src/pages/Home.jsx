import Banner from "../components/Banner";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-36 ">
                <Banner/>
            </div>
        </div>
    );
};

export default Home;