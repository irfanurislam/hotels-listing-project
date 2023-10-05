import React from "react";
import { FaLocationArrow,FaHome,FaBed ,FaArrowsAlt,FaBath, FaHeart} from "react-icons/fa";
import {CiHeart} from 'react-icons/ci'
import { Link } from "react-router-dom";
const Property = ({hotel}) => {
    const {id,location,country,hotel_name,room_number,beds,baths,room_size_sqft,rent_price_per_night,status,image} = hotel
  return (
    <div>
      <div className="card w-96 bg-cyan-50 shadow-xl">
       
        
       <figure className=" relative">
       <div className="flex justify-evenly items-center top-2">
        <button className="absolute top-2 left-2 bg-white text-blue-800 px-3 py-1 rounded-md">
          For Rent
        </button>
        <div className="absolute top-2 right-2">
          <p className=" bg-white px-2 py-1 rounded-xl "><CiHeart className=" text-blue-800  text-xl " /></p>
        </div>

        </div>
          <img
            src="https://i.ibb.co/ZS3W7Q8/p4.jpg"
            alt="Shoes"
            className="rounded-xl min-h-full"
          />
          
         {status === "popular" && (
          <div className="">
           <div className="absolute text-white  bottom-3 left-2 py-3 badge badge-primary">populer</div>
          </div>
        )}

        </figure>
       
        <div className="card-body px-0 py-5">
            <h3 className="flex gap-2 items-center"><FaLocationArrow></FaLocationArrow> {location}</h3>
          <h2 className="card-title">{hotel_name}</h2>
          <div className="grid grid-cols-4 gap-4 mt-5">
                    <FaHome />
                    <FaBed />
                    <FaBath />
                    <FaArrowsAlt />
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-1">
                        <p>   {room_number} room</p>
                        <p className="">{beds} Bed</p>
                        <p className="">{baths} Bath</p>
                        <p> <span className="">{room_size_sqft}sqr feet</span></p>
                    </div>
          <div className="card-actions flex justify-between items-center mt-5">
            <h3 className="text-xl font-semibold">${rent_price_per_night} / night</h3>
           <div className="flex gap-3 items-center justify-center">  
           <Link to={`/info/${id}`}><button className="btn btn-primary rounded-xl   text-white text-base ">read more</button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
