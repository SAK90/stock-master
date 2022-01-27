import React from 'react';

const Units = (props)=> {
        let { coinName, lastUpdated, exchangeRate, bidPrice, askPrice } = props;
        return (
            <div className="my-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{coinName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Last updated : {lastUpdated}</h6>
                    <p className="card-text">The exchange rate for {coinName} was {exchangeRate}. Its bid price being {bidPrice} and ask price being {askPrice}.</p>
                </div>
                </div>
            </div>
        )
     
}

export default Units;