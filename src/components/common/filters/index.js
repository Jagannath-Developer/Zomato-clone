import React from "react";
import FilterItem from "./filterItem";
import './filters.css'

export default function Filters({ filterList }) {
  return <div className="filters">
    {
       filterList&& filterList.map((filter)=>{
        return (
            <FilterItem filter={filter} key={filter.id}/>
        )
       })
    }
  </div>;
}
