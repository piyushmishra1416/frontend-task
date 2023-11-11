// import React from 'react'

const Landing = () => {
   return (
    <div className="relative w-[881px] h-[879px] bg-white rounded-[16px]">
       <div className="inline-flex flex-col items-start gap-[8px] p-[8px] relative top-[35px] left-[79px]">
         <div className="flex flex-col w-[713px] items-center gap-[40px] relative flex-[0_0_auto]">
           <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-gray-1 text-[36px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
             Free Crypto Tax Calculator Australia
           </p>
           <div className="inline-flex flex-col items-start gap-[28px] relative flex-[0_0_auto]">
             <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
               <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                 <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Financial Year
                 </div>
                 <div className="flex w-[228px] h-[48px] items-start gap-[40px] relative">
                   <div className="w-[228px] pl-[12px] pr-[11px] py-[17px] flex flex-col items-center justify-around gap-[8px] relative self-stretch bg-[#eff2f5] rounded-[8px]">
                     <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-4.00px] mb-[-4.00px]">
                       <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
                         FY 2023-24
                       </div>
                       <img className="relative w-[8.33px] h-[5.83px]" alt="Vector" src="vector.svg" />
                     </div>
                   </div>
                 </div>
               </div>
               <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                 <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Country
                 </div>
                 <div className="w-[273px] h-[48px] items-start flex gap-[40px] relative">
                   <div className="px-[12px] py-[17px] flex-1 grow flex flex-col items-center justify-around gap-[8px] relative self-stretch bg-[#eff2f5] rounded-[8px]">
                     <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px]">
                       <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                         <img
                           className="relative w-[24px] h-[24px]"
                           alt="Emojione flag for"
                           src="emojione-flag-for-australia.svg"
                         />
                         <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
                           Australia
                         </div>
                       </div>
                       <img className="relative w-[8.33px] h-[5.83px]" alt="Vector" src="image.svg" />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="relative w-[713px] h-px border-b [border-bottom-style:solid] border-[#c9cfdd99]" />
             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Enter purchase price of Crypto
                 </p>
                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
                     $ 30,000
                   </div>
                 </div>
               </div>
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Enter sale price of Crypto
                 </p>
                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
                     $ 20,000
                   </div>
                 </div>
               </div>
             </div>
             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Enter your Expenses
                 </div>
                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
                     $ 5,000
                   </div>
                 </div>
               </div>
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Investment Type
                 </div>
                 <div className="flex w-[335px] items-start gap-[10px] relative flex-[0_0_auto]">
                   <div className="flex flex-col h-[84px] items-start gap-[4px] relative flex-1 grow">
                     <div className="flex h-[56px] items-center justify-between px-[12px] py-[24px] relative self-stretch w-full rounded-[8px] border border-solid border-gray-2">
                       <div className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[18px] tracking-[0] leading-[normal]">
                         Short Term
                       </div>
                       <img
                         className="relative w-[24px] h-[24px] mt-[-8.00px] mb-[-8.00px]"
                         alt="Frame"
                         src="frame-1000004914-2.svg"
                       />
                     </div>
                     <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                       &lt; 12 months
                     </div>
                   </div>
                   <div className="flex flex-col h-[84px] items-start gap-[4px] relative flex-1 grow">
                     <div className="flex h-[56px] items-center gap-[8px] px-[12px] py-[24px] relative self-stretch w-full bg-[#0052fe0f] rounded-[8px] border-2 border-solid border-primaryblue">
                       <div className="relative w-fit mt-[-9.00px] mb-[-5.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primarydarkblue text-[18px] tracking-[0] leading-[normal]">
                         Long Term
                       </div>
                       <img
                         className="relative w-[32px] h-[32px] mt-[-12.00px] mb-[-12.00px]"
                         alt="Frame"
                         src="frame-1000004914.svg"
                       />
                     </div>
                     <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                       &gt; 12 Months
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="w-[711px] items-end flex-[0_0_auto] flex gap-[40px] relative">
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Select Your Annual Income
                 </div>
                 <div className="flex w-[335px] items-center justify-between px-[16px] py-[17px] relative flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] tracking-[0] leading-[normal]">
                     $45,001 - $120,000
                   </div>
                   {/* <div className="relative w-[24px] h-[24px]">
                     <IconlyLightOutline className="!bg-[unset] !absolute !bg-[unset] !left-0 !top-0" />
                   </div> */}
                 </div>
               </div>
               <div className="flex flex-col h-[58px] items-start relative flex-1 grow">
                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-2 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Tax Rate
                 </div>
                 <p className="relative w-[347px] h-[25px] mr-[-11.50px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[14px] tracking-[0] leading-[normal]">
                   $ 5,902 + 32.5% of excess over $45,001
                 </p>
               </div>
             </div>
             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Capital gains amount
                 </div>
                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
                     $ 5,000
                   </div>
                 </div>
               </div>
               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                   Discount for long term gains
                 </p>
                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
                     $ 2,500
                   </div>
                 </div>
               </div>
             </div>
             <div className="flex w-[713px] items-start gap-[40px] relative flex-[0_0_auto]">
               <div className="flex flex-col h-[97px] items-center justify-center gap-[8px] p-[8px] relative flex-1 grow bg-[#ebf8f4] rounded-[8px]">
                 <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                   Net Capital gains tax amount
                 </p>
                 <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-textgreen-1 text-[24px] relative w-fit text-center tracking-[0] leading-[normal]">
                   $ 2,500
                 </div>
               </div>
               <div className="flex flex-col h-[97px] items-center justify-center gap-[8px] p-[8px] relative flex-1 grow bg-[#eaf1ff] rounded-[8px]">
                 <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                   The tax you need to pay*
                 </p>
                 <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-primarydarkblue text-[24px] relative w-fit text-center tracking-[0] leading-[normal]">
                   $ 812.5
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
 
   )
 }
 
 export default Landing
 
 // import React from "react";
 // import { IconlyLightOutline } from "./IconlyLightOutline";
 
 // export const Frame = (): JSX.Element => {
 //   return (
 //     <div className="relative w-[881px] h-[879px] bg-white rounded-[16px]">
 //       <div className="inline-flex flex-col items-start gap-[8px] p-[8px] relative top-[35px] left-[79px]">
 //         <div className="flex flex-col w-[713px] items-center gap-[40px] relative flex-[0_0_auto]">
 //           <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-gray-1 text-[36px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
 //             Free Crypto Tax Calculator Australia
 //           </p>
 //           <div className="inline-flex flex-col items-start gap-[28px] relative flex-[0_0_auto]">
 //             <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
 //               <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
 //                 <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Financial Year
 //                 </div>
 //                 <div className="flex w-[228px] h-[48px] items-start gap-[40px] relative">
 //                   <div className="w-[228px] pl-[12px] pr-[11px] py-[17px] flex flex-col items-center justify-around gap-[8px] relative self-stretch bg-[#eff2f5] rounded-[8px]">
 //                     <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-4.00px] mb-[-4.00px]">
 //                       <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
 //                         FY 2023-24
 //                       </div>
 //                       <img className="relative w-[8.33px] h-[5.83px]" alt="Vector" src="vector.svg" />
 //                     </div>
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
 //                 <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Country
 //                 </div>
 //                 <div className="w-[273px] h-[48px] items-start flex gap-[40px] relative">
 //                   <div className="px-[12px] py-[17px] flex-1 grow flex flex-col items-center justify-around gap-[8px] relative self-stretch bg-[#eff2f5] rounded-[8px]">
 //                     <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px]">
 //                       <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
 //                         <img
 //                           className="relative w-[24px] h-[24px]"
 //                           alt="Emojione flag for"
 //                           src="emojione-flag-for-australia.svg"
 //                         />
 //                         <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
 //                           Australia
 //                         </div>
 //                       </div>
 //                       <img className="relative w-[8.33px] h-[5.83px]" alt="Vector" src="image.svg" />
 //                     </div>
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 //             <div className="relative w-[713px] h-px border-b [border-bottom-style:solid] border-[#c9cfdd99]" />
 //             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Enter purchase price of Crypto
 //                 </p>
 //                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] text-center tracking-[0] leading-[normal]">
 //                     $ 30,000
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Enter sale price of Crypto
 //                 </p>
 //                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                     $ 20,000
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 //             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Enter your Expenses
 //                 </div>
 //                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                     $ 5,000
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Investment Type
 //                 </div>
 //                 <div className="flex w-[335px] items-start gap-[10px] relative flex-[0_0_auto]">
 //                   <div className="flex flex-col h-[84px] items-start gap-[4px] relative flex-1 grow">
 //                     <div className="flex h-[56px] items-center justify-between px-[12px] py-[24px] relative self-stretch w-full rounded-[8px] border border-solid border-gray-2">
 //                       <div className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[18px] tracking-[0] leading-[normal]">
 //                         Short Term
 //                       </div>
 //                       <img
 //                         className="relative w-[24px] h-[24px] mt-[-8.00px] mb-[-8.00px]"
 //                         alt="Frame"
 //                         src="frame-1000004914-2.svg"
 //                       />
 //                     </div>
 //                     <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                       &lt; 12 months
 //                     </div>
 //                   </div>
 //                   <div className="flex flex-col h-[84px] items-start gap-[4px] relative flex-1 grow">
 //                     <div className="flex h-[56px] items-center gap-[8px] px-[12px] py-[24px] relative self-stretch w-full bg-[#0052fe0f] rounded-[8px] border-2 border-solid border-primaryblue">
 //                       <div className="relative w-fit mt-[-9.00px] mb-[-5.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primarydarkblue text-[18px] tracking-[0] leading-[normal]">
 //                         Long Term
 //                       </div>
 //                       <img
 //                         className="relative w-[32px] h-[32px] mt-[-12.00px] mb-[-12.00px]"
 //                         alt="Frame"
 //                         src="frame-1000004914.svg"
 //                       />
 //                     </div>
 //                     <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                       &gt; 12 Months
 //                     </div>
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 //             <div className="w-[711px] items-end flex-[0_0_auto] flex gap-[40px] relative">
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Select Your Annual Income
 //                 </div>
 //                 <div className="flex w-[335px] items-center justify-between px-[16px] py-[17px] relative flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] tracking-[0] leading-[normal]">
 //                     $45,001 - $120,000
 //                   </div>
 //                   <div className="relative w-[24px] h-[24px]">
 //                     <IconlyLightOutline className="!bg-[unset] !absolute !bg-[unset] !left-0 !top-0" />
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="flex flex-col h-[58px] items-start relative flex-1 grow">
 //                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-2 text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Tax Rate
 //                 </div>
 //                 <p className="relative w-[347px] h-[25px] mr-[-11.50px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[14px] tracking-[0] leading-[normal]">
 //                   $ 5,902 + 32.5% of excess over $45,001
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="flex w-[711px] items-start gap-[40px] relative flex-[0_0_auto]">
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Capital gains amount
 //                 </div>
 //                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                     $ 5,000
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
 //                 <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-1 text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
 //                   Discount for long term gains
 //                 </p>
 //                 <div className="flex flex-col items-start justify-center gap-[8px] px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] bg-[#eff2f5] rounded-[8px]">
 //                   <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[18px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                     $ 2,500
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 //             <div className="flex w-[713px] items-start gap-[40px] relative flex-[0_0_auto]">
 //               <div className="flex flex-col h-[97px] items-center justify-center gap-[8px] p-[8px] relative flex-1 grow bg-[#ebf8f4] rounded-[8px]">
 //                 <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
 //                   Net Capital gains tax amount
 //                 </p>
 //                 <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-textgreen-1 text-[24px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                   $ 2,500
 //                 </div>
 //               </div>
 //               <div className="flex flex-col h-[97px] items-center justify-center gap-[8px] p-[8px] relative flex-1 grow bg-[#eaf1ff] rounded-[8px]">
 //                 <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
 //                   The tax you need to pay*
 //                 </p>
 //                 <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-primarydarkblue text-[24px] relative w-fit text-center tracking-[0] leading-[normal]">
 //                   $ 812.5
 //                 </div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
 