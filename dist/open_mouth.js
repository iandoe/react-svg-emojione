
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "32", cy: "45.1", r: "7" }),
		React.createElement("circle", { cx: "20.2", cy: "25", r: "4.5" }),
		React.createElement("circle", { cx: "42.7", cy: "25", r: "4.5" })
	)
);
};
