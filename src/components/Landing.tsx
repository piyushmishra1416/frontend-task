import * as formUtils from "./formUtils";
import Button from "@mui/material/Button";
import Frame from "../assets/Frame.svg";
import arrow from "../assets/arrow.svg";
import tick from "../assets/tick.svg";
import { useState } from "react";
import { Box } from "@mui/material";

const Landing = () => {
  const taxrates = [
    "0%",
    "Nil + 19% of the excess over $18,200",
    "$5,092 + 32.5% of the excess over $45,000",
    "$29,467 + 37% of the excess over $120,000",
    "$51,667 + 45% of the excess over $180,000",
  ]; // State to store the selected country

  const countries = ["Australia", "United States", "Canada", "United Kingdom"]; // Add more countries as needed
  const incomes = [
    "$0 - $18,200",
    "$18,201 - $45,000",
    "$45,001 - $120,000",
    "$120,001 - $180,000",
    "$180,001",
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState("");
  const [index, setIndex] = useState<number>(0); // State to store the selected country
  const [annualIncome, setAnnualIncome] = useState<string>(incomes[0]);
  const [purchasePrice, setPurchasePrice] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [investmentType, setInvestmentType] = useState<string>("Long Term");
  const [capitalGainsValue, setCapitalGainsValue] = useState<number | null>(
    null
  );
  const [discountValue, setDiscountValue] = useState<number | null>(null);
  const [netCapitalGains, setNetCapitalGains] = useState<number | null>(0);
  const [taxAmount, setTaxAmount] = useState<number | undefined>(0);
  // Add more countries as needed
  const handleAnnualIncomeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedIncome = e.target.value;
    const newIndex = incomes.indexOf(selectedIncome);
    setAnnualIncome(selectedIncome);
    setIndex(newIndex);
    handleSubmit(e);
  }; // State to store the selected financial year

  const financials = [" FY 2023-24"]; // Add more financial years as needed

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  }; // Add more countries as needed

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedpurchasedPrice = parseFloat(purchasePrice);
    const parsedsalePrice = parseFloat(salePrice);
    const parsedexpenses = parseFloat(expenses);

    const capitalGains = formUtils.calculateCapitalGains(
      parsedpurchasedPrice,
      parsedsalePrice,
      parsedexpenses
    );
    setCapitalGainsValue(capitalGains);
    const discount = formUtils.calculateDiscount(
      capitalGains,
      investmentType /* get investment type from the input */
    );
    setDiscountValue(discount);
    const netCapitalGains = formUtils.calculateNetCapitalGains(
      capitalGains,
      discount
    );
    const incomePosition = incomes.indexOf(annualIncome);
    const taxAmount = formUtils.calculateTax(netCapitalGains, incomePosition);
    setNetCapitalGains(netCapitalGains);
    setTaxAmount(taxAmount);

    // Now you can use the calculated values as needed in your application
    console.log(incomePosition);
    console.log("Capital Gains:", capitalGains);
    console.log("Discount:", discount);
    console.log("Net Capital Gains:", netCapitalGains);
    console.log("Tax:", taxAmount);
  };
  return (
    <div className="flex   mt-[29px] w-[100%] bg-[#EFF2F5]   ">
      <div className="relative w-[93%] md:w-[61.2%] ml-[10px] md:ml-14 bg-[#FFF] rounded-2xl items-center flex flex-col md:py-[2.5%] px-4 py-4 md:px-[5.4%]">
        <div className="items-center w-[100%] justify-center  flex">
          <p className="  font-inter font-bold justify-center text-center items-center text-2xl md:text-4xl leading-10">
            Free Crypto Tax Calculator Australia
          </p>
        </div>
        <form className="mt-10 w-[100%]" onSubmit={handleSubmit}>
          <div className="flex items-center w-[100%] gap-5 md:gap-10 justify-center w- ">
            <div className="mb-4 flex flex-col w-[47.12%] md:w-[100%]  space-x-0 md:space-x-2 md:flex-row   md:items-center w- h-">
              <label
                htmlFor="financialYear"
                className="text-gray-700  md:w-[45%]  font-normal "
              >
                Financial Year
              </label>
              <select
                id="financialYear"
                value={selectedYear}
                onChange={handleYearChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-center flex  md:w-[100%] h-10 pr-  pl- "
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
            <div className="mb-4 w-[47.12%] md:w-[100%] space-x-0 md:space-x-2 md:items-center  flex flex-col md:flex-row h-">
              <label
                htmlFor="country"
                className="text-gray-700  md:w-[25%] font-normal mr- leading-"
              >
                Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className=" border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex w-    
                md:w-[100%] h-10 pr-  px- "
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
              <label htmlFor="purchasePrice" className="  leading-6">
                Enter purchase price of Crypto
              </label>

              <input
                id="purchasePrice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
                placeholder="$"
                onChange={(e) => setPurchasePrice(e.target.value)}
              ></input>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="salePrice"
                className=" text-[0.9375] leading-6"
              >
                Enter sale price of Crypto
              </label>
              <input
                id="salePrice"
                type="text"
                className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]"
                onChange={(e) => setSalePrice(e.target.value)}
                placeholder="$"
              ></input>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w-[ bg-blue">
            <div className="flex flex-col w-[100%] items-start gap-[0.375rem] ">
              <label
                htmlFor="expenses"
                className=" text-[0.9375] leading-6"
              >
                Enter your Expenses
              </label>
              <input
                id="expenses"
                type="text"
                className="w-[100%] h-[3rem] px-[1rem] border border-gray-300 rounded-lg "
                onChange={(e) => setExpenses(e.target.value)}
                placeholder="$"
              ></input>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <label
                htmlFor="pprice"
                className=" text-[0.9375] leading-6"
              >
                Investment type
              </label>
              <div className="flex gap-[0.63rem] w-[100%] ">
                <div className="w-[100%]">
                  <button
                    id="pprice"
                    className="w-[100%] h-[3.5rem] border px-[0.75rem] flex items-center border-gray-300 rounded-lg "
                    onClick={() => setInvestmentType("Short Term")}
                  >
                    {" "}
                    <p>Short Term</p>
                    <img
                      src={tick}
                      alt="tick" 
                      className="w-[2rem] h-[2rem] ml-[0.25rem]"
                    />
                  </button>
                  <p> &lt; 12 months </p>
                </div>
                <div className="w-[100%]">
                  <button
                    id="pprice"
                    className="w-[100%] h-[3.5rem] border flex items-center border-gray-300 rounded-lg px-[0.75rem]"
                    onClick={() => setInvestmentType("Long Term")}
                  >
                    {" "}
                    <p>Long Term</p>
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[2rem] h-[2rem] ml-[0.25rem]"
                    />
                  </button>
                  <p className="text-[0.9375remw]"> &gt; 12 months </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w- bg-blue">
            <div className="flex flex-col w-[100%] md:w-[47%] items-start gap-[0.375rem]">
              <label
                htmlFor="annualincome"
                className=" text-[0.9375] leading-6"
              >
                Select your Annual Income
              </label>
              <select
                id="annualincome"
                value={annualIncome}
                onChange={handleAnnualIncomeChange}
                className="w-[100%] md-w-[50%] h-[3.62rem] border border-gray-300 rounded-lg px-[1rem]"
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
            <div className="flex flex-col w-[50%]  items-start md:justify-center md:text-center gap-[0.375rem] ">
              <p className=" text-center ">{index !== -1 && taxrates[index]}</p>
            </div>
          </div>
          <div
            className={`" ${
              investmentType === "Short Term" ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start w- bg-blue">
            <div className="flex w-[100%]  flex-col items-start gap-[0.375rem] ">
              <p className=" text-[0.9375] leading-6">
                Capital gains amount
              </p>
              <div className="w-[100%] h-[3rem] border border-gray-300 rounded-lg px-[1rem]">
                {capitalGainsValue !== null && (
                  <p className="">{`Capital Gains: $${capitalGainsValue.toFixed(
                    2
                  )}`}</p>
                )}
              </div>
            </div>
            <div className="flex w-[100%] flex-col items-start gap-[0.375rem] ">
              <p className=" w-[100%] text-[0.9375] leading-6">
                Discount for long term gain
              </p>
              <div className="w-full h-[3rem] border border-gray-300 rounded-lg px-[1rem]">
                {discountValue !== null && (
                  <p className="">{`Discount: $${discountValue.toFixed(
                    2
                  )}`}</p>
                )}
              </div>
            </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-[1.75rem] items-start  w- bg-blue">
            <div className=" bg-[#ebf8f4] items-center flex flex-col justify-center  w-[100%] md:w-[47%] rounded-[8px] text-center  h-[100px] ">
              <p>Net capital gains tax amount <p className="text-[#0FBA83]">{netCapitalGains}</p></p>
            </div>
            <div className=" bg-[#eaf1ff] items-center flex flex-col justify-center  w-[100%] md:w-[47%] rounded-[8px] text-center  h-[100px] ">
              <p>The tax you need to pay* <div className="text-[#0141CF]">{taxAmount}</div></p>
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
