import React from "react";
import { useState, useEffect} from "react";
import DropDown from "./DropDown";
import Units from "./Units.js";
import TypeAnimation from 'react-type-animation';

function MainPage() {
  const manualData = [
    {
      cn: "Binance-Coin", 
      lr: "2022-01-23 10:17:03",
      er:"386.84275513",
      bp: "386.84275513", 
      ap: "386.84275513"
    },
    {
      cn: "Bitcoin", 
      lr: "2022-01-23 14:29:01",
      er: "35605.07000000",
      bp: "35605.06000000", 
      ap: "35605.07000000"
    },
    {
      cn: "DogeCoin",
      lr: "2022-01-23 14:31:05",
      er: "0.13920000",
      bp: "0.13910000",
      ap: "0.13920000"
    },
    {
      cn: "Ethereum",
      lr: "2022-01-23 14:35:01",
      er: "2460.43000000",
      bp: "2460.26000000",
      ap: "2460.45000000"
    },
    {
      cn: "Tether",
      lr: "2022-01-23 14:45:01",
      er: "1.00020602",
      bp: "1.00020602",
      ap: "1.00020602" 
    },
    {
      cn: "Solana",
      lr: "2022-01-23 14:48:10",
      er: "97.03000000",
      bp: "97.02000000",
      ap: "97.03000000"  
    }
  ]
  return (
    <>
      <TypeAnimation
      cursor={false}
      sequence = {['Cryptocurrency']}
      wrapper = "div"
      repeat = {1}
      className = 'top'
      />
      <DropDown />
      <hr className="horizontal-line" id="horizontal-1"/>
      <div className="top-trending">Top trending Cryptocurrency</div>
      <hr className="horizontal-line" id="horizontal-2"/>
      <div className="container">
        <div className="row">
          {manualData.map((element) => {
             return <div className="col-md-4" key={element.cn}>
             <Units coinName = {element.cn} lastUpdated={element.lr} exchangeRate={element.er} bidPrice={element.bp} askPrice={element.ap }/>
         </div> 
          })}
        </div>
      </div>
    </>
  );
}

export default MainPage;
