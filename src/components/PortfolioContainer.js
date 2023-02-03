import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, handleSellStock}) {

  const portfolioStocks = portfolioList.map(stock => <Stock key={stock.id} stock={stock} handleStock={handleSellStock} />)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks
      }
    </div>
  );
}

export default PortfolioContainer;
