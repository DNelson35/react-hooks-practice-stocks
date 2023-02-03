import React from "react";

function Stock({stock, handleStock}) {
  const {name, price} = stock
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => handleStock(stock)} >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
