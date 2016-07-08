
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#2a5f9e" },
		React.createElement("path", { d: "M32,2C21.7,2,12.7,7.1,7.3,15h49.4C51.3,7.1,42.3,2,32,2z" }),
		React.createElement("path", { d: "M32,62c10.3,0,19.3-5.1,24.7-13H7.3C12.7,56.9,21.7,62,32,62z" })
	),
	React.createElement("path", { d: "m59 19h-54c-1.9 3.9-3 8.3-3 13s1.1 9.1 3 13h54c1.9-3.9 3-8.3 3-13s-1.1-9.1-3-13", fill: "#ed4c5c" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m5 45c.7 1.4 1.5 2.7 2.3 4h49.4c.9-1.3 1.7-2.6 2.3-4h-54" }),
		React.createElement("path", { d: "m59 19c-.7-1.4-1.5-2.7-2.3-4h-49.4c-.9 1.3-1.7 2.6-2.3 4h54" }),
		React.createElement("circle", { cx: "18", cy: "32", r: "11" })
	),
	React.createElement("path", { d: "m18 35.9l4.9 3.8-1.8-6.1 4.9-3.8h-6.1l-1.9-6.1-1.9 6.1h-6.1l4.9 3.8-1.8 6.1z", fill: "#ed4c5c" })
);
};
