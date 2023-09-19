// import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone=>{
            const obj = {
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj ;
        })
        console.log(phonesWithFakeData)
        setPhones(phonesWithFakeData)
    })},[])
    return (
        <div className=' mt-20 flex justify-center'>
             <BarChart
          width={800}
          height={300}
          data={phones}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        ><Bar dataKey="price" fill="#8884d8" />
        <XAxis></XAxis>
        <YAxis></YAxis>
        
        </BarChart>
        </div>
    );
};

export default Phones;