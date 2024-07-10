import React from 'react'
import './Stocktickle.css'




const stockData = [
  {
    name: "SENSEX",
    price: "77,209.90",
    change: "10.00",
    percentage: "(-0.35%)",
    isUp: true,
  },
  {
    name: "NIFTY",
    price: "15,700.90",
    change: "-20.00",
    percentage: "(-0.25%)",
    isUp: false,
  },
  {
    name: "HDFC Bank",
    price: "1,550.00",
    change: "-5.00",
    percentage: "(-0.32%)",
    isUp: false,
  },
  {
    name: "Infosys",
    price: "1,380.00",
    change: "20.00",
    percentage: "(1.47%)",
    isUp: true,
  },
  {
    name: "ICICI Bank",
    price: "800.00",
    change: "2.50",
    percentage: "(0.31%)",
    isUp: true,
  },
  {
    name: "Bharti Airtel",
    price: "650.50",
    change: "-3.50",
    percentage: "(-0.53%)",
    isUp: false,
  },
  {
    name: "Bharti Airtel",
    price: "650.50",
    change: "-3.50",
    percentage: "(-0.53%)",
    isUp: false,
  },
  {
    name: "Bharti Airtel",
    price: "650.50",
    change: "-3.50",
    percentage: "(-0.53%)",
    isUp: false,
  },
  {
    name: "Wipro",
    price: "420.50",
    change: "5.00",
    percentage: "(1.20%)",
    isUp: true,
  },
  {
    name: "Bajaj",
    price: "6,200.00",
    change: "-30.00",
    percentage: "(-0.48%)",
    isUp: false,
  },
  {
    name: "Axis Bank",
    price: "740.00",
    change: "4.00",
    percentage: "(0.54%)",
    isUp: true,
  },
  {
    name: "Asian Paints",
    price: "3,050.00",
    change: "-15.00",
    percentage: "(-0.49%)",
    isUp: false,
  },
  {
    name: "HCL",
    price: "1,100.00",
    change: "10.00",
    percentage: "(0.91%)",
    isUp: true,
  },
];


function Stocktickle() {
  return (
    <div className="stocktickle_container">
      {stockData.map((stock, index) => {
        return (
          <div className="stock_tickle">
            <p className="stock_title">{stock.name}</p>
            <div className="hr_line"></div>
            <p className="stock_price">{stock.price}</p>
            <p className={`stock_price_updown ${stock.isUp ? 'up' : 'down'}`}>
              <i className={`bx ${stock.isUp ? 'bxs-up-arrow-alt' : 'bxs-down-arrow-alt'}`}></i> {stock.change}
            </p>          
            <p className="stock_price_percentage">{stock.percentage}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stocktickle
