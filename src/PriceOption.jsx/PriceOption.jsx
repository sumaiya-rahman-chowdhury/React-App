/* eslint-disable react/prop-types */
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

const PriceOption = ({priceOption}) => {
    return (
        <><div className="bg-blue-500 p-4 rounded-md  font-semibold text-white flex flex-col items-center py-10">
            <h2 className=" text-4xl ">
                {priceOption.price}
                {/* <span className=" text-3xl">/mon</span> */}
            </h2>
            <h3 className=" text-3xl my-5">{priceOption.name}</h3>
            <div className=" flex-grow">
                {priceOption.features.map((feature, idx) => <div key={idx} className='  flex items-center  gap-x-2 '><IoCheckmarkCircleSharp class></IoCheckmarkCircleSharp><li className=" list-none w-[250px]">{feature}</li></div>)}
            </div>
            <button className=' w-full bg-green-700 py-2 rounded-md mt-5'>Buy</button>

        </div></>
    );
};

export default PriceOption;