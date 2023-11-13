// faqData.js

interface faqData {
   question: string;
   answer: string;
 }
 
const faqData = [
   {
       question: "1. How are cryptocurrencies taxed in Australia?",
       answer: `
The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.

<br/>

---

       `
   },
   {
       question: "2. What's the difference between long-term and short-term capital gains?",
       answer: `
The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.

<br/>

---

       `
   },
   {
       question: "3. Do I have to pay tax on crypto-to-crypto transactions?",
       answer: `
Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.

<br/>

Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.
       `
   },
   {
       question: "4. How do I lower my cryptocurrency taxes?",
       answer: `
Here are the top 6 strategies for lowering your cryptocurrency taxes in Australia:

<br/>

- **Hold for over 12 months:** Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.

<br/>

- **Offset gains with losses:** Offset capital gains with capital losses from cryptocurrency, reducing your overall tax burden.

<br/>

- **Claim tax deductions:** Explore opportunities to claim significant deductions on your regular income if you're a trader or running a crypto business.

<br/>

- **Use crypto tax tools:** Employ crypto tax software like KoinX or seek help from a crypto tax specialist to streamline calculations and ensure compliance.

<br/>

- **Donate to charities:** Donate cryptocurrency to registered charities since it's not a taxable event, and claim deductions on the donated amount.

<br/>

- **Full disclosure:** Be transparent and disclose all your crypto transactions to the ATO to avoid penalties for hiding trading activities.
       `
   },
   {
       question: "5. Can the ATO track crypto?",
       answer: `
The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions.
Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets.
The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.
       `
   }, {
       question: "6. What is the best crypto tax calculator for Australia?",
       answer: `
KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.
       `
   },
   {
       question: "7. Do I have to pay tax if I lose money trading crypto?",
       answer: `
In Australia, when your cryptocurrency loses value, it's classified as a capital loss. This means you won't have to pay taxes on that loss. It's a way to offset any gains you might have made in other investments for tax purposes.
       `
   },
   {
       question: "8. Is using a crypto tax calculator safe?",
       answer: `
KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and computes your gains or losses based on the crypto amounts and prices involved.
       `
   },
   {
       question: "9. Which exchanges do you support?",
       answer: `
KoinX seamlessly integrates with a wide array of exchanges, including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and numerous others. It effortlessly consolidates cryptocurrency transactions from over 180+ chains, exchanges, and wallets, presenting them in a user-friendly unified dashboard.
       `
   },
   {
       question: "10. Do I have to pay tax if I transfer crypto from one wallet to another?",
       answer: `
Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event, and capital gains tax is not triggered. Nevertheless, it's essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX.

KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.
       `
   },
   {
       question: "11. How do I use a cryptocurrency tax calculator?",
       answer: `
In order to use a cryptocurrency tax calculator, you need to input information about your cryptocurrency transactions.

### After you enter your information, the cryptocurrency tax calculator will calculate the gain or loss on every transaction.

<br/>

This includes:
1. The financial year you want to calculate your taxes for.
2. The country you want to calculate your taxes for.
3. The purchase price of the coin.
4. The sale price of the coin.

<br/>

You will get results that mention the following:

<br/>

1. The total profit/loss you made.
2. The tax you're liable to pay.

<br/>

Still have doubts? Consult with a crypto taxation expert.
       `
   },
   {
       question: "12. How do I calculate my crypto tax in Australia?",
       answer: `
To calculate your crypto tax in Australia accurately, you need to consider both income tax and capital gains tax.

<br/>

<b> Income Tax </b>

In Australia, when an individual (investor) sells, trades, spends, earns (salary, mining, interest), or gifts cryptocurrency, the net capital gain is taxed at the same rate as their Income Tax. This tax rate is determined based on their total income for the tax year.

<br/>

**ATO Individual Income Tax Rates 2022-2023**
   
<br/>

| Income              | Tax Rate                                  |
| ------------------- | ----------------------------------------- |
| $0 - $18,200        | 0%                                        |
| $18,201 - $45,000   | Nil + 19% of the excess over $18,200      |
| $45,001 - $120,000  | $5,092 + 32.5% of the excess over $45,000 |
| $120,001 - $180,000 | $29,467 + 37% of the excess over $120,000 |
| $180,001+           | $51,667 + 45% of the excess over $180,000 |

<br/>

<b> Capital Gains Tax (CGT)</b>

Calculate your capital gains or losses on cryptocurrency transactions using this formula:

<br/>

**Capital Gain/Loss = Capital Proceeds - Cost Basis**

<br/>

**Note:**

-  **Capital Proceeds (sale value or any form of receipt)**
-  **Cost Basis (costs incurred to acquire, hold, and dispose of the asset)**

<br/>

Your tax rate depends on whether you held the cryptocurrency for more than 12 months (long-term) or less (short-term). Long-term gains receive a 50% discount.

<br/>

Calculate your Australian crypto taxes accurately and effortlessly with KoinX's free crypto tax calculator for Australia. It simplifies the process, ensuring compliance with the latest tax rates and regulations, making crypto tax calculations easy and precise.
   `
   }

];

export default faqData;
