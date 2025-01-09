import React from "react";
import plscar from "../assets/plscar.png";
const ConfirmRide = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="absolute right-4 text-black text-2xl"
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h3>
      <div className="w-full font-semibold text-2xl mt-4">
        Confirm your Ride
      </div>
      <div className="flex flex-col gap-3 justify-between items-center">
        <img className="w-[40%] p-2" src={plscar} alt="" />
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
      <div className="flex justify-center">
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="bg-green-600 w-full font-semibold px-3 py-2 m-2 text-xl text-white rounded-lg "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
