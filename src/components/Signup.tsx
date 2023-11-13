import { Box } from '@mui/material'
import Button from "@mui/material/Button";
import Frame from "../assets/Frame.svg";
import arrow from "../assets/arrow.svg";
// import React from 'react'

const Signup = () => {
  return (
    <div>
        <Box
        sx={{}}
        display={["block", "none", "none", "none"]} 
        flexDirection={"column"}
        className="w-[93%] md:hidden lg:hidden  ml-5 rounded-2xl bg-primary-blue px-4 py-14 "
      >
        
        <div className="mt-4 w-[100%] flex justify-center items-center">
          <img src={Frame} className="mx-auto " alt="frame" />
        </div>
        <div className="w-[83%] mx-auto text-center flex flex-col justify-center items-center">
          <p className="fixed[font-family:'Inter-Bold',Helvetica] font-bold text-white w-72  text-[24px]  ">
          Track your portfolio & taxes
          </p>
          <p className="  text-white mt-4  h-16 w- text-[14px]  ">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <div className="mt-9 text-center">
          <Button
            variant="contained"
            style={{
              background: "white",
              color: "black",
              textTransform: "none",
              fontWeight: 550,
              padding: "8px 24px",
              fontSize: "14px"
            }}
            className=""
            endIcon={<img src={arrow} alt="Arrow" />}
          >
            Sign up at KoinX for FREE
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Signup