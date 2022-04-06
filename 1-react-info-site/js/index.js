// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/
const heading = document.createElement("h1");
heading.textContent = "Hello, React!";
heading.className = "header";
document.getElementById("root").append(heading);