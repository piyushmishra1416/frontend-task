import Button from "@mui/material/Button";
import Frame from "../assets/Frame.svg";
import arrow from "../assets/arrow.svg";
import EastSharpIcon from "@mui/icons-material/EastSharp";

const Landing = () => {
  return (
    <div className="flex mx-14 mt-[29px] ">
      <div className=" ">
        <div className="relative w-[881px] h-[879px] bg-black rounded-[16px]">
          <div className="inline-flex flex-col items-start gap-[8px] p-[8px] relative top-[35px] left-[79px]">
            <div className="flex flex-col w-[713px] items-center gap-[40px] relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-gray-1 text-[36px] text-center tracking-[0] leading-[42px] whitespace-nowrap text-white">
                Free Crypto Tax Calculator Australia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[426px] h-[576px] ml-5 rounded-2xl bg-primary-blue px-4 py-14 ">
        <div className="w-64 mx-auto text-center flex flex-col justify-center items-center">
          <p className="fixed[font-family:'Inter-Bold',Helvetica] font-bold text-white w-72 h-20 text-[24px]  ">
            Get Started with KoinX for FREE
          </p>
          <p className="  text-white mt-4  h-16 w-80 text-[14px]  ">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <div className="mt-9 ">
          <img src={Frame} className="items-center mx-auto" alt="frame" />
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
            }}
            className="mx-auto"
            endIcon={<img src={arrow} alt="Arrow" />}
          >
            Get Started for FREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
