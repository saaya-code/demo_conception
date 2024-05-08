import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import Heading from "./Heading";

const MainDash = () => {
  return (
    <div className="flex flex-col justify-evenly lg:justify-start lg:mt-8 md:items-center">
      <Heading title={"Dashboard"} />
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
