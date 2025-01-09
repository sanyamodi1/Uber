import React from 'react'
import carlogo from "../assets/plscar.png";
import Uber_Moto from "../assets/Uber_Moto.webp";
import Uber_Auto from "../assets/Uber_Auto.webp";

const VehiclePanel = (props) => {
  return (
    <div>
        <h3
         onClick={()=>{
          props.setVehiclePanel(false);
         }}
          className="absolute right-4 text-black text-2xl"
        >
          <i class="ri-arrow-down-wide-line"></i>
        </h3>
        <div className="w-full font-semibold text-2xl">Find a Ride</div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex gap-3 items-center rounded-lg border-solid border-2 px-2   p-2  active:border-black border-gray-300">
          <div className="h-12 w-24">
            <img className="h-12" src={carlogo} alt="" />
          </div>
          <div>
            <div className="flex">
              <div className="font-semibold mr-3 text-lg">UberGO</div>
              <i className="ri-user-fill"></i>
              <span className="font-sm">4</span>
            </div>
            <div className="flex gap-2">
              <div className="text-sm">2 mins away</div>
              <div className="text-sm">15:24</div>
            </div>
            <div className="text-gray-600 text-sm">
              Affordable , compact rides
            </div>
          </div>
          <div className="text-xl font-semibold">₹193.20</div>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className=" active:border-black flex gap-3 items-center rounded-lg border-solid border-2  p-2 border-gray-300">
          <div className="h-12 w-24">
            <img className="h-12" src={Uber_Moto} alt="" />
          </div>
          <div>
            <div className="flex">
              <div className="font-semibold mr-3 text-lg">Moto</div>
              <i className="ri-user-fill"></i>
              <span className="font-sm">4</span>
            </div>
            <div className="flex gap-2">
              <div className="text-sm">2 mins away</div>
              <div className="text-sm">15:24</div>
            </div>
            <div className="text-gray-600 text-sm">
              Affordable , compact rides
            </div>
          </div>
          <div className="text-xl font-semibold">₹193.20</div>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className=" active:border-black flex gap-3 items-center rounded-lg border-solid border-2 p-2  border-gray-300">
          <div className="h-12 w-24">
            <img className="h-12" src={Uber_Auto} alt="" />
          </div>
          <div>
            <div className="flex">
              <div className="font-semibold mr-3 text-lg">Auto</div>
              <i className="ri-user-fill"></i>
              <span className="font-sm">4</span>
            </div>
            <div className="flex gap-2">
              <div className="text-sm">2 mins away</div>
              <div className="text-sm">15:24</div>
            </div>
            <div className="text-gray-600 text-sm">
              Affordable , compact rides
            </div>
          </div>
          <div className="text-xl font-semibold">₹193.20</div>
        </div>
    </div>
  )
}

export default VehiclePanel