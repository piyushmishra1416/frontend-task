import { useState } from "react";
import bgmask from "../assets/bgmask.svg"
import Frameicon from "../assets/Frameicon.svg"
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Add your subscription logic here
    console.log(`Subscribing with email: ${email}`);
  };

  return (
    <div className=" relative w-[100%] flex justify-center items-center h-[500px]">
    <div className=" relative w-[100%] left-[10%] h-[288px]" >
    <div className="w-[77.1%] h-[288px]   top-0 border-box left-[10%] bg-[100%_100%] md:flex bg-amber-200 justify-center items-center" style={{ backgroundImage: `url(${bgmask})`,  }}>
    <img src={Frameicon} alt="frame" className="absolute top-[25px] left-[10%] items-start z-10" />
    <div className="absolute items-end">
      <h2 className="relative w-[557px] [font-family:'Inter-bold', Helvetica] font-bold text-white left-[30%] mt-[-1px] text-[28px] mb-8">Stay up to date with the latest crypto news and events. Subscribe to our newsletter</h2>
      <div className="inline-flex left-[30%] items-center relative flex-[0_0_auto] ">
       
        <input
          type="email"
          placeholder="Enter your email"
          className="relative py-2 px-4 border border-gray-300 rounded-l-md flex-1 focus:outline-none focus:ring focus:border-blue-500"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="bg-[#FFB800;] text-white border py-2 px-4 rounded-r-md"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  
  );
};

export default Newsletter;
