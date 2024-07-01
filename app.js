// React.createElement("",{},"") --> It is nothing just a javascript object and it is not any HTML Tag.
// const heading=React.createElement(
//     "h1",
//     {id: "heading"},   // for the attributes
//     "Welcome to React")


/*
<div id="parent">
<div id="child">
    <h1>I'm a h1 tah</h1>
</div>
</div>
*/

// const parent=React.createElement(
//         "div",
//         {id:"parent"},
//         React.createElement(
//             "div",
//             {id:"child"},
//             React.createElement("h1",{},"I'm a h1 tag")))    
// const root=ReactDOM.createRoot(document.getElementById("root"))
// // render() method is responsible to take this js object and convert it into h1 tag and put it up
// //root.render(heading)
// root.render(parent)


/*
<div id="parent">
<div id="child">
    <h1>I'm a h1 tah</h1>
    <h2>I'm h2</h2>
</div>
</div>
*/


// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm a h1 tag"), 
//         React.createElement("h2",{},"I'm a h2 tag")]))    
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)

/*
<div id="parent">
<div id="child1">
    <h1>I'm a h1 tah</h1>
    <h2>I'm h2</h2>
</div>
<div id="child2">
    <h1>I'm a h1 tah</h1>
    <h2>I'm h2</h2>
</div>
</div>
*/

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I'm a h1 tag"), 
        React.createElement("h2",{},"I'm a h2 tag")]),

        React.createElement(
            "div",
            {id:"child"},
            [React.createElement("h1",{},"I'm a h1 tag"), 
            React.createElement("h2",{},"I'm a h2 tag")])
    ])    
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)