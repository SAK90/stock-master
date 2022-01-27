import React, {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from './Footer';
import './style.css'

function Crypto(props) {
  let {coinName} = props;
  const [dataPoints, setdataPoints] = useState([]);
  const [singleUnitData, setsingleUnitData] = useState([]);
  const API_KEY = 'T6RV5VBDYQDD1R92';
  const options = ['Bitcoin', 'Ethereum', 'Binance Coin', 'Tether', 'Solana', 'Cardano', 'Ripple', 'Terra', 'Polkadot', 'Dogecoin', 'Polygon', 'Binance-USD', 'Shiba Inu', 'TerraUSD'];
  const coinCodes = {
    'Bitcoin':'BTC', 'Ethereum':'ETH', 'Binance Coin':'BNB', 'Tether':'USDT', 'Solana':'SOL', 'Cardano':'ADA', 'Ripple':'XRP', 'Terra':'LUNA', 'Polkadot':'DOT', 'Dogecoin':'DOGE', 'Polygon':'MATIC', 'Binance-USD':'BUSD', 'Shiba Inu':'SHIB', 'TerraUSD':'UST'
  };

  const fetchData =  async () => {
    const url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coinCodes[coinName]}&market=CNY&apikey=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    const stockChartXvalues = [];
    const stockChartYvalues = [];
    for(let key in parsedData['Time Series (Digital Currency Daily)']){
      stockChartXvalues.push(key);
      stockChartYvalues.push(parsedData['Time Series (Digital Currency Daily)'][key]['1b. open (USD)']);
    }
    const dataTemp = [];
    for(let i=0; i<stockChartXvalues.length; i++){
      const obj = {
        x: stockChartXvalues[i],
        y: Number(stockChartYvalues[i])
      }
      dataTemp.push(obj);
    }
    // console.log(dataTemp);  
    setdataPoints(dataTemp);
    const url2 = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${coinCodes[coinName]}&to_currency=USD&apikey=${API_KEY}`;
    let data2 = await fetch(url2);
    let parsedData2 = await data2.json();

    // console.log(parsedData2['Realtime Currency Exchange Rate']);
    const unitData = [];
    unitData.push(parsedData2['Realtime Currency Exchange Rate']["5. Exchange Rate"]);
    unitData.push(parsedData2['Realtime Currency Exchange Rate']["6. Last Refreshed"]);
    unitData.push(parsedData2['Realtime Currency Exchange Rate']["8. Bid Price"]);
    unitData.push(parsedData2['Realtime Currency Exchange Rate']["9. Ask Price"]);
    setsingleUnitData(unitData);
    // console.log(singleUnitData);
    console.log(coinCodes['Bitcoin'])
    return;
  }

  useEffect(()=>{
    fetchData();
  }, [])



  return <>
    {/* {console.log(dataPoints)} */}
    <div className='top'>{coinName}</div>
    <div className='graph-container'>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={dataPoints}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>

    <div className='info'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{coinName} : Current statistics</h5>
          <h6 className="card-subtitle mb-2 text-muted">Current price: ${singleUnitData[0]}</h6>
          <p className="card-text">Last refreshed: {singleUnitData[1]}
          <br/>Bid price: ${singleUnitData[2]}
          <br/>Ask price: ${singleUnitData[3]}</p>
        </div>
      </div>
    </div>

    <div className='more-options'>
      <div className='head'>Explore more popular cryptocurries</div>
      <div className='options'>
        {options.map((element)=>{
          if(element.localeCompare(coinName)===0){
            return (
              <></>
            )
          }else{
          return (
            <div className='option-unit'>
              <a href='#'>{element}</a>
            </div>
          )
          }
        })}
      </div>
    </div>
    <Footer/>
  </>;
}

export default Crypto;
