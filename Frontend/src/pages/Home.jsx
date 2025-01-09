import React, { useState, useRef } from "react";
import uberlogo from "../assets/Uber-Logo.wine.png";
import map from "../assets/maps.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookinForDriver from "../components/LookinForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound , setVehicleFound] = useState(false);
  const [WaitinForDriver , setWaitinForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookinForDriverPanelRef = useRef(null);
  const WaitinForDriverRef = useRef(null);

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
          padding: "3%",
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: "0%",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [
      confirmRidePanel
    ]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(lookinForDriverPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookinForDriverPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [
      vehicleFound
    ]
  );
  useGSAP(
    function () {
      if (WaitinForDriver) {
        gsap.to(WaitinForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(WaitinForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [
      WaitinForDriver
    ]
  );
  return (
    <div className="relative overflow-hidden">
      <img src={uberlogo} alt="" className="w-20 absolute left-2" />
      <div className="w-screen h-screen">
        <img
          src={map}
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </div>
      <div className="absolute flex flex-col justify-end w-full h-screen top-0">
        <div className="bg-white h-[25%] p-3 relative">
          <h3
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-4 text-2xl"
          >
            <i class="ri-arrow-down-wide-line"></i>
          </h3>
          <h1 className="font-semibold text-3xl mt-3 mb-4">Find a Trip</h1>
          <form
            className="flex flex-col gap-6 justify-center"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="text-xl bg-[#dfdfdfe1] px-7 p-3 rounded-lg placeholder:text-lg"
              type="text"
              placeholder="Enter Pickup Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#dfdfdfe1] px-5 p-3 rounded-lg placeholder:px-4 placeholder:text-lg"
              type="text"
              placeholder="Enter Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white opacity-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="translate-y-full fixed w-full flex flex-col gap-3 z-10 p-4 bg-white  bottom-0"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div
        ref={confirmRidePanelRef}
        className="translate-y-full fixed w-full flex flex-col gap-3 z-10 p-4 bg-white  bottom-0"
      >
       <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div
        ref={lookinForDriverPanelRef}
        className="translate-y-full fixed w-full flex flex-col gap-3 z-10 p-4 bg-white  bottom-0"
      >
        <LookinForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        
        className="fixed w-full flex flex-col gap-3 z-10 p-4 bg-white bottom-0"
      >
        <WaitForDriver setWaitinForDriver={setWaitinForDriver} />
      </div>
    </div>
  );
};

export default Home;
