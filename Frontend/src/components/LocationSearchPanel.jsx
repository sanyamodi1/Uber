import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24 B ,near Malhotra's Cafe , Sheryians Coding School",
    "123, near Bhagwati Mahal, New Delhi",
    "78, near Sakshi Mahal, New Delhi",
    "12, near Bhaktivedanta Temple, Bangalore",
    "98, near Bhaktivedanta Temple, Bangalore",
    "56, near Rajiv Gandhi Mosque, New Delhi",
    "34, near Rajiv Gandhi Mosque, New Delhi",
  ];

  return (
    <div className="flex flex-col gap-3">
      {locations.map((elem , idx) => (
        <div onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
            }} className="flex border-gray-300 p-1 border-2 rounded-lg active:border-black gap-3 items-center" key={elem}>
          <h2 className="text-xl h-10 w-12 flex justify-center items-center rounded-full bg-[#eee]">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h2 className="text-lg">{elem}</h2>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
