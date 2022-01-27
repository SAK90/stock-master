import React from 'react';
import './style.css';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import Footer from './Footer';


function Index() {
    return (
        <div>
            <div className='index-body'>
                <div className='text1'>
                    "If you don't find a way to make money while you sleep, you will work until you die". 
                    <br/>
                    <span>-Warren Buffet</span> 
                </div>
                <div className='images'>
                    <div className="image1"><img src={img1} className='img'/></div>
                    <div className="image2"><img src={img2} className='img'/></div>
                    <div className="image3"><img src={img3} className='img'/></div>
                    <div className="image4"><img src={img4} className='img'/></div>
                </div>
                <div className='text2'>
                    Investing in stocks just means buying tiny shares of ownership in a public company. Those small shares are known as the company’s stock, and by investing in it, you’re hoping the company grows and performs well over time. If that happens, your shares may become more valuable, and other investors may be willing to buy them from you for more than you paid for them. That means you could earn a profit if you decide to sell them.   
                    <br/><br/>
                    Crptocurrency is the modern day currency that can circulate without the need for a central monetary authority such as a government or bank. Cryptocurrencies can be exchanged for goods and services, though they often are used as investment vehicles. Cryptocurrency is also a key part of the operation of some decentralized financial networks, where digital tokens are an important tool for carrying out transactions.
                    <br/><br/>
                    If you have'e been living under a rock, you must have heard of bitcoin, but for the minorty of those who have't bitcoin is currently the most popular cryptocurrency. It was valued at $1 in Feburary of 2011 and not it is valued at $41,772 today reaching a peak of $65,000 in Feburary of 2021. So it is must for anyone to invest in stock and cryptocurrency with proper knowledge.
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Index;
