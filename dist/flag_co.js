
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m62 32h-60c0 5.5 1.5 10.6 4 15h52c2.6-4.4 4-9.5 4-15", fill: "#2a5f9e" }),
	React.createElement("path", { d: "M32,2C15.5,2,2,15.4,2,32h60C62,15.4,48.6,2,32,2z", fill: "#ffe62e" }),
	React.createElement("path", { d: "m32 62c11.1 0 20.8-6 26-15h-52c5.3 9 14.9 15 26 15", fill: "#ed4c5c" })
);
};
