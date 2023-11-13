import Button from "@mui/material/Button";
import Frame from "../assets/Frame.svg";
import arrow from "../assets/arrow.svg";
import tick from "../assets/tick.svg";
import { useState } from "react";
import { Box } from "@mui/material";

const Landing = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState('');
  const [index, setIndex] = useState<number>(-1); // State to store the selected country
  const [annualincome, setAnnualIncome] = useState('');
  const taxrates = ["0%", "Nil + 19% of the excess over $18,200",  "$5,092 + 32.5% of the excess over $45,000", "$29,467 + 37% of the excess over $120,000", "$51,667 + 45% of the excess over $180,000"] // State to store the selected country

  const countries = ["Australia", "United States", "Canada", "United Kingdom"]; // Add more countries as needed
  const incomes = ["$0 - $18,200", "$18,201 - $45,000", "$45,001 - $120,000", "$120,001 - $180,000", "$180,001"]; // Add more countries as needed
  const handleAnnualIncomeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIncome = e.target.value;
    const newIndex = incomes.indexOf(selectedIncome);
    setAnnualIncome(selectedIncome);
    setIndex(newIndex);
    
  }; // State to store the selected financial year

  const financials = [" FY 2023-24"]; // Add more financial years as needed

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  }; // Add more countries as needed

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex   mt-[29px] w-[100%]   ">
      <div className="relative w-[93%] md:w-[61.2%] ml-[10px]  bg-black rounded-2xl items-center flex flex-col p-4">
        <div className="items-center w-[100%] justify-center  flex">
          <p className="text-white  font-inter font-bold justify-center text-center items-center text-2xl md:text-4xl leading-10">
            Free Crypto Tax Calculator Australia
          </p>
        </div>
        <form className="mt-10 w-[100%]">
          <div className="flex items-center w gap-5 md:gap-10 justify w- ">
            <div className="mb-4 flex flex-col w-[47.12%] md:flex-row w- md:w-56  items- w- h-">
              <label
                htmlFor="financialYear"
                className="text-gray-700  font-normal "
              >
                Financial Year
              </label>
              <select
                id="financialYear"
                value={selectedYear}
                onChange={handleYearChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-center flex w h-10 pr-  pl- "
              >
                <option
                  value=""
                  disabled
                  className=" font-Inter font-medium text-"
                >
                  FY 2023-24
                </option>
                {financials.map((year) => (
                  <option
                    key={year}
                    value={year}
                    className=" font-Inter font-medium text-"
                  >
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 w-[47.12%]  flex flex-col md:flex-row w md:wd-56   w- h-">
              <label
                htmlFor="country"
                className="text-gray-700  font-normal mr- leading-"
              >
                Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex w-
                
                md:wd-56 h-10 pr-  px- "
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
            <hr className="w- h-[0.0625rem]"></hr>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 mb-[1.75rem] items-start w-[100%] bg-blue">
            <div className="flex flex-col w-[100%] items-start gap-[0.375rem] ">
              <label htmlFor="pprice" className="text-white  leading-6">
                Enter purchase price of Crypto
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter sale price of Crypto
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w-[ bg-blue">
            <div className="flex flex-col w-[100%] items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Enter your Expenses
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg "
              ></input>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Investment type
              </label>
              <div className="flex gap-[0.63rem] w-[100%] text-white">
                <div className="w-[100%]">
                  <div
                    id="pprice"
                    className="w-[100%] h-[3.5rem] border px-[0.75rem] flex items-center border-gray-300 rounded-lg "
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
                <div className="w-[100%]">
                  <div
                    id="pprice"
                    className="w- h-[3.5rem] border flex items-center border-gray-300 rounded-lg px-[0.75rem]"
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
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w- bg-blue">
            <div className="flex flex-col w-[100%] items-start gap-[0.375rem]">
              <label
                htmlFor="annualincome"
                className="text-white text-[0.9375] leading-6"
              >
                Select your Annual Income
              </label>
              <select
                id="annualincome"
                value={annualincome}
                onChange={handleAnnualIncomeChange}
                className="w-[100%] h-[3.62rem] border border-gray-300 rounded-lg px-[1rem]"
              >
                <option
                  value=""
                  disabled
                  className=" font-Inter font-medium text-lg"
                >
                  $
                </option>
                {incomes.map((income) => (
                  <option
                    key={income}
                    value={income}
                    className=" font-Inter font-medium text-lg"
                  >
                    {income}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] ">
          <p className="text-white ">
          {index !== -1 && taxrates[index]}
          </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w- bg-blue">
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white text-[0.9375] leading-6"
              >
                Capital gains amount
              </label>
              <input
                id="pprice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className="text-white w-[100%] text-[0.9375] leading-6"
              >
                Discount for long term gain
              </label>
              <input
                id="pprice"
                type="text"
                className="w-full h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
              ></input>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start text-white w- bg-blue">
            <div>
              <p>Net capital gains tax amount:</p>
            </div>
            <div>
              <p>The tax you need to pay*</p>
            </div>
          </div>
        </form>
      </div>

      <Box
        sx={{}}
        display={["none", "flex"]}
        flexDirection={"column"}
        className="w-[26.625rem] hidden sm:block h-[36rem] ml-5 rounded-2xl bg-primary-blue px-4 py-14 "
      >
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
