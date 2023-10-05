import React from "react";
import { FaLocationArrow,FaHome,FaBed ,FaArrowsAlt,FaBath} from "react-icons/fa";
const Property = ({hotel}) => {
    const {id,location,country,hotel_name,room_number,beds,baths,room_size_sqft,rent_price_per_night,status,image} = hotel
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/ZS3W7Q8/p4.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
            <h3 className="flex gap-2 items-center"><FaLocationArrow></FaLocationArrow> {location}</h3>
          <h2 className="card-title">{hotel_name}</h2>
          <div className="flex gap-4 items-center py-5 ">
            <p>
                <FaHome></FaHome><span className="py-2">Room</span>
            </p>
            <p>
               <FaBed></FaBed> <span className="py-2">Bed</span>
            </p>
            <p>
                <FaBath></FaBath><span className="py-2">Bath</span>
            </p>
            <p>
               <FaArrowsAlt></FaArrowsAlt> <span className="py-5">sqr feet</span>
            </p>
          </div>
          <div className="card-actions flex justify-between items-center mt-5">
            <h3 className="text-xl font-semibold">${rent_price_per_night} / night</h3>
           <div className="flex gap-3 items-center justify-center">  
           <button className="btn btn-primary rounded-xl   text-white text-base ">read more</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
