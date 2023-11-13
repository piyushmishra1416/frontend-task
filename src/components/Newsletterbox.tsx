import { useState } from "react";
import bgmask from "../assets/bgmask.svg"
import Frameicon from "../assets/Frameicon.svg"
import { Box } from "@mui/material";
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
    <Box height={'289px'} display={'flex'} className="w-[77.1%] justify-center items-center my-[8rem]" sx={{ backgroundImage: `url(${bgmask})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contained' }}>
    <Box display={'flex'} className="w-[100%] h-[100%] justify-center items-center">
    <div>
    <img src={Frameicon} alt="frame" />
    </div>
    <div>
      <h2 className=" w-[557px] [font-family:'Inter-bold', Helvetica] font-bold text-white mt-[-1px] text-[28px] mb-8">Stay up to date with the latest crypto news and events. Subscribe to our newsletter</h2>
      <div className="inline-flex items-center flex-[0_0_auto] ">
       
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 border border-gray-300 rounded-l-md flex-1 focus:outline-none focus:ring focus:border-blue-500"
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
  </Box>
  </Box>
  
  
  );
};

export default Newsletter;