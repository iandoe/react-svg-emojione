
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "20.5", cy: "27.6", r: "5" }),
		React.createElement("circle", { cx: "43.5", cy: "27.6", r: "5" }),
		React.createElement("path", { d: "m38.9 48h-13.8c-1.5 0-1.5-4 0-4h13.7c1.6 0 1.6 4 .1 4" })
	)
);
};
