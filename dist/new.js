
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M62,52c0,5.5-4.5,10-10,10H12C6.5,62,2,57.5,2,52V12C2,6.5,6.5,2,12,2h40c5.5,0,10,4.5,10,10V52z", fill: "#4fd1d9" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "M11,39V25h2.5l5.2,9.3V25H21v14h-2.6l-5.1-9.1V39H11z" }),
		React.createElement("path", { d: "M25,39V25h9.8v2.4h-7.1v3.1h6.6v2.4h-6.6v3.8H35V39H25z" }),
		React.createElement("path", { d: "M40.3,39L37,25h2.8l2.1,9.6l2.5-9.6h3.3l2.4,9.8l2.1-9.8H55l-3.3,14h-2.9L46,28.5L43.3,39H40.3z" })
	)
);
};
