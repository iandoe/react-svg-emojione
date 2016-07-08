
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#2a5f9e" },
		React.createElement("path", { d: "M32,2C16.8,2,4.2,13.3,2.3,28h59.5C59.8,13.3,47.2,2,32,2z" }),
		React.createElement("path", { d: "M32,62c15.2,0,27.8-11.3,29.7-26H2.3C4.2,50.7,16.8,62,32,62z" })
	),
	React.createElement("path", { d: "m61.7 28h-59.4c-.2 1.3-.3 2.6-.3 4 0 1.4.1 2.7.3 4h59.5c.2-1.3.3-2.6.3-4s-.2-2.7-.4-4", fill: "#ffe62e" }),
	React.createElement("path", { d: "m16 41.2l1.2-2.2.3 2.5 1.9-1.6-.7 2.4 2.4-.7-1.6 1.9 2.5.3-2.2 1.2 2.2 1.2-2.5.3 1.6 1.9-2.4-.7.7 2.4-1.9-1.6-.3 2.5-1.2-2.2-1.2 2.2-.3-2.5-1.9 1.6.7-2.4-2.4.7 1.6-1.9-2.5-.3 2.2-1.2-2.2-1.2 2.5-.3-1.6-1.9 2.4.7-.7-2.4 1.9 1.6.3-2.5z", fill: "#fff" })
);
};
