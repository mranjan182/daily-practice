import React from "react";
import "./Propertylist.css";

const Propertylist = () => {
  return (
    <>
      <div className="propertycontainer">
        <div className="propertyitem">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="propertyimage"
            />
          </div>
          <div className="propertytitle">
            <h1>Hotels</h1>
            <span>800,380 hotels</span>
          </div>
        </div>
        <div className="propertyitem">
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=I6CS04DMvxKlhD29uLfWWOb4SghqKeMl8pr1rSi0RIU="
              alt=""
              className="propertyimage"
            />
          </div>
          <div className="propertytitle">
            <h1>Apartments</h1>
            <span>970,380 apartments</span>
          </div>
        </div>
        <div className="propertyitem">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1630660664869-c9d3cc676880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVscm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="propertyimage"
            />
          </div>
          <div className="propertytitle">
            <h1>Resorts</h1>
            <span>18,800 resorts</span>
          </div>
        </div>
        <div className="propertyitem">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1653974123568-b5eff6d851e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVscm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="propertyimage"
            />
          </div>
          <div className="propertytitle">
            <h1>Villas</h1>
            <span>528,380 villas</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Propertylist;
