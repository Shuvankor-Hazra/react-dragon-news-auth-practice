import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="md:flex gap-6">
                <div className="border-2 md:w-3/12">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="border-2 md:w-6/12">
                    News coming soon
                </div>

                <div className="border-2 md:w-3/12">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;