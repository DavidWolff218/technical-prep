import React, { Component } from "react";
import ReactDOM from "react-dom";

/*
Part I: 
Write a component that takes in a prop that is an array of objects, 
output a table that would show a table number in one column and the 
number of orders in a second column

Part II: 
Make it so that when I click on a row in the table, rows are 
added underneath the clicked table that shows each item and the item quantity

Part III:
Update this to grab this table information from a getOrders()
function that returns a Promise with the orders

Part IV:
Update this component to dynamically receive updates
via a web socket connection, you can subscribe to orderSocket(callback),
the callback will be called with a table and any additional
orders (not the total orders, only additions)
*/

// import getOrders from './getOrders';
// import subscribeOrders from "./subscribeOrders";
// subscribeOrders(data => console.log(data));

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

class ClassName extends React.Component {
  variables = "hello";
  hello() {
    return "world";
  }
}

class Orders extends React.Component {
  tableNum = (table) => {
    return table.tableNumber;
  };

  countNum = (table) => {
    let numberOfItems = 0;
    table.items.forEach((item) => {
      // console.log(item.itemName, item.quantity);
      numberOfItems += item.quantity;
    });
    // console.log("total", numberOfItems);
    return numberOfItems;
  };

  renderTable = () => {
    return this.props.data.map((table) => {
      return (
        <div>
          Table {this.tableNum(table)} - {this.countNum(table)} items
        </div>
      );
    });
  };

  render() {
    return (
      <>
        {this.renderTable()}
        {/* // <div>Table 1 - 8 items</div>
      // <div>Table 2 - 1 item</div> */}
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Orders data={sampleOrders} />, rootElement);
