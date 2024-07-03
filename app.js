import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => object =>HTML Element(render)
const parent=React.createElement(
    "div",
    {id:"parent"},
    "Shivesh is using"
)  
    console.log(parent);
    // JSX (transpiled before it reaches the JS) - PARCEL - Babel
    
    // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
    const heading = () => (
    <h1 className="head" tabIndex="5">
        hey Shivesh! using JSX
        </h1>
    );
    // React functional Component
    // Class Based Component - Old
    // Functional Component - New (A JS function that return the JSX Code is called the functional Component)
    
    // const HeadingComponent1 = () =>{
    //     return <h1>Functional Component</h1>
    // }
// Functional Component  
  const number=100000;
    const HeadingComponent = () => (
        <div id="container">
            {parent}
            <h2>{number+100}</h2>
        <h1>hey Shivesh using Functional Component</h1>
        </div>
    );

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)