import React from "react";
import plscar from "../assets/plscar.png";

const WaitForDriver = (props) => {
  return (
    <div className="">
      <h3
        onClick={() => {
          props.setWaitinForVehicle(false);
        }}
        className=" flex justify-center items-center mb-3 text-black text-2xl"
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h3>
      <div className="flex justify-between items-center m-2">
      <img className="w-[35%] p-2" src={plscar} alt="" />
      <div>
        <div className="text-xl">Bhrijesh</div>
        <div className="text-2xl font-medium">KA12-349</div>
        <div className="text-lg">White suzuki</div>
      </div>
      </div>
      <div className="mt-3 flex flex-col gap-3 justify-between items-center">
        
        <div className="w-full">
          <div className="w-full px-3 flex gap-4 items-center">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div className="w-full">
              <h3 className=" text-xl font-medium">48/Home</h3>
              <h3 className="font-md text-gray-500">Shinde Stores</h3>
            </div>
          </div>
          <div className="h-[2px] bg-gray-300 w-full mt-3"></div>
        </div>
        <div className="w-full">
          <div className=" w-full px-3 flex gap-4 items-center">
            <div className=" flex justify-center items-center">
              <i className="ri-map-pin-user-line text-lg"></i>
            </div>
            <div className="w-full">
              <h3 className=" text-xl font-medium">562 Avenue</h3>
              <h3 className="font-md text-gray-500">Cine</h3>
            </div>
          </div>
          <div className="h-[2px] px-3 bg-gray-300 w-full mt-3"></div>
        </div>
        <div className="w-full">
          <div className=" w-full px-3 flex gap-4 items-center">
            <div className=" flex justify-center items-center">
              <i className="ri-cash-line text-lg"></i>
            </div>
            <div className="w-full">
              <h3 className=" text-xl font-medium">₹193.12</h3>
              <h3 className="font-md text-gray-500">Cash Cash</h3>
            </div>
          </div>
          <div className="h-[2px] px-3 bg-gray-300 w-full my-3"></div>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
