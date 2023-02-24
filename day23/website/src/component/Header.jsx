import {
  faBed,
  faBus,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faSnowflake,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 2,
  });
  const handleoption=(name,operation)=>{
setOption((prev)=>{
  return{
    ...prev,
    [name]:operation==="i"?option[name]+1:option[name]-1,
  }
})
  }
  const [showoption,setShowoption]=useState(false)
  return (
    <div className="Header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSuitcase} />
            <span>Flight + Hotel</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSnowflake} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBus} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headertitle">Find your next stay</h1>
        <p className="headerdesc">
          Search low prices on hotels, homes and much more...
        </p>
        <div className="headersearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headericon" icon={faBed} />
            <input
              type="text"
              className="headerSearchInput"
              placeholder="Where are you going?"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headericon" icon={faCalendarDays} />
            <span className="headerSearchText">day to day</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headericon" icon={faPerson} />
            <span onClick={()=>setShowoption(!showoption)} className="headerSearchText">
              `{option.adult}adults. {option.children}children. {option.room}
              room`
            </span>
          {showoption &&  <div className="option">
              <div className="adults">
                <span className="adults">Adults</span>
                <div className="incdec">
                  <button disabled={option.adult===0} onClick={()=>handleoption('adult','d')} className="dec">-</button>
                  <span className="count">{option.adult}</span>
                  <button onClick={()=>handleoption('adult','i')} className="inc">+</button>
                </div>
              </div>
              <div className="adults">
                <span className="adults">Children</span>
                <div className="incdec">
                  <button disabled={option.children===0} onClick={()=>handleoption('children','d')} className="dec">-</button>
                  <span className="count">{option.children}</span>
                  <button onClick={()=>handleoption('children','i')} className="inc">+</button>
                </div>
              </div>
              <div className="adults">
                <span className="adults">Room</span>
                <div className="incdec">
                  <button disabled={option.room===0} onClick={()=>handleoption('room','d')} className="dec">-</button>
                  <span className="count">{option.room}</span>
                  <button onClick={()=>handleoption('room','i')} className="inc">+</button>
                </div>
              </div>
            </div>
}
          </div>
          <div className="headerSearchItem">
            <button className="headerbtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
