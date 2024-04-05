import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <h1 className="text-xl">Journalism Without Fear or Favour</h1>
            <p className="text-xl">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;