import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/pageWrapper/pageWrapper';

import CarCard,{ Icar } from '../../components/cards/carCard/carCard';
// moka car data 
const carsData = [
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car1.png",
    numOfUser: "4",
    price: "$200",
    status: "old",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: true,
    drive: "Coupe",
    type: "Automatic",
    imgCarPath: "./car2.png",
    numOfUser: "5",
    price: "$255",
    status: "old",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car3.png",
    numOfUser: "4",
    price: "$400",
    status: "new",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car5.png",
    numOfUser: "4",
    price: "$200",
    status: "old",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car6.png",
    numOfUser: "5",
    price: "$255",
    status: "new",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car7.png",
    numOfUser: "4",
    price: "$400",
    status: "new",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car4.png",
    numOfUser: "4",
    price: "$200",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car8.png",
    numOfUser: "6",
    price: "$300",
    status: "old",
  },
  {
    title: "Porshe 718 Cayman S",
    isAtCart: false,
    drive: "Coupe",
    type: "Manual",
    imgCarPath: "./car9.png",
    numOfUser: "5",
    price: "$600",
    status: "old",
  },
];



const Cars = () => {
  const [cars,setCars]=useState<Icar[]>([])
  // function callApi() {
  //   fetch("/fake", { method: "GET" })
  //     .then((data) =>{
  // data.json()
  // you should add set cars here
  // } ) 
  //     .then((json) => console.log(JSON.stringify(json))); 
  // }
  useEffect(() => {
    // here we should to fetch date
    // callApi();
    setCars(carsData);
  }, [])
 
  // filter cars
  const filterCarsByStatus = (status: string) => {
    const filteredArry = cars.filter((car) => car.status === status);
    setCars(filteredArry);
  };
    const filterCarsByKind = (kind: string) => {
      const filteredArry = cars.filter((car) => car.title.includes(kind));
      setCars(filteredArry);
  };
  const clearFilter = () => {
    setCars(carsData)
  }
   return (
     <>
       <PageWrapper>
         <div className="bg-[#F5F5F5] p-5">
           <header className="">
             <h1 className="my-4 text-[#242731] text-[30px] font-[700]">
               Booking
             </h1>
           </header>
           <nav className="h-[44px] flex justify-between mt-10">
             {/* left nav */}
             <div className="flex gap-[23px] flex-wrap">
               <div
                 onClick={() => filterCarsByStatus("new")}
                 className="bg-[#FFFFFF] cursor-pointer w-[122px] h-[36px] rounded-[23px] px-[10] py-[20] flex items-center justify-around "
               >
                 <span className="text-[#5F6165] text-[16px]"> New</span>
                 <img
                   src="./Rectangle.svg"
                   alt="icon arrow"
                   className="w-[8.67px] h-[13.87px]"
                 />
               </div>
               <div
                 className="bg-[#FFFFFF] cursor-pointer w-[122px] h-[36px] rounded-[23px] px-[10] py-[20] flex items-center justify-around "
                 onClick={() => filterCarsByKind("Toyota")}
               >
                 <span className="text-[#5F6165] text-[16px]">Toyota</span>
                 <img
                   src="./Rectangle.svg"
                   alt="icon arrow"
                   className="w-[8.67px] h-[13.87px]"
                 />
               </div>
               <div className="bg-[#FFFFFF] cursor-pointer w-[122px] h-[36px]  rounded-[23px] px-[10] flex items-center justify-around"
               onClick={ clearFilter}
               >
                 Clear Filter
               </div>
             </div>
             {/* right nav */}
             <div className="flex gap-[16px] items-start">
               <div className="bg-[#FFFFFF]  w-[44px] h-[44px] rounded-full flex justify-center items-center">
                 <img
                   src="./filter2 icon.svg"
                   alt="icon filter 1"
                   className="rounded-full mt-1"
                 />
               </div>

               <img
                 src="./filter.svg"
                 alt="icon filter 1"
                 className="w-[44px] h-[44px] rounded-full flex justify-center items-center"
               />
             </div>
           </nav>
           {/* cars display */}
           <section className="flex flex-col lg:flex-row  lg:flex-wrap gap-4 lg:gap-6 mobile:mt-20 lg:mt-16 mobile:items-center ">
             {cars.length > 0 ? (
               <>
                 {cars.map((car) => (
                   <CarCard {...car} />
                 ))}
               </>
             ) : (
               "No car founded "
             )}
           </section>
         </div>
       </PageWrapper>
     </>
   );
};

export default Cars;