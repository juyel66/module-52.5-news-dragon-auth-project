import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full mt-5">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full mt-5">
                    <FaGithub />
                    Login With Github

                </button>
            </div>

            <div className="p-4 mb-6">
                <h1 className="text-3xl">Find Us on</h1>
                <a className="flex items-center  text-lg rounded-t-lg border p-4" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook</a>
                <a className="flex items-center text-lg  border p-4" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter</a>
                <a className="flex items-center text-lg rounded-b-lg border p-4" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram</a>
            </div>

            {/* Q Zone  */}

            <div className="p-4 space-y-3 mb-3">
                <h2 className="text-3xl ">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
              

            </div>

        </div>
    );
};

export default RightSideNav;