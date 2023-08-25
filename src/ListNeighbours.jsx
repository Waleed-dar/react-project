import React from "react";
import Card from "./Card";

export default function ListNeighbours({ continents, data,value }) {
  return (
    <div className="container mt-12">
      <h2 className="">Neighbouring Countries</h2>
      <div className=" sm:grid-cols-3 space-x-8 h-full">
        <div className="flex space-x-8 sm:mt-1 sm:ml-2 sm:grid-cols-3 ">
          {data.map((value1, index) => {
            if (value1.continents == `${continents}` && value1 != value) {
              return (
                <div key={index}>
                  <Card data={value1} />{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
