import React from "react";
import ReactDOM from "react-dom";


const sampleOrders = [
  {
    tableNumber: 1,
    items: [
      {
        itemName: "coffee",
        quantity: 2
      },
      {
        itemName: "donuts",
        quantity: 6
      }
    ]
  },
  {
    tableNumber: 2,
    items: [
      {
        itemName: "bagel",
        quantity: 1
      }
    ]
  }
];

const Orders = () => {
  return (
    <>
      <div>Table 1 - 8 items</div>
      <div>Table 2 - 1 item</div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Orders data={sampleOrders} />, rootElement);
