import "./index.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const RightCard = () => {
  return (
    <div
      className="w-1/2 h-full rounded-[20px] py-[27px] px-[20px] flex-col"
      id="RightCardContainer"
    >
      {/*top*/}
      <div className="w-full h-1/2">
        <div className="w-[64px] h-[22px] " id="Logo"></div>
      </div>

      {/*bottom*/}
      <div className="w-full h-1/2 flex flex-col justify-between">
        <div className="text-white">
          <h1 className="text-5xl font-bold leading-[70px] font-poppins">
            100% Uptime😎
          </h1>
          <h2 className="w-1/2 text-3xl font-[400] text-[#BFBFBF] leading-[50px] font-poppins">
            Zero Infrastructure Management
          </h2>
        </div>
        <div className="w-full flex justify-between items-center text-white self-end">
          <div className="flex items-center text-[12px] h-[18px] w-[100px] text-[#BFBFBF] ">
            <AiOutlineGlobal size={12} />
            &nbsp;
            <a href="#" className="leading-[18px] font-poppins">
              aesthisia.com
            </a>
          </div>
          <div className="flex items-end justify-center">
            <a href="#">
              {" "}
              <FaLinkedinIn size={18} />
            </a>
            &nbsp;
            <a href="#">
              <FaFacebookF size={18} />
            </a>
            &nbsp;
            <a href="#">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
