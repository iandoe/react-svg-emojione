
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m40 48h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" }),
		React.createElement("path", { d: "m27.1 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" }),
		React.createElement("path", { d: "m52.9 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" })
	)
);
};
