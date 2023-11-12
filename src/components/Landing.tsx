import Button from "@mui/material/Button";
import Frame from "../assets/Frame.svg";
import arrow from "../assets/arrow.svg";
import tick from "../assets/tick.svg";
import { useState } from "react";
import { Box } from "@mui/material";

const Landing = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(""); // State to store the selected country

  const countries = ["Australia", "United States", "Canada", "United Kingdom"]; // Add more countries as needed
  const [selectedYear, setSelectedYear] = useState<string>(""); // State to store the selected financial year

  const financials = [" FY 2023-24"]; // Add more financial years as needed

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  }; // Add more countries as needed

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex mx-14  mt-[29px]  ">
      <div className="relative w-[55.1rem] h-[54.92rem] bg-black rounded-2xl items-center flex flex-col  p-[2.1875rem] pr-[4.5625rem] pb-[3.625rem] pl-[4.9375rem]">
        <div className="items-center">
          <p className="text-white  font-inter font-bold text-[2.25em] leading-10">
            Free Crypto Tax Calculator Australia
          </p>
        </div>
        <form className="mt-10">
          <div className="flex items-start gap-10 ">
            <div className="mb-4 flex  items-center w-[20.9rem] h-[3rem]">
              <label
                htmlFor="financialYear"
                className="text-gray-700 text-[0.9375rem] font-normal mr-[0.5rem] leading-1.5rem"
              >
                Financial Year
              </label>
              <select
                id="financialYear"
                value={selectedYear}
                onChange={handleYearChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex w-[14.25rem] h-[3rem] pr-[0.6875rem]  pl-[0.75rem] "
              >
                <option
                  value=""
                  disabled
                  className=" font-Inter font-medium text-lg"
                >
                  FY 2023-24
                </option>
                {financials.map((year) => (
                  <option
                    key={year}
                    value={year}
                    className=" font-Inter font-medium text-lg"
                  >
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4  flex  items-center w-[21.1rem] h-[3rem]">
              <label
                htmlFor="country"
                className="text-gray-700 text-[0.9375rem] font-normal mr-[0.5rem] leading-1.5rem"
              >
                Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex w-[17.1rem] h-[3rem] pr-[0.6875rem]  px-[0.75rem] "
              >
                <option value="" disabled>
                  Choose a country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-[1.75rem]">
            <hr className="w-[44.5625rem] h-[0.0625rem]"></hr>
          </div>
          <div className="flex gap-10 mb-[1.75rem] items-start w-[44.4375rem] bg-blue">
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter purchase price of Crypto
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter sale price of Crypto
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
          </div>
          <div className="flex gap-10 mb-[1.75rem] items-start w-[44.4375rem] bg-blue">
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter your Expenses
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Investment type
              </label>
              <div className="flex gap-[0.63rem] text-white">
                <div>
                  <div
                    id="pprice"
                    className="w-[10.16rem] h-[3.5rem] border px-[0.75rem] flex items-center border-gray-300 rounded-lg "
                  >
                    {" "}
                    <p>Short Term</p>
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[2rem] h-[2rem] ml-[0.25rem]"
                    />
                  </div>
                  <p> &lt; 12 months </p>
                </div>
                <div>
                  <div
                    id="pprice"
                    className="w-[10.16rem] h-[3.5rem] border flex items-center border-gray-300 rounded-lg px-[0.75rem]"
                  >
                    {" "}
                    <p>Long Term</p>
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[2rem] h-[2rem] ml-[0.25rem]"
                    />
                  </div>
                  <p className="text-[0.9375remw]"> &gt; 12 months </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mb-[1.75rem] items-start w-[44.4375rem] bg-blue">
            <div className="flex flex-col items-start gap-[0.375rem]">
              <label
                htmlFor="financialYear"
                className="text-white text-[0.9375] leading-6"
              >
                Select your Annual Income
              </label>
              <select
                id="financialYear"
                value={selectedYear}
                onChange={handleYearChange}
                className="w-[20.9rem] h-[3.62rem] border border-gray-300 rounded-lg px-[1rem]"
              >
                <option
                  value=""
                  disabled
                  className=" font-Inter font-medium text-lg"
                >
                  FY 2023-24
                </option>
                {financials.map((year) => (
                  <option
                    key={year}
                    value={year}
                    className=" font-Inter font-medium text-lg"
                  >
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter sale price of Crypto
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
          </div>
          <div className="flex gap-10 mb-[1.75rem] items-start w-[44.4375rem] bg-blue">
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Capital gains amount
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Discount for long term gain
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[21.1rem] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
          </div>
          <div className="flex gap-10 mb-[1.75rem] items-start w-[44.4375rem] bg-blue">
            <div>
              <p>Net capital gains tax amount:</p>
            </div>
            <div>
              <p>The tax you need to pay*</p>
            </div>
          </div>
        </form>
      </div>

      <Box sx={{}} display={["none", "flex", ]} flexDirection={"column"} className="w-[26.625rem] h-[36rem] ml-5 rounded-2xl bg-primary-blue px-4 py-14 ">
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
      </Box>
    </div>
  );
};

export default Landing;
