// formUtils.ts
const taxRates = [0, 0.19, 0.325, 0.37, 0.45];
const initialTaxAmounts = [0,0, 5092,  29467,  51667];

export const calculateCapitalGains = (
   purchasePrice: number,
   salePrice: number,
   expenses: number
 ) => {
   return salePrice - purchasePrice - expenses;
 };
 
 export const calculateDiscount = (capitalGains: number, investmentType: string) => {
   if (investmentType === 'Long Term' && capitalGains > 0) {
     return 0.5 * capitalGains;
   }
   return 0;
 };
 
 export const calculateNetCapitalGains = (
   capitalGains: number,
   discount: number
 ) => {
   return capitalGains - discount;
 };
 
//  export const calculateTax = (netCapitalGains: number, taxRateIndex: number) => {
//    const taxRate = parseFloat(taxrates[taxRateIndex].replace('%', '')) / 100;
//    return netCapitalGains * taxRate;
//  };
 export const calculateTax = (
   netCapitalGains: number,
   annualIncome: number
 ) => {
   let taxRateIndex = 0;
 
   if (annualIncome === 0) {
     taxRateIndex = 0;
     
   } else if (annualIncome === 1) {
     taxRateIndex = 1;
     
   } else if (annualIncome === 2) {
     taxRateIndex = 2;
   } else if (annualIncome === 3) {
     taxRateIndex = 3;
   } else {
     taxRateIndex = 4;
   }
 
   const taxRate = taxRates[taxRateIndex];
   const initialTaxAmount = initialTaxAmounts[taxRateIndex];
   const additionalTax = netCapitalGains * taxRate;
   const totalTax = initialTaxAmount + additionalTax;
 
   return totalTax;
 };
 