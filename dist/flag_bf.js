
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,62c16.6,0,30-13.4,30-30H2C2,48.6,15.4,62,32,62z", fill: "#83bf4f" }),
	React.createElement("path", { d: "M32,2C15.4,2,2,15.4,2,32h60C62,15.4,48.6,2,32,2z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "m32 36.8l5.6 4.2-2.1-6.9 5.5-4.2h-6.9l-2.1-6.9-2.1 6.9h-6.9l5.5 4.2-2.1 6.9z", fill: "#ffce31" })
);
};
