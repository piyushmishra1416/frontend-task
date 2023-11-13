import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KoinXLogo from "../assets/KoinXLogo.svg";
function Footer() {
  return (
    <div className="h-full  flex flex-col md:  text-white bg-[#000000] mt-6 ">
      <div className="flex flex-col gap-[60%] md:flex-row mt-10 mx-10 ">
        <img src={KoinXLogo} alt="logo" className="ml-10 md:mr-0" />
        <div className="flex space-x-4 justify-center ">
          <FacebookIcon fontSize="large" sx={{ color: "#2997F9" }} />
          <YouTubeIcon fontSize="large" sx={{ color: "#2997F9" }} />
          <InstagramIcon fontSize="large" sx={{ color: "#2997F9" }} />
          <LinkedInIcon fontSize="large" sx={{ color: "#2997F9" }} />
          <TwitterIcon fontSize="large" sx={{ color: "#2997F9" }} />
          <PinterestIcon fontSize="large" sx={{ color: "#2997F9" }} />
        </div>
      </div>
      <hr className="mt-10 mx-auto border-white w-3/4 mb-4" />
      <div className="grid text-base grid-cols-2 md:grid-cols-5 grid-rows-2  md:grid-rows-1 m font-light  mt-14 px-28">
        <div className="">
          <ul className="text-lg  ">
            <li className="mb-2 font-bold">Crypto Taxes for</li>
            <li>Individuals and investors</li>
            <li>Tax Professionals and Accountant</li>
            <li>Exchanges and Web3 projects</li>
          </ul>
        </div>
        <div className="">
          <ul className="text-lg ">
            <li className="mb-2 font-bold">Free Tools</li>
            <li>Crypto Prices Live</li>
            <li>Crypto Tax Calculator</li>
            <li>Crypto Tax Saving Speculator</li>
            <li>Crypto Profit Calculato</li>
            <li>Crypto Converter</li>
            <li>Crypto Staking ROI Calculato</li>
          </ul>
        </div>
        <div className="">
          <ul className="text-lg ">
            <li className="mb-2 font-bold">Resource center</li>
            <li>Crypto Tax Guides</li>
            <li>Dumb Ways To Lose Money</li>
            <li>Crypto Tax Savings Guide</li>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>Crypto Buying Guides</li>
            <li>Crypto Staking Guides</li>
            <li>Crypto Mining Guides</li>
            <li>Crypto price Predictions</li>
          </ul>
        </div>
        <div className="">
          <ul className="text-lg ">
            <li className="mb-2 font-bold">Help and Support</li>
            <li>Product Guides</li>
            <li>How to Guides</li>
            <li>Templates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <ul className="text-lg ">
            <li className="mb-2 font-bold">GAME designs</li>
            <li>Technology</li>
            <li>Web Development</li>
            <li>Android Development</li>
            <li>IOS Development</li>
          </ul>
        </div>
      </div>
      <hr className="mt-10 mx-auto border-white w-3/4 mb-4" />
      <div className="flex ml-40  justify-center items-center  mb-10">
        <p className="text-sm mr-2">
          {" "}
          © All rights reserved by Simplify Infotech Pvt. Ltd© DevLearn, Inc.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
