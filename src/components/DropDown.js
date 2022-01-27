import React,  {useState, useEffect, useRef} from 'react';  
import {BrowserRouter as Router, useNavigate, Link} from 'react-router-dom'
import './style.css'

function DropDown() {
  const options = ['Bitcoin', 'Ethereum', 'Binance Coin', 'Tether', 'Solana', 'Cardano', 'Ripple', 'Terra', 'Polkadot', 'Dogecoin', 'Polygon', 'Binance-USD', 'Shiba Inu', 'TerraUSD'];
  const [availableCoins, setAvailableCoins] = useState([]);
  const [Text, setText] = useState('');
  
  const onInputChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
    if(event.target.value === ""){
      setAvailableCoins([]); 
      return;
    }
    const new_available_coins = [];
    for(let i=0; i<options.length; i++){
      const toFind = event.target.value.toLowerCase();
      if(options[i].toLocaleLowerCase().includes(toFind)){
        new_available_coins.push(options[i]);
      }    
    }
    setAvailableCoins(new_available_coins);
  };
  let navigate = useNavigate();
  return (
    <div className='complete-search-box'>
      <div className='search-container'>
        <input type="text" className="form-control" id="exampleFormControlInput1" value={Text} placeholder='Search for coin' onChange={onInputChange}/>
        <div className="list-group">
          {availableCoins.map((option, index) => {
            return (
            <button type="button" className="list-group-item list-group-item-action active" key = {index} onClick={()=>{
                console.log({option});
                setText(option);
                setAvailableCoins([]);
            }}>
              {option}
            </button>
            );
          })}
        </div>
        </div>
        <div className='search-button'>
          <button className='btn button-style' role='button'>Search</button>
        </div>
    </div>
  );
}

export default DropDown;
