import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import Property from './Property';

const Properties = () => {
    
   const [hotels,setHotels] = useState([])
   const [selectedCountry, setSelectedCountry] = useState(null);

   const [visibleHotels, setVisibleHotels] = useState(6); 
   const [loadMoreCount, setLoadMoreCount] = useState(3);

    useEffect(() =>{
        fetch('/hotels.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHotels(data)
        })
    },[])

    const filterHotelsByCountry =(country)=>{
        setSelectedCountry(country)
    }

    const filteredHotels = selectedCountry ? hotels.filter(hotel => hotel.country === selectedCountry) : hotels;


    const handleShowMore = () =>{
        setVisibleHotels(visibleHotels + loadMoreCount)
        console.log(visibleHotels+ loadMoreCount)
    }



    return (
        <div>
           <Heading></Heading>
           <div className='flex gap-4 items-center py-5'>
               <button className='btn btn-primary' onClick={() => filterHotelsByCountry('USA')}>New York</button>
               <button className='btn btn-primary' onClick={() => filterHotelsByCountry('India')}>Mumbai</button>
               <button className='btn btn-primary' onClick={() => filterHotelsByCountry('France')}>Paris</button>
               <button className='btn btn-primary' onClick={() => filterHotelsByCountry('UK')}>London</button>
           </div>

           <div className='grid grid-cols-3 gap-4'>
           {
                filteredHotels.slice(0, visibleHotels).map(hotel => <Property key={hotel.id} hotel={hotel}></Property>)
              }
           </div>
           {visibleHotels < filteredHotels.length && (
               <div className='mt-10 flex items-center justify-center'>
                   <button className='btn btn-primary' onClick={handleShowMore}>Show More</button>
               </div>
           )}
        </div>
    );
};

export default Properties;