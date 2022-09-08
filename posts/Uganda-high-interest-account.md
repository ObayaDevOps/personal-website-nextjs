---
title: 'Engineering an Inflation-Proof High Interest Bank Account'
date: '2022-09-08'
---

'How?' Is probably the first question on your mind. 'Is this a scam?' is probably the second.

I won't keep you waiting. We will use the 'Margin Interest' rates offered by crypto trading exchange 'FTX' and some simple Python compounding code to allow anyone with a mobile money account to get interest rates up to 7%, all while holding the United States Dollar.

Why? 

The average inflation in Uganda, as of August 2022, is [6.8%](https://www.bou.or.ug/bou/bouwebsite/bouwebsitecontent/MonetaryPolicy/Monetary_Policy_Statements/2022/Monetary-Policy-Statement-for-July-2022.PDF), this is an erosion of the value of any funds stored in the Ugandan Shilling.

As it stands, it would take [just over 10 years](https://www.investopedia.com/terms/r/ruleof72.asp) for **half** of the buying power of your money to disappear.

So what can we do about it?

To keep the spending power of our money we need to earn at least 6.8% interest to match pace with inflation. As an example, the highest savings account interest rate offered by [Stanbic Bank](https://www.stanbicbank.co.ug/uganda/personal/products-and-services/bank-with-us/grow-your-money/PureSave-Account) is giving an interest of just 3.5%.

The Parts:
- [An FTX Exchange Account](https://docs.ftx.com/#rest-api)
- FTX Margin Lending  
- [A Python Bot that links to the FTX Account API](https://docs.ftx.com/#rest-api)
- A Way to control the bot using USSD


**Part 1. Firstly, where does the value actually come from ?**

The short answer is: we are going to lend money. 

We are going to lend mony short-term (hourly) to people trading with leverage on a crypto exchange. 

Why would anyone bother borrowing money for an hour ?

People trading with leverage borrow money to increase the size of any position (or bet) they take. More money, more reward if the bet pays off, and more downside if it doesn't. 
<!-- A trader may also spot a trading opportunity in a different currency to the one he is currently holding e.g. I hold 100 ETH but I think BTC is about to pump so 1 borrow some BTC against the value my ETH. If both currencies pump the trader wins twice. -->



At first glance it seems unquestionably risky to lend to crypto degenerates for a return of 7%, but the magic lies in the way we are lending, compounding interest and what the platforms guarantees:

"FTX will always pay back the loan, even in the event the borrower defaults"


They can make this claim as all borrowing on the platform is 100% collateralised, meaning the person borrowing USD (What we will be lending) will have to have an equal amount (in value) of Crypto currency in their account.

For example, to borrow $1000, you would need to have **at least** 0.59 ETH (1000 USD) (As of Aug 10 22 ETHUSD - 1:1,693.04). 

But isn't the price of crypto constantly changing ? I hear you ask. 

Yes it is. So exchanges may require you to hold 0.71 ETH (1200USD) to borrow $1000. 

Exchanges also have ['Liquidation Engines'](https://help.ftx.com/hc/en-us/articles/360027668712-Liquidations), these are pieces of code that monitor prices and balances and kick in when the value of the borrowers balance approaches the value of their loan. They rapidly sell the borrowers crypto to repay the loan they took - [a Liquidation](https://blog.ftx.com/blog/our-liquidation-engine/). 

This is known in Crypto as getting **'REKT'**. 

And is the reason I would advise every soul out there to **NEVER TRADE WITH LEVERAGE**. 

Buuuuuut... We will be safe and warm on the otherside of the leverage, with near* risk-free returns.

As well as full collateralisation of loans, FTX also has an 'Insurance Fund' that will repay lenders in the event that something went wrong with a liquidation.



***'near'** risk-free, as there is a low but non-zero the risk of FTX going down in a massive hack, random sanctions on crypto derivatives etc. 



**Part 2: The Magic of Compound Interest**


So now we know how we will generate the interest, we need to improve upon what we have.

We will do this by **Compounding interest hourly**

Simply put, Compound Interest is the interest you earn on interest.

![alt text](https://www.investopedia.com/thmb/Q0Ty0qR0KiFAaMUucLk7A9ElutY=/1333x1000/smart/filters:no_upscale()/COMPOUNDINTERESTFINALJPEGcopy-f248781269194135aa6044e088de7af9.jpg)

As we are lending on an hourly-basis, we can also compound on an hourly basis.
At first this has a small effect, but over the 10 years that you expect a drop by 50%, there is an huge benefit.

How much of a benefit ?


Assuming we start with 10m UGX(~2586.29 USD) and we have 3 options:
1. Nothing. 
2. Hold it in a bank account, earning 3.5% APR.
3. Use F.Ac.KIT

After 10 years, and assuming the interest rate remains stable, we can expect each option to return:

1. -50%

2. -25%

3. +25%


**Part 3: Put the Pieces Together**

I will now go on to explain how the bot works and how to construct and run it yourself.
This is a great starting project for anyone new to Python.

 Grab an FTX Account Here 


 Have a look at the FTX API Documentation


 Clone the Bot Repository








