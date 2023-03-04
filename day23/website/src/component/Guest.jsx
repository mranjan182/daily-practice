import React from "react";
import "./Guest.css";
const Guest = () => {
  return (
    <>
      <div className="guestcontainer">
        <div className="guestitem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
            alt=""
            className="guestimage"
          />
          <div className="guesttitle">
            <h1>6 Continents Apartments by Prague Residences</h1>
            <span>Prague 1, Czech Republic, Prague Starting from <b style={{color:"black"}}>₹ 8,607</b> </span>
          </div>
          <div className="rating">
            <button>8.3</button>
            <span>Very good . 248 reviews.</span>
          </div>
        </div>
        <div className="guestitem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
            alt=""
            className="guestimage"
          />
          <div className="guesttitle">
            <h1>Villa Domina</h1>
            <span>Split City Centre, Croatia, Split
Starting from <b style={{color:"black"}}>₹ 3,962</b></span>
          </div>
          <div className="rating">
            <button>8.3</button>
            <span>Very good . 248 reviews.</span>
          </div>
        </div>
        <div className="guestitem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
            alt=""
            className="guestimage"
          />
          <div className="guesttitle">
            <h1>7Seasons Apartments Budapest</h1>
            <span>Prague 1, Czech Republic, Prague Starting from <b style={{color:"black"}}>₹ 8,607</b></span>
          </div>
          <div className="rating">
            <button>8.3</button>
            <span>Very good . 248 reviews.</span>
          </div>
        </div>
        <div className="guestitem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
            alt=""
            className="guestimage"
          />
          <div className="guesttitle">
            <h1>numa I Vita Apartments</h1>
            <span>Prague 1, Czech Republic, Prague Starting from <b style={{color:"black"}}>₹ 8,607</b></span>
          </div>
          <div className="rating">
            <button>8.3</button>
            <span>Very good . 248 reviews.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
