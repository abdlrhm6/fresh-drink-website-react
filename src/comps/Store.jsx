import React, { useState } from "react";
import Product from "./Product";
import "./store.css";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import star from "../assets/star.png";
import percent from "../assets/percent.png";
import dollar from "../assets/dollar.png";
import add from "../assets/add.png";
import cart from "../assets/cart.png";
const prod = [
  {
    id: 1,
    image: item1,
    name: "TOMATOS'DRINKS",
    price: "15",
    discount: "10%",
  },
  {
    id: 2,
    image: item2,

    name: "APPLE JUICE",
    price: "25",
    discount: "18%",
  },
  {
    id: 3,
    image: item3,
    name: "WATERMELON JUICE",
    price: "55",
    discount: "51%",
  },
  {
    id: 4,
    image: item4,
    name: "PINEAPPLE JUICE",
    price: "75",
    discount: "12%",
  },
  {
    id: 5,
    image: item5,
    name: "ORANGE JUICE",
    price: "35",
    discount: "31%",
  },
  {
    id: 6,
    image: item6,
    name: "CITRON JUICE",
    price: "65",
    discount: "1%",
  },
];
function Store() {
  const [showed, setShowed] = useState(prod[0]);
  const [q, setQ] = useState(1);


  const increase = () => {
    setQ(prev => prev + 1)
  }
  const hi = (data) => {
    for (let item of prod) {
      if (item.name === data) {
        setShowed(item);
      }
    }
  }

  function toDecimal(percent) {
    return parseFloat(percent) / 100;
  }
  return (
    <>
      <h1  style={{marginTop:'100px'}} className='title'> STORE</h1>
      <div className="store">
        <div className="item">
          <div className="info">
            <h1>
              {showed.name} <br />
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
              officia expedita?
            </p>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <img className="cimage" src={showed.image} alt="" />
          </div>

          <div className="buy">
            <div className="pricing">
              <span className="quantity">QUANTITI</span>
              <span className="count"> {q}</span>
              <span className="btn" onClick={increase}>
                <img src={add} alt="" />
              </span>
            </div>

            <div className="pricing">
              <span className="quantity">UNIT PRICE</span>
              <span className="count"> {showed.price}</span>
              <span className="btn">
                <img src={dollar} alt="" />
              </span>
            </div>

            <div className="pricing">
              <span className="quantity">DISCOUNT</span>
              <span className="count">{showed.discount}</span>
              <span className="btn">
                <img src={percent} alt="" />
              </span>
            </div>

            <div className="pricing">
              <span className="quantity">TOTAL</span>
              <span className="count">{(q * showed.price) - (toDecimal(showed.discount) * (q * showed.price))}</span>
              <span className="btn">
                <img src={dollar} alt="" />
              </span>
            </div>

            <button>
              <span>PURCHASE</span>
              <img src={cart} alt="" />
            </button>

            <button className="clear" onClick={() => setQ(1)}>CLEAR</button>
          </div>
        </div>

        <div className="products">
          {prod.map((p) => (
            <Product
              key={p.id}
              {...p}
              hi={(data) => {
                return hi(data);
              }}
            />
          ))}
        </div>
      </div>
    </>

  );
}

export default Store;
