import React from "react";
import Stock from "./Stock";

function StockContainer({handleBuyStock, filteredStocks}) {

  const stockList = filteredStocks.map(stock => <Stock key={stock.id} stock={stock} handleStock={handleBuyStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
