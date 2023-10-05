import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaHome,
  FaBed,
  FaBath,
  FaArrowsAlt,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const SinglehotelInfo = () => {
  const [hotelInfo, setHotelInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchHotelData = async () => {
    try {
      // Fetch data from hotels.json or your API
      const response = await fetch("/hotels.json"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error(`Failed to fetch hotel data: ${response.statusText}`);
      }
      const data = await response.json();
      setHotelInfo(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Perform the data fetching when the component mounts
    fetchHotelData();
  }, []);

  // Find the matching hotel based on the id param
  const selectedHotel = hotelInfo.find((hotel) => hotel.id === parseInt(id));

  return (
    <div>
      <h2 className="mt-10 text-xl font-semibold">Hotel Information</h2>
      {loading ? (
        <p>Loading hotel information...</p>
      ) : (
        <div>
          {selectedHotel ? (
            <div className="w-1/2 m-auto mt-20">
              <div className="card w-96 bg-cyan-50 shadow-xl ">
                <figure className="relative">
                  <div className="flex justify-evenly items-center top-2">
                    <button className="absolute top-2 left-2 bg-white text-blue-800 px-3 py-1 rounded-md">
                      For Rent
                    </button>
                    <div className="absolute top-2 right-2">
                      <p className="bg-white px-2 py-1 rounded-xl">
                        <CiHeart className="text-blue-800 text-xl" />
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/ZS3W7Q8/p4.jpg"
                    alt="Shoes"
                    className="rounded-xl min-h-full"
                  />
                  {selectedHotel.status === "popular" && (
                    <div className="">
                      <div className="absolute text-white bottom-3 left-2 py-3 badge badge-primary">
                        popular
                      </div>
                    </div>
                  )}
                </figure>
                <div className="card-body">
                  <h3 className="flex gap-2 items-center">
                    <FaLocationArrow /> {selectedHotel.location}
                  </h3>
                  <h2 className="card-title">{selectedHotel.hotel_name}</h2>
                  <div className="flex gap-4 items-center py-5 ">
                    <p>
                      <FaHome />
                      <span className="py-2">
                        {selectedHotel.room_number} room
                      </span>
                    </p>
                    <p>
                      <FaBed />
                      <span className="py-2">{selectedHotel.beds} Bed</span>
                    </p>
                    <p>
                      <FaBath />
                      <span className="py-2">{selectedHotel.baths} Bath</span>
                    </p>
                    <p>
                      <FaArrowsAlt />
                      <span className="py-5">
                        {selectedHotel.room_size_sqft}sqr feet
                      </span>
                    </p>
                  </div>
                  <div className="card-actions flex justify-between items-center mt-5">
                    <h3 className="text-xl font-semibold">
                      ${selectedHotel.rent_price_per_night} / night
                    </h3>
                    <div className="flex gap-3 items-center justify-center">
                   
                        <button className="btn btn-primary rounded-xl text-white text-base">
                          select
                        </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Hotel not found for id: {id}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglehotelInfo;
