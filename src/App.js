import React, { Component } from "react";

export class App extends Component {
  state = {
    bold: ""
  };

  handleClick = (e) => {
    this.setState({
      bold: e
    })
  };

  
  render() {
    return (
      <>
        <button id="elementA" style={{fontWeight: `${this.state.bold === "A" ? "bold" : ""}`}} onClick={() => this.handleClick("A")}>
          Element A
        </button>
        <br></br>
        <button id={"elementB"} style={{fontWeight: `${this.state.bold === "B" ? "bold" : ""}`}} onClick={() => this.handleClick("B")}>
          Element B
        </button>
      </>
    );
  }
}

export default App;


// import React, { Component } from "react";

// export class App extends Component {
//   state = {
//     A: "",
//     B: "",
//   };

//   handleClickA = () => {
//     this.setState({
//       A: "bold",
//       B: ""
//     })
//   };

//   handleClickB = () => {
//     this.setState({
//       A: "",
//       B: "bold"
//     })
//   };

//   render() {
//     return (
//       <>
//         <button style={{fontWeight: `${this.state.A}`}} onClick={this.handleClickA}>
//           Element A
//         </button>
//         <br></br>
//         <button style={{fontWeight: `${this.state.B}`}} onClick={this.handleClickB}>
//           Element B
//         </button>
//       </>
//     );
//   }
// }

// export default App;
