import { ImGoogle3, ImGithub, ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Login with</h2>
                <button className="btn btn-outline  w-full my-3">
                    <ImGoogle3 />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full my-3">
                    <ImGithub />
                    Login With GitHub
                </button>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
                <Link className="btn my-2 w-full ">
                    <ImFacebook />
                    Facebook
                </Link>
                <Link className="btn my-2 w-full ">
                    <ImTwitter />
                    Twitter
                </Link>
                <Link className="btn my-2 w-full ">
                    <ImInstagram />
                    Instagram
                </Link>
            </div>

            <div className="bg-base-200 p-4">
                <h2 className="text-2xl font-bold mb-3">Q-Zone</h2>
                <div className="py-3 w-full cursor-pointer">
                    <img src={qZone1} alt="" />
                </div>
                <div className="py-3 w-full cursor-pointer">
                    <img src={qZone2} alt="" />
                </div>
                <div className="py-3 w-full cursor-pointer">
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;