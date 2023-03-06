import React from "react";
import Filters from "../common/filters";
import DeliveryCollection from "./delivaryCollections";
import TopBrands from "./topBrand";

const deliveryFilter=[
  {
      id:1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title:"Filter"
  },
  {
      id:2,
      title:"Rating: 4.0+"
  },
  {
      id:3,
      title:"Safe and Hygienic"
  },
  {
      id:4,
      title:"Pure Veg"
  },
  {
      id:5,
      title:"Delivery Time",
      icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
      id:6,
      title:"Great Offers"
  },
]
export default function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilter}/>
      </div>
      <DeliveryCollection/>
      <TopBrands/>
    </div>
  );
}
