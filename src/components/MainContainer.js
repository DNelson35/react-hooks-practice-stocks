import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [sortBy, setSortBy] = useState('Alphabetically');
  const [filter, setFilter] = useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(resp => setStocks(resp))
  }, []);

  function handleBuyStock(stock){
   setPortfolioList([...portfolioList, stock]);
  }

  function handleSellStock(stock){
    setPortfolioList(portfolioList.filter(proStock => proStock.id !== stock.id));
  }

  const sortedStocks = [...stocks].sort((itemA, itemB) => 
  (sortBy === "Alphabetically")? itemA.name.localeCompare( itemB.name) : itemA.price - itemB.price)

  const filteredStocks = sortedStocks.filter(stock => stock.type === filter)

  return (
    <div>
      <SearchBar 
      sortBy={sortBy}
      setSortBy={setSortBy} 
      filter={filter}
      setFilter={setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer handleBuyStock={handleBuyStock} filteredStocks={filteredStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} handleSellStock={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
