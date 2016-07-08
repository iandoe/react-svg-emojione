
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M55.4,5H8.6C4.9,5,2,7.9,2,11.5v29.8c0,3.6,2.9,6.5,6.6,6.5h6.9V59l10.4-11.2h29.6c3.6,0,6.6-2.9,6.6-6.5V11.5 C62,7.9,59.1,5,55.4,5z", fill: "#4fd1d9" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("circle", { cx: "16", cy: "26.4", r: "4.2" }),
		React.createElement("circle", { cx: "32", cy: "26.4", r: "4.2" }),
		React.createElement("circle", { cx: "48", cy: "26.4", r: "4.2" })
	)
);
};
