import React, { useState } from "react";
import logo from "../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SideBarData } from "../constants";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import "./SideBar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars "
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="flex w-20 text-sm font-semibold gap-4 justify-center items-center h-[4%]">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span>GearUp</span>
        </div>

        <div className=" mt-16 flex flex-col gap-8">
          {SideBarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <img
                  src={item.icon}
                  width={35}
                  height={35}
                  alt={item.heading}
                />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
