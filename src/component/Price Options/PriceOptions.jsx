// import React from 'react';

import PriceOption from "../../PriceOption.jsx/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Strength training area",
            "Locker room access",
            "Open 7 days a week"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": "$49.99/month",
          "features": [
            "All Basic Membership features",
            "Group fitness classes",
            "Sauna and steam room",
            "Personal trainer consultation (1 session/month)",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$79.99/month",
          "features": [
            "All Silver Membership features",
            "Unlimited personal trainer sessions",
            "Access to swimming pool",
            "Nutritional consultation",
            "Exclusive member events"
          ]
        }
      ]
      
    return (
        <div>
             <h2 className=" text-5xl text-center font-bold my-5">Best Prices in The town :</h2>
           <div className=" grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-5">
           {
                priceOptions.map(priceOption=><PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;