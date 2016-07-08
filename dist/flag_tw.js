
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2v30H2c0,16.6,13.4,30,30,30s30-13.4,30-30S48.6,2,32,2z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M32,2C15.4,2,2,15.4,2,32h30V2z", fill: "#2a5f9e" }),
	React.createElement("path", { d: "m24 20.3l5-1.3-5-1.3 3.7-3.7-5 1.3 1.3-5-3.7 3.7-1.3-5-1.3 5-3.7-3.7 1.3 5-5-1.3 3.7 3.7-5 1.3 5 1.3-3.7 3.7 5-1.3-1.3 5 3.7-3.7 1.3 5 1.3-5 3.7 3.7-1.3-5 5 1.3-3.7-3.7", fill: "#fff" }),
	React.createElement("circle", { cx: "19", cy: "19", fill: "#428bc1", r: "5.7" }),
	React.createElement("circle", { cx: "19", cy: "19", fill: "#fff", r: "5" })
);
};
