import React from "react";
import footerImage from "../../Assets/footerImage.webp";
import logo from "../../Assets/srimandir_logo.svg";
import insta from "../../Assets/insta.svg"
import facebook from "../../Assets/facebook.svg"
import youtube from "../../Assets/youtube.svg"
import startup from "../../Assets/startup.svg"
import digital from "../../Assets/digital.svg"
import azadi from "../../Assets/azadi.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col ">
      <div className=" w-full flex justify-between gap-3 max-w-screen-xl mx-auto">
        <div></div>
        <div>
          <img src={footerImage} alt="" />
        </div>
      </div>
      <div className=" w-full  p-3 bg-gradient-to-r from-[#FA6E2E] via-[#FD8622] to-[#FD7D2B] lg:h-[62px] px-4 bg-white dark:bg-gray-800 ">
        <div className="flex justify-between max-w-screen-xl gap-3 mx-auto lg:flex-row flex-col">
          <div className=" flex gap-2 items-center">
            <img src={logo} alt="" className=" w-[40px] " />
            <p className=" text-lg font-bold text-white">Sri mandir</p>
          </div>
          <div className=" flex lg:flex-row  flex-col gap-3">
            <Link className=" uppercase font-bold text-white text-[13px]" to={"/aboutUs"}>About us</Link>
            <Link className=" uppercase font-bold text-white text-[13px]" to={"terms-and-condition"}>Terms and conditions</Link>
            <Link className=" uppercase font-bold text-white text-[13px]" to={"privacy-and-policy"}>Privacy and policy</Link>
            <Link className=" uppercase font-bold text-white text-[13px]" to={"contact-us"}>Contact us</Link>
          </div>
          <div className=" lg:hidden items-start gap-3 flex flex-row ">
                <img src={insta} alt="" />
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
            </div>
        </div>
      </div>
      <div className=" w-full p-3 h-[62px] px-4 bg-white ">
        <div className=" w-full flex items-center lg:flex-row flex-col justify-between lg:gap-0 gap-7 max-w-screen-xl mx-auto">
        <div className=" flex items-center gap-3 lg:flex-row flex-col">
                <img src={digital} alt="" className=" h-[30px]" />
                <img src={startup} alt="" className=" h-[30px]" />
                <img src={azadi} alt="" className=" h-[30px]" />
            </div>
            <div className=" lg:flex items-center gap-3 hidden ">
                <img src={insta} alt="" />
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
