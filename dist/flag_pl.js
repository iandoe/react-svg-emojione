
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2c16.6,0,30,13.4,30,30H2C2,15.4,15.4,2,32,2z", fill: "#f9f9f9" }),
	React.createElement("path", { d: "m32 62c-16.6 0-30-13.4-30-30h60c0 16.6-13.4 30-30 30", fill: "#ed4c5c" })
);
};
