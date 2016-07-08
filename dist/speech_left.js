
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M8.6,5h46.9c3.6,0,6.6,2.9,6.6,6.5v29.8c0,3.6-2.9,6.5-6.6,6.5h-6.9V59L38.1,47.8H8.6c-3.6,0-6.6-2.9-6.6-6.5 V11.5C2,7.9,4.9,5,8.6,5z", fill: "#4fd1d9" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("circle", { cx: "48", cy: "26.4", r: "4.2" }),
		React.createElement("circle", { cx: "32", cy: "26.4", r: "4.2" }),
		React.createElement("circle", { cx: "16", cy: "26.4", r: "4.2" })
	)
);
};
